"use client";

import { useEffect, useState } from "react";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";

interface Cliente {
  id: number;
  nome: string;
  email: string; // Adicione outros campos conforme necessário
}

export default function Cliente() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/myresource/buscarTodos");
      if (!response.ok) {
        throw new Error("Erro ao buscar clientes");
      }
      const data = await response.json();
      setClientes(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro ao carregar clientes");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cliente = { nome, email };

    if (selectedId) {
      await updateCliente(selectedId, cliente);
    } else {
      await createCliente(cliente);
    }

    setNome("");
    setEmail("");
    setSelectedId(null);
    fetchClientes();
  };

  const createCliente = async (cliente: Omit<Cliente, "id">) => {
    try {
      const response = await fetch("http://localhost:8080/myresource/adicionar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente),
      });
      if (!response.ok) {
        throw new Error("Erro ao adicionar cliente");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro ao criar cliente");
    }
  };

  const updateCliente = async (id: number, cliente: Omit<Cliente, "id">) => {
    try {
      const response = await fetch(`http://localhost:8080/myresource/atualizaDados?id=${id}&nome=${cliente.nome}`, {
        method: "PUT",
      });
      if (!response.ok) {
        throw new Error("Erro ao atualizar cliente");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro ao atualizar cliente");
    }
  };

  const deleteCliente = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/myresource/deleta?id=${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Erro ao deletar cliente");
      }
      fetchClientes();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro ao deletar cliente");
    }
  };

  const handleEdit = (cliente: Cliente) => {
    setNome(cliente.nome);
    setEmail(cliente.email);
    setSelectedId(cliente.id);
  };

  return (
    <>
      <Cabecalho />

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Lista de Clientes</h1>

        {isLoading && <p className="text-center">Carregando...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome"
            required
            className="border p-2 rounded-md mr-2 w-1/3"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="border p-2 rounded-md mr-2 w-1/3"
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 transform hover:bg-blue-500">
            {selectedId ? "Atualizar" : "Adicionar"}
          </button>
        </form>

        <ul className="space-y-2">
          {clientes.map((cliente) => (
            <li key={cliente.id} className="border p-4 rounded-md flex justify-between items-center transition-all duration-300 hover:shadow-lg hover:bg-gray-50">
              <div>
                <h2 className="font-semibold">{cliente.nome}</h2>
                <p>Email: {cliente.email}</p>
              </div>
              <div>
                <button
                  onClick={() => handleEdit(cliente)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2 transition duration-300 hover:bg-yellow-400"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteCliente(cliente.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md transition duration-300 hover:bg-red-400"
                >
                  Deletar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}
