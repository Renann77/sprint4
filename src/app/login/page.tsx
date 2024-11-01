"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cabecalho from '../components/Cabecalho';

const Login: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    // Simples validação - substitua com sua lógica de autenticação real
    if (username === 'admin' && password === 'admin') {
      // Redireciona para a página principal
      router.push('/');  

      // Limpa os campos do formulário
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div>
      <Cabecalho/>
      <div className="flex justify-center items-center h-screen bg-[#061f2c]">
        <div className="bg-white text-[#061f2c] w-80 p-5 rounded-lg shadow-md">
          <div className="bg-[#061f2c] text-white p-3 rounded-t-lg text-center text-xl font-bold">
            Login
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
              <button
                type="submit"
                className="bg-[#C0A554] text-[#061f2c] font-bold rounded-md py-2 w-full cursor-pointer hover:bg-[#a68945]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;