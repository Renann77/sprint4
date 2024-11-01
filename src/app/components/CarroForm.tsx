import { useState, useEffect } from "react";
import axios from "axios";
import { Carro } from "@/types";

interface CarroFormProps {
  carregarCarros: () => void;
  carroSelecionado: Carro | null;
  setCarroSelecionado: (carro: Carro | null) => void;
  onComplete: () => void;
}

const CarroForm: React.FC<CarroFormProps> = ({ carregarCarros, carroSelecionado, setCarroSelecionado, onComplete }) => {
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [ano, setAno] = useState<number | string>("");

  useEffect(() => {
    if (carroSelecionado) {
      setMarca(carroSelecionado.marca);
      setModelo(carroSelecionado.modelo);
      setAno(carroSelecionado.ano);
    } else {
      setMarca("");
      setModelo("");
      setAno("");
    }
  }, [carroSelecionado]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const carroData: Carro = { id: carroSelecionado ? carroSelecionado.id : 0, marca, modelo, ano: Number(ano) };
      if (carroSelecionado) {
        await axios.put("/api/carros", carroData);
      } else {
        await axios.post("/api/carros", carroData);
      }
      carregarCarros();
      onComplete();
    } catch (error) {
      console.error("Erro ao salvar carro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={marca} onChange={(e) => setMarca(e.target.value)} placeholder="Marca" required />
      <input value={modelo} onChange={(e) => setModelo(e.target.value)} placeholder="Modelo" required />
      <input value={ano} onChange={(e) => setAno(e.target.value)} placeholder="Ano" required type="number" />
      <button type="submit">{carroSelecionado ? "Atualizar" : "Adicionar"}</button>
    </form>
  );
};

export default CarroForm;
