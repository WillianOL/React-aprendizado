import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  function cliqueAleatorio() {
    console.log('Login realizado');
    navigate("/")
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={cliqueAleatorio}>Login</button>
    </div>
  );
};

export default Login;
