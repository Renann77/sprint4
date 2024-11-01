
export interface TipoCarro {
    id: number;
    nome: string;
    modelo: string;
    relatorio?: string[];
}




 export interface CarroFormProps {
    carregarCarros: () => void;
    carroSelecionado: Carro | null;
    setCarroSelecionado: (carro: Carro | null) => void;
    onComplete: () => void;
  }

 

// types.ts

export interface Carro {
  id: number; // ou string
  modelo: string;
  marca: string;
  ano?: number; // opcional
  cor?: string; // agora opcional
}
