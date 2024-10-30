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
