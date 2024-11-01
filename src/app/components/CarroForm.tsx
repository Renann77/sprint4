import React, { useState, useEffect } from "react";
import { Carro } from "@/types"; // ajuste o caminho conforme sua estrutura de pastas

interface CarroFormProps {
  onComplete: (novoCarro: Carro) => void;
  carroSelecionado: Carro | null;
  setCarroSelecionado: (carro: Carro | null) => void;
}

const CarroForm: React.FC<CarroFormProps> = ({ onComplete, carroSelecionado, setCarroSelecionado }) => {
  const [modelo, setModelo] = useState<string>(carroSelecionado ? carroSelecionado.modelo : "");
  const [marca, setMarca] = useState<string>(carroSelecionado ? carroSelecionado.marca : "");
  const [ano, setAno] = useState<number | undefined>(carroSelecionado ? carroSelecionado.ano : undefined);
  const [cor, setCor] = useState<string | undefined>(carroSelecionado ? carroSelecionado.cor : undefined);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const novoCarro: Carro = {
      id: Math.random(), // Geração de ID. Em um projeto real, você pode ter uma lógica mais robusta.
      modelo,
      marca,
      ano,
      cor,
    };

    onComplete(novoCarro);
    setModelo("");
    setMarca("");
    setAno(undefined);
    setCor(undefined);
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Modelo"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Marca"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
        <input
          type="number"
          placeholder="Ano"
          value={ano || ""}
          onChange={(e) => setAno(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          placeholder="Cor"
          value={cor || ""}
          onChange={(e) => setCor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 transform hover:scale-95">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default CarroForm;
