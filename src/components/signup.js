import React from 'react';
import '../styles/signup.css'; // Make sure to create this CSS file

const SignUp = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-heading">Sign Up</h2>
      <form className="signup-form">
        <input type="email" placeholder="Email" className="signup-input" />
        <button type="submit" className="signup-button">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
