"use client"
import React, { useState } from 'react';
import Cabecalho from '../components/Cabecalho';



const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    
    if (username === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }

    if (username === 'admin' && password === 'admin') {
      console.log('Login successful:', { username, password });

      
    

    
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
        <Cabecalho/>
    <div className="login-card">
      <div className="card-header">
        <div className="log">Login</div>
      </div>
      <div className="card-body">
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              required
              name="username"
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <div className="form-group">
            <a href="/app"><input type="submit" value="Login" className="btn btn-primary" /></a>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;