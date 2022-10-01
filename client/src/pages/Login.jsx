import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const error = false;
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder=' username' />
        <input type='password' placeholder='password' />
        <button>Login</button>
        {error && <p>This is an error</p>}
        <span>
          Dont you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
