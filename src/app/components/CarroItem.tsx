import React from 'react';
import { Carro } from "@/types"; // Importando o tipo Carro
import { Edit, Trash } from "lucide-react";

interface CarroItemProps {
  carro: Carro;
  setCarroSelecionado: (carro: Carro) => void;
  onDelete: (id: number) => void;
}

const CarroItem: React.FC<CarroItemProps> = ({ carro, setCarroSelecionado, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col">
      <h2 className="text-lg font-bold">{carro.modelo}</h2>
      <p className="text-sm text-gray-600">Marca: {carro.marca}</p>
      <p className="text-sm text-gray-600">Ano: {carro.ano}</p>
      <div className="mt-auto flex justify-between">
        <button
          onClick={() => setCarroSelecionado(carro)}
          className="text-blue-600 hover:underline"
        >
          <Edit className="inline-block h-4 w-4 mr-1" /> Editar
        </button>
        <button
          onClick={() => onDelete(carro.id)}
          className="text-red-600 hover:underline"
        >
          <Trash className="inline-block h-4 w-4 mr-1" /> Deletar
        </button>
      </div>
    </div>
  );
};

export default CarroItem;
