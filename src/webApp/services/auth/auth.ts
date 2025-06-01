import { signIn, signOut, signUp } from 'aws-amplify/auth';
import { NavigateFunction } from 'react-router-dom';
export interface AuthState {
    email: string;
    password: string;
    confirmPassword: string;
    isSignUp: boolean;
    isLoading: boolean;
}

export type AuthAction =
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'SET_CONFIRM_PASSWORD'; payload: string }
    | { type: 'TOGGLE_SIGNUP'}
    | { type: 'RESET_DEFAULT'}

export const initialAuthState: AuthState = {
    email: '',
    password: '',
    confirmPassword: '',
    isSignUp: false,
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
        
        default:
            return state;
    }
}

export async function handleSignInAmplify(email: string, password: string, navigate: NavigateFunction) {
    
    try {
        await signOut();
        const { isSignedIn, nextStep } = await signIn({ 
        username: email, 
        password 
        });
        console.log({isSignedIn, nextStep});
        navigate('/')
        return {isSignedIn, nextStep};
    } catch (error) {
        alert('Error signing in');  
        console.log('error signing in', error);
    }
}

export async function handleSignUpAmplify(email: string, password: string, navigate: NavigateFunction) {
    try {
        await signOut();
        await signUp({
            username: email,
            password
        })
        navigate('/')
        return null
    }
    catch(err) {
        console.log("Error sign up:", err)
    }
}