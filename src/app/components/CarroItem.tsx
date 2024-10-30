import { Carro } from "@/types";
import axios from "axios";
import { Edit, Trash2, Calendar, Tag } from "lucide-react";

interface CarroItemProps {
  carro: Carro;
  carregarCarros: () => void;
  setCarroSelecionado: (carro: Carro) => void;
}

export default function CarroItem({
  carro,
  carregarCarros,
  setCarroSelecionado,
}: CarroItemProps) {
  const handleDelete = async () => {
    if (window.confirm("Tem certeza que deseja excluir este veículo?")) {
      try {
        await axios.delete(`/api/carros/${carro.id}`);
        carregarCarros();
      } catch (error) {
        console.error("Erro ao deletar carro:", error);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{carro.modelo}</h3>
            <p className="text-sm text-gray-500">{carro.marca}</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setCarroSelecionado(carro)}
              className="p-2 text-gray-400 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
            >
              <Edit className="h-5 w-5" />
            </button>
            <button
              onClick={handleDelete}
              className="p-2 text-gray-400 hover:text-red-600 rounded-full hover:bg-red-50 transition-colors"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Ano: {carro.ano}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Tag className="h-4 w-4 mr-2" />
            <span>Preço: R$ {carro.preco.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}