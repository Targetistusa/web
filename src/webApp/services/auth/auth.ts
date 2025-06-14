import { googleLogout } from '@react-oauth/google';
import { signIn, signOut, signUp } from 'aws-amplify/auth';
import { NavigateFunction } from 'react-router-dom';
import { defaultUser } from '../../Context/UserContext';
export interface AuthState {
  email: string;
  password: string;
  confirmPassword: string;
  isSignUp: boolean;
  isLoading: boolean;
  emailError?: string;
  passwordError?: string;
  confirmPasswordError?: string;
}

type AuthError = {
  title: string;
  description: string;
}

export type AuthAction =
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'SET_CONFIRM_PASSWORD'; payload: string }
    | { type: 'SET_EMAIL_ERROR'; payload: string }
    | { type: 'SET_PASSWORD_ERROR'; payload: string }
    | { type: 'SET_CONFIRM_PASSWORD_ERROR'; payload: string }
    | { type: 'TOGGLE_SIGNUP'}
    | { type: 'RESET_DEFAULT'}
    | { type: 'RESET_ERRORS' }

export const initialAuthState: AuthState = {
    email: '',
    password: '',
    confirmPassword: '',
    isSignUp: true,
    isLoading: false
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'SET_CONFIRM_PASSWORD': 
            return {...state, confirmPassword: action.payload};
        case 'TOGGLE_SIGNUP': 
            return {...state, isSignUp: !state.isSignUp};
        case 'RESET_DEFAULT':
            return {
                email: '',
                password: '',
                confirmPassword: '',
                isSignUp: false,
                isLoading: false
            }

        case "SET_EMAIL_ERROR":
            return { ...state, emailError: action.payload };
        case "SET_PASSWORD_ERROR":
            return { ...state, passwordError: action.payload };
        case "SET_CONFIRM_PASSWORD_ERROR":
            return { ...state, confirmPasswordError: action.payload };
        case "RESET_ERRORS":
            return { ...state, emailError: "", passwordError: "", confirmPasswordError: "" };

        
        default:
            return state;
    }
}

export async function handleSignInAmplify(
  email: string, 
  password: string, 
  navigate: NavigateFunction, 
  setError: (msg: AuthError) => void
) {
  try {
      const { isSignedIn, nextStep } = await signIn({ 
          username: email, 
          password 
      });
      if (!isSignedIn) {
        if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
        setError({ title: "Sign Up Not Confirmed", description: "You have not confirmed your email with a one-time code yet." });
        navigate('/signin');
        return { isSignedIn: false, nextStep: null };
        }
      }
      
      navigate('/')
      return {isSignedIn, nextStep};
  } catch (error: any) {
      console.log('error signing in', error);
      if (error?.message === "Incorrect username or password.") {
          setError({ title: "Sign In Error", description: "Incorrect username or password." });
      }
      else if (error?.message === "User does not exist.") {
          setError({ title: "Sign In Error", description: "User does not exist. Please sign up." });
      } else {
          setError({ title: "Sign In Error", description: "An unexpected error occurred. Please try again." });
      }
      return { isSignedIn: false, nextStep: null };
  }
}

export async function handleSignUpAmplify(
  email: string, 
  password: string, 
  navigate: NavigateFunction, 
  setError: (msg: AuthError) => void
) {
  try {
      await signUp({
          username: email,
          password
      });
      navigate('/')
  } catch (err: any) {
      console.log("Error sign up:", err);
      if (err?.name?.includes("UsernameExistsException")) {
        setError({
          title: 'User already exists',
          description: 'This email is already registered. Please sign in or use a different email.'
        });
      }
      else {
        setError({
            title: 'Error signing up',
            description: err?.message || 'An unexpected error occurred while signing up. Please try again.'
        });
      }
  }
}


export async function handleLogoutAmplify(navigate: NavigateFunction, setUser: (user: any) => void) {
    try {
        await signOut();
        setUser(defaultUser);
        navigate('/signin');
    } catch (error) {
        console.error('Error signing out:', error);
    }
}

export function handleSignOutGoogle(navigate: NavigateFunction, setUser: (user: any) => void) {
    try {
        googleLogout()
        setUser(defaultUser);
        navigate('/signin');
    } catch (error) {
        console.error('Error signing out:', error);
    }
}