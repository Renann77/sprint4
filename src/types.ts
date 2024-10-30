export type TipoProduto = {
    id:number;
    nome:string;
    modelo: string;
    estoque:number;
}

export type ModalProps = {
    open:boolean;
    onClose:()=>void;
    children: React.ReactNode;
}

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
    preco:number;
    ano: number;
  }

 export interface CarroFormProps {
    carregarCarros: () => void;
    carroSelecionado: Carro | null;
    setCarroSelecionado: (carro: Carro | null) => void;
    onComplete: () => void; // Adicionando a nova prop como opcional
  }