import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios';
const Register = () => {
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('auth/register', inputs);
      navigate('/login');
    } catch (error) {
      setError(error.response.data);
      console.log(error);
    }
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input
          required
          type='text'
          placeholder=' username'
          name='username'
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          required
          type='email'
          placeholder='email'
          onChange={handleChange}
          name='email'
          value={inputs.email}
        />
        <input
          required
          type='password'
          placeholder='password'
          onChange={handleChange}
          name='password'
          value={inputs.password}
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account? <Link to='/login'>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
