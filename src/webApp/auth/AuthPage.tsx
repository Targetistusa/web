// src/pages/AuthPage.tsx
import React, { FC, useEffect, useReducer } from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../shadcn_components/ui/card";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "../shadcn_components/ui/alert-dialog";

import axios, { AxiosResponse } from "axios";
import { Button } from "../shadcn_components/ui/button";
import { Input } from "../shadcn_components/ui/input";
import { Separator } from "../shadcn_components/ui/separator";

import "./AuthPage.css";

import { useNavigate } from "react-router-dom";
import {
  authReducer,
  handleSignInAmplify,
  handleSignUpAmplify,
  confirmSignUpAmplify,
  initialAuthState,
} from "../services/auth/auth";
import { useGoogleLogin } from "@react-oauth/google";
import { useUserContext } from "../Context/UserContext";
import { fetchUserAttributes } from "aws-amplify/auth";

type AuthError = { title: string; description: string };

const LoginPage: FC = () => {
  /* ---------- State ---------- */
  const [state, dispatch] = useReducer(authReducer, initialAuthState);
  const { email, password, confirmPassword, isSignUp, emailError, passwordError, confirmPasswordError, preferredUsername, preferredUsernameError} = state;

  const [authError, setAuthError] = React.useState<AuthError | null>(null);
  const [showDialog, setShowDialog] = React.useState(false);

  const [showOTP, setShowOTP] = React.useState(false);      // toggles OTP view
  const [confirmationCode, setCode] = React.useState("");

  const [googleAccessToken, setGoogleAccessToken] = React.useState<string | null>(null);

  /* ---------- Hooks ---------- */
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  /* ---------- Google OAuth ---------- */
  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      setGoogleAccessToken(access_token);
      navigate("/dashboard");
    },
    onError: () => navigate("/signin"),
  });

  /* ---------- Form helpers ---------- */
  function handleSignUpToggle(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: "TOGGLE_SIGNUP" });
  }

  async function handleContinue(e: React.FormEvent) {
    e.preventDefault();
    dispatch({ type: "RESET_ERRORS" });

    /* ----- local validation ----- */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    if (!email) {
      dispatch({ type: "SET_EMAIL_ERROR", payload: "Email is required" });
      hasError = true;
    }
    if (email && !emailRegex.test(email)) {
      dispatch({ type: "SET_EMAIL_ERROR", payload: "Invalid email format" });
      hasError = true;
    }
    if (password.length < 8 || !/\d/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      dispatch({ type: "SET_PASSWORD_ERROR", payload: "Password does not meet requirements" });
      hasError = true;
    }
    if (isSignUp && password !== confirmPassword) {
      dispatch({ type: "SET_CONFIRM_PASSWORD_ERROR", payload: "Passwords do not match" });
      hasError = true;
    }
    if (isSignUp && !preferredUsername) {
      dispatch({ type: "SET_PREFERRED_USERNAME_ERROR", payload: "Preferred username is required" });
      hasError = true;
    }
    if (hasError) return;

    /* ----- amplify flow ----- */
    if (isSignUp) {
      const signUpRes = await handleSignUpAmplify(email, password, navigate, (msg) => {
        setAuthError(msg);
        setShowDialog(true);
      });
      if (signUpRes){
        setShowOTP(true);
        return;
      }         // switch to OTP form
      
    } else {
      const res = await handleSignInAmplify(email, password, navigate, (msg) => {
        setAuthError(msg);
        setShowDialog(true);
      });

      if (res.isSignedIn) {
        const amplifyUser = await fetchUserAttributes();
        setUser({
          userId: amplifyUser.sub || "",
          preferred_username: amplifyUser?.preferred_username || "",
          email: amplifyUser?.email || "",
          signedIn_withAmplify: true,
          signedIn_withGoogle: false,
          signedIn_withApple: false,
          profileImage: "",
        });
      }
    }

    dispatch({ type: "RESET_DEFAULT" });
  }

  async function handleConfirmCode(e: React.FormEvent) {
    e.preventDefault();
    await confirmSignUpAmplify(email, confirmationCode, navigate, (msg) => {
      setAuthError(msg);
      setShowDialog(true);
    });
  }

  /* ---------- Google profile fetch ---------- */
  useEffect(() => {
    if (!googleAccessToken) return;
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleAccessToken}`, {
        headers: {
          Authorization: `Bearer ${googleAccessToken}`,
          Accept: "application/json",
        },
      })
      .then((user: AxiosResponse) => {
        setUser({
          userId: user.data.id,
          preferred_username: user.data.name,
          email: user.data.email,
          signedIn_withAmplify: false,
          signedIn_withGoogle: true,
          signedIn_withApple: false,
          profileImage: "",
        });
      })
      .catch(console.error);
  }, [googleAccessToken, setUser]);

  /* ---------- Helpers to build the two panes ---------- */
  const SignUpLoginPane = (
    <>
      <CardHeader className="flex flex-col items-center justify-center">
        <CardTitle className="form-title">
          {isSignUp ? "Create your Targetist account" : "Welcome back"}
        </CardTitle>
        <CardDescription className="text-sm text-center text-gray-500 mb-5">
          <Button variant="link" className="text-sm" onClick={handleSignUpToggle}>
            {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </Button>
        </CardDescription>
      </CardHeader>

      <CardContent className="form-content">
        <Button className="w-full flex items-center gap-2 rounded-xl text-lg bg-slate-100 py-2 hover:bg-slate-200">
          <img src={require("../../assets/apple2.png")} alt="Apple" className="google-oauth-logo" />
          Continue with Apple &nbsp;
        </Button>

        <Button
          className="w-full flex items-center gap-2 rounded-xl text-lg bg-slate-100 py-2 hover:bg-slate-200"
          onClick={() => handleGoogleSignIn()}
        >
          <img src={require("../../assets/Google.png")} alt="Google" className="google-oauth-logo" />
          Continue with Google
        </Button>

        <div className="separator-section">
          <Separator className="flex-1 h-px bg-slate-200" />
          <span className="separator-label">or</span>
          <Separator className="flex-1 h-px bg-slate-200" />
        </div>

        <form className="input-form" onSubmit={handleContinue}>
          <Input
            type="text"
            placeholder="Email"
            className={`rounded-xl ${emailError ? "border-red-500 focus:outline-red-500" : "focus:outline-violet-700"}`}
            required
            value={email}
            onChange={(e) => dispatch({ type: "SET_EMAIL", payload: e.target.value })}
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

          {isSignUp && (
            <Input
              type="text"
              placeholder="Preferred Username"
              className={`rounded-xl ${preferredUsernameError ? "border-red-500 focus:outline-red-500" : "focus:outline-violet-700"}`}
              required
              value={preferredUsername}
              onChange={(e) => dispatch({ type: "SET_PREFERRED_USERNAME", payload: e.target.value })}
            />
          )}
          {preferredUsernameError && <p className="text-red-500 text-sm mt-1">{preferredUsernameError}</p>}

          <Input
            type="password"
            placeholder="Password"
            className={`rounded-xl ${passwordError ? "border-red-500 focus:outline-red-500" : "focus:outline-violet-700"}`}
            required
            value={password}
            onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
          />
          {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}

          {isSignUp && (
            <>
              <Input
                type="password"
                placeholder="Confirm Password"
                className={`rounded-xl ${confirmPasswordError ? "border-red-500 focus:outline-red-500" : "focus:outline-violet-700"}`}
                required
                value={confirmPassword}
                onChange={(e) => dispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value })}
              />
              {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
            </>
          )}

          {isSignUp && (
            <ul className="password-rules">
              {[
                { ok: password.length >= 8, text: "At least 8 characters" },
                { ok: /\d/.test(password), text: "One digit (0-9)" },
                { ok: /[a-z]/.test(password), text: "One lowercase letter (a-z)" },
                { ok: /[A-Z]/.test(password), text: "One uppercase letter (A-Z)" },
              ].map(({ ok, text }, i) => (
                <li key={i} className={ok ? "rule-valid" : "rule-invalid"}>
                  {ok && <span className="checkmark">✔</span>} {text}
                </li>
              ))}
            </ul>
          )}

          <Button
            type="submit"
            className="w-full mt-4 py-6 text-base font-semibold rounded-xl bg-black text-slate-200 hover:bg-gray-800 duration-200"
          >
            Continue
          </Button>
        </form>
      </CardContent>

      <CardFooter className="flex items-center justify-center mt-6 text-sm font-bold text-gray-500">
        By continuing, you agree to&nbsp;
        <a href="https://targetist.io/privacy-policy.html" className="underline">
          Targetist's Privacy Policy
        </a>
        .
      </CardFooter>
    </>
  );

  const OTPPane = (
    <>
      <CardHeader>
        <CardTitle>Verify your email</CardTitle>
        <CardDescription className="text-center">
          Enter the 6-digit code sent to <br />
          <strong>{email}</strong>
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleConfirmCode} className="w-full px-6 mt-4">
        <Input
          type="text"
          maxLength={6}
          pattern="\d{6}"
          placeholder="123 456"
          className="text-center tracking-widest text-xl rounded-xl focus:outline-violet-700"
          value={confirmationCode}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          required
        />

        <Button
          type="submit"
          className="w-full mt-6 py-6 font-semibold rounded-xl bg-black text-slate-200 hover:bg-gray-800 duration-200"
        >
          Confirm
        </Button>
      </form>
    </>
  );

  /* ======================= Render ======================= */
  return (
    <main className="login-page">
      {/* ---------- Error dialog ---------- */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent className="bg-slate-100 rounded-xl shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>{authError?.title}</AlertDialogTitle>
            <AlertDialogDescription>{authError?.description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button
              variant="secondary"
              className="bg-slate-200 px-4 text-violet-500 rounded-xl hover:bg-slate-400 hover:text-violet-800 duration-200"
              onClick={() => setShowDialog(false)}
            >
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="login-card">
        {/* ---------- Left card ---------- */}
        <div className="login-form">
          {showOTP ? OTPPane : SignUpLoginPane}
        </div>

        {/* ---------- Illustration (right) ---------- */}
        <div className="login-image-container">
          <div className="image-wrapper">
            <img
              src={require("@/src/assets/targetist_new_logo.png")}
              alt="Targetist logo"
              className="login-image"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
