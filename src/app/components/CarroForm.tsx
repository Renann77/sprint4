// components/CarroForm.tsx
import { useState, useEffect, FC } from "react";
import axios from "axios";
import { Carro } from "@/types";

interface CarroFormProps {
  carregarCarros: () => void;
  carroSelecionado: Carro | null;
  setCarroSelecionado: (carro: Carro | null) => void;
  onComplete: () => void;
 
}

const CarroForm: FC<CarroFormProps> = ({ carregarCarros, carroSelecionado, setCarroSelecionado }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState<number | "">("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (carroSelecionado) {
        await axios.put("/pages/api", { id: carroSelecionado.id, marca, modelo, ano });
        setCarroSelecionado(null);
      } else {
        await axios.post("/pages/api/", { marca, modelo, ano });
      }
      carregarCarros();
    } catch (error) {
      console.error("Erro ao salvar carro:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
      <input type="text" placeholder="Modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
      <input type="number" placeholder="Ano" value={ano || ""} onChange={(e) => setAno(Number(e.target.value))} />
      <button type="submit">{carroSelecionado ? "Atualizar Carro" : "Adicionar Carro"}</button>
      {carroSelecionado && <button onClick={() => setCarroSelecionado(null)}>Cancelar</button>}
    </form>
  );
};

export default CarroForm;
