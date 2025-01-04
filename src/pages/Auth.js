import React, { useState } from 'react';
import '../styles/Auth.scss';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="auth">
      <div className="form-container">
        {isSignUp ? (
          <>
            <h2>Sign Up for TravelDiary</h2>
            <form>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Sign Up</button>
            </form>
          </>
        ) : (
          <>
            <h2>Login to TravelDiary</h2>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </>
        )}
        <p>
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Login' : 'Sign Up'}</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
