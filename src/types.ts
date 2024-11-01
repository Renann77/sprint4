
export interface TipoCarro {
    id: number;
    nome: string;
    modelo: string;
    relatorio?: string[];
}


export interface Carro {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
  }

 export interface CarroFormProps {
    carregarCarros: () => void;
    carroSelecionado: Carro | null;
    setCarroSelecionado: (carro: Carro | null) => void;
    onComplete: () => void; // Adicionando a nova prop como opcional
  }