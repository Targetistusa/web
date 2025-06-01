import React, { FC } from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../shadcn_components/ui/card";
import { Button } from "../shadcn_components/ui/button";
import { Input } from "../shadcn_components/ui/input";
import { Separator } from "../shadcn_components/ui/separator";

import "./AuthPage.css"
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { authReducer, handleSignInAmplify, handleSignUpAmplify, initialAuthState } from "../services/auth/auth";

const LoginPage: FC = () => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const { email, password, confirmPassword, isSignUp, isLoading } = state;
  const navigate = useNavigate()
  

  function handleSignUpToggle(e: React.FormEvent) {
    
    e.preventDefault();
    dispatch({ type: "TOGGLE_SIGNUP" });
  }
  async function handleContinue(e: React.FormEvent) {
    e.preventDefault(); 
    if (isSignUp) {
      const allRulesValid = [
        password.length >= 6,
        /\d/.test(password),
        /[a-z]/.test(password),
        /[A-Z]/.test(password),
      ].every(Boolean);

      if (!allRulesValid || password !== confirmPassword) {
        alert("Password does not meet all the requirements.");
        return;
      }
      await handleSignUpAmplify(email, password, navigate)
    }
    else {
      await handleSignInAmplify(email, password, navigate)
    }
    dispatch({type: 'RESET_DEFAULT'})
  }

  return (
    <main className="login-page">
      <div className="login-card">
        {/* -------- Left pane -------- */}
        <div className="login-form">
          <CardHeader className="form-header">
            <CardTitle className="form-title">
              Login <span className="highlight">to Targetist</span>
            </CardTitle>
            <CardDescription className="font-bold text-lg text-center text-gray-500">
              New to Targetist?
              <Button variant={'link'} className="underline font-bold text-lg" onClick={handleSignUpToggle}>
                {isSignUp ? "Login" : "Sign Up"}
              </Button>
            </CardDescription>
          </CardHeader>

          <CardContent className="form-content">
            <Button className="w-full flex items-center gap-2 rounded-xl text-lg bg-slate-100 py-2">
              <img src={require('../../assets/apple2.png')} alt="Google Logo" className="google-oauth-logo"/> Continue with Apple &nbsp; {/* This space is to bring consistent alignment*/}
            </Button>
            <Button className="w-full flex items-center gap-2 rounded-xl text-lg bg-slate-100 py-2">
              <img src={require('../../assets/Google.png')} alt="Google Logo" className="google-oauth-logo"/> Continue with Google
            </Button>

            <div className="separator-section">
              <Separator className="separator" />
              <span className="separator-label">or</span>
              <Separator className="separator" />
            </div>

            <form className="input-form" onSubmit={handleContinue}>
              <Input
                type="email"
                placeholder="Email"
                className="rounded-xl"
                required
                value={email}
                onChange={(e)=> dispatch({type : "SET_EMAIL", payload: e.target.value})}
              />
              <Input
                type="password"
                placeholder="Password"
                required
                className="rounded-xl"
                value={password}
                onChange={(e)=> dispatch({type : "SET_PASSWORD", payload: e.target.value})}
              />
              {isSignUp && (
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  className="rounded-xl"
                  value={confirmPassword}
                  onChange={(e)=> dispatch({type : "SET_CONFIRM_PASSWORD", payload: e.target.value})}
                />
              )}

              {isSignUp && (<ul className="password-rules">
                {[
                  { ok: password.length >= 6, text: "At least 6 characters" },
                  { ok: /\d/.test(password), text: "One digit (0-9)" },
                  { ok: /[a-z]/.test(password), text: "One lowercase letter (a-z)" },
                  { ok: /[A-Z]/.test(password), text: "One uppercase letter (A-Z)" },
                ].map(({ ok, text }, i) => (
                  <li key={i} className={ok ? "rule-valid" : "rule-invalid"}>
                    {ok && <span className="checkmark">✔</span>}
                    {text}
                  </li>
                ))}
              </ul>)}

              <Button type="submit" 
                className="w-full mt-4 py-6 text-base font-semibold rounded-full bg-black text-slate-200">
                Continue
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex items-center justify-center mt-6 text-sm font-bold text-gray-500 text-center">
            By continuing, you agree to Targetist's &nbsp;
            <a href="/" className="underline text-center">
              Privacy Policy
            </a>
            .
          </CardFooter>
        </div>

        {/* -------- Right-hand illustration -------- */}
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
