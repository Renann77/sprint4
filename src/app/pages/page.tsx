"use client";

import { useState } from "react";
import CarroForm from "../components/CarroForm";
import CarroItem from "../components/CarroItem";
import { Carro } from "@/types"; // Certifique-se de que o caminho esteja correto
import { Search, Plus, Car,AlertCircle } from "lucide-react";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";

export default function Home() {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [carroSelecionado, setCarroSelecionado] = useState<Carro | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFormComplete = (novoCarro: Carro) => {
    // Adiciona o novo carro à lista de carros
    setCarros((prevCarros) => [...prevCarros, novoCarro]);
    setShowForm(false);
    setSuccessMessage("Veículo adicionado com sucesso!");
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (error) setError(null);
  };

  const carrosFiltrados = carros.filter((carro) =>
    carro.modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    carro.marca.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Cabecalho />

      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Gerenciamento de Veículos</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowForm(!showForm)}
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm transition-colors"
              >
                <Plus className="h-5 w-5 mr-2" />
                Novo Veículo
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {successMessage && (
          <div className="mb-4 bg-green-50 border border-green-200 rounded-md p-4">
            <p className="text-sm text-green-600">{successMessage}</p>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Buscar por marca ou modelo..."
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-md p-4 flex items-center">
            <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow mb-8 p-6">
            <CarroForm
              onComplete={handleFormComplete}
              carroSelecionado={carroSelecionado}
              setCarroSelecionado={setCarroSelecionado}
            />
          </div>
        )}

        {/* Content */}
        {carrosFiltrados.length === 0 ? (
          <div className="text-center py-12">
            <Car className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhum veículo encontrado</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm ? "Tente uma busca diferente." : "Comece adicionando um novo veículo."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {carrosFiltrados.map((carro) => (
              <CarroItem
                key={carro.id}
                carro={carro}
                setCarroSelecionado={(carro) => {
                  setCarroSelecionado(carro);
                  setShowForm(true);
                }}
                onDelete={(id) => {
                  setCarros((prevCarros) => prevCarros.filter(c => c.id !== id));
                  setSuccessMessage("Veículo deletado com sucesso!");
                }}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
