import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();
  const submitHanlde = (e) => {
    e.preventDefault();
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate('/');
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input
          type='text'
          placeholder=' username'
          value={inputs.username}
          onChange={submitHanlde}
          name='username'
        />
        <input
          type='password'
          placeholder='password'
          value={inputs.password}
          onChange={submitHanlde}
          name='password'
        />
        <button onClick={submitForm}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Dont you have an account? <Link to='/register'>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
