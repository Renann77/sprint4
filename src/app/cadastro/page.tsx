"use client"
import React, { useState } from 'react';
import Cabecalho from '../components/Cabecalho';

type Props = {
    username: string;
    email:string;
    password:string;
    confirmPassword:string;
}

const Cadastro: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log({ username, email, password });
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div>
        <Cabecalho/>
    <div className="flex justify-center items-center h-screen bg-[#061f2c]">
      <div className="bg-white text-[#061f2c] w-80 p-5 rounded-lg shadow-md">
        <div className="bg-[#061f2c] text-white p-3 rounded-t-lg text-center text-xl font-bold">
          Register
        </div>
        <div className="p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="font-bold mb-1 block">Username:</label>
              <input
                required
                className="w-full p-2 border border-[#C0A554] rounded-md focus:outline-none focus:border-[#061f2c] focus:shadow-md"
                name="username"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="font-bold mb-1 block">Email:</label>
              <input
                required
                className="w-full p-2 border border-[#C0A554] rounded-md focus:outline-none focus:border-[#061f2c] focus:shadow-md"
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold mb-1 block">Password:</label>
              <input
                required
                className="w-full p-2 border border-[#C0A554] rounded-md focus:outline-none focus:border-[#061f2c] focus:shadow-md"
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="confirm-password" className="font-bold mb-1 block">Confirm Password:</label>
              <input
                required
                className="w-full p-2 border border-[#C0A554] rounded-md focus:outline-none focus:border-[#061f2c] focus:shadow-md"
                name="confirm-password"
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
           <a href="/app"> <input
              type="submit"
              className="bg-[#C0A554] text-[#061f2c] font-bold rounded-md py-2 w-full cursor-pointer hover:bg-[#a68945]"
              value="Submit"

            /></a>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cadastro;
