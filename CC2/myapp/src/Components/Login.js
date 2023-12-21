import React from 'react';
import '../Assets/Css/login.css';
import Sign_up from './Sign_up';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="logincontainer">
        <div className="login-item">
          <div className="logo">Sign in</div>

          <form action="" method="post" className="form form-login" onSubmit={handleSubmit}>
            <div className="form-field">
              <label className="user" htmlFor="login-username">
                <span className="hidden">Username</span>
              </label>
              <input id="login-username" type="text" className="form-input" placeholder="Username" required />
            </div>

            <div className="form-field">
              <label className="lock" htmlFor="login-password">
                <span className="hidden">Password</span>
              </label>
              <input id="login-password" type="password" className="form-input" placeholder="Password" required />
            </div>

            <div className="form-field">
              <a href="#">Forgot password?</a>
            </div>

            <div className="form-field">
              <input type="submit" value="Log in" />
            </div>
          </form>

          <div className="links">
            <p>
              Create new account? <Link to="/Sign_up">REGISTER</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
