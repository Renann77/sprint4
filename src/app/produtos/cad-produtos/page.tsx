"use client";
import Cabecalho from "@/app/components/Cabecalho";
import Footer from "@/app/components/Footer";
import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadastroProdutos() {
    const router = useRouter();

    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: "",
        modelo: "",
        estoque: 0,
    });
    const [isSubmitting, setIsSubmitting] = useState(false); // Estado para o feedback de carregamento

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validação simples para garantir que o nome e o modelo estão preenchidos
        if (!produto.nome || !produto.modelo) {
            alert("Por favor, preencha os campos obrigatórios.");
            return;
        }

        const cabecalho = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(produto),
        };

        setIsSubmitting(true);
        try {
            const response = await fetch("http://localhost:3000/app/api/base-produtos", cabecalho);
            const data = await response.json();
            


            if (response.ok) {
                alert(`${produto.nome} cadastrado com sucesso!`);
                setProduto({ id: 0, nome: "", modelo: "", estoque: 0 });
                router.push('/produtos');
            } else {
                alert("Erro ao cadastrar o produto. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao cadastrar o produto", error);
            alert("Ocorreu um erro ao cadastrar o produto. Verifique a conexão e tente novamente.");
        } finally {
            setIsSubmitting(false); // Reseta o estado de carregamento
        }
    };

    return (
        <main className="grow">
            <Cabecalho />

            <h1 className="text-3xl text-center font-bold mb-2 bg-[#C0A554]">Cadastro de Carros</h1>
            <p className="text-xl text-center font-semibold mb-4">
                Insira um novo produto assim que ele chegar na loja.
            </p>
            
            <form className="w-full max-w-md mx-auto p-4 border border-indigo-950 rounded-md" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700" htmlFor="idnome">Carro</label>
                    <input 
                        className="border border-gray-300 p-2 rounded-md" 
                        type="text" 
                        name="nome" 
                        value={produto.nome} 
                        id="idnome" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700" htmlFor="idmodelo">Modelo</label>
                    <input 
                        className="border border-gray-300 p-2 rounded-md"   
                        type="text" 
                        name="modelo" 
                        value={produto.modelo} 
                        id="idmodelo" 
                        onChange={handleChange} 
                        required
                    />
                </div>
                
                <div className="flex flex-col mb-4">
                    <label className="text-gray-700" htmlFor="idestoque">Estoque</label>
                    <input 
                        className="border border-gray-300 p-2 rounded-md"  
                        type="number" 
                        name="estoque" 
                        id="idestoque" 
                        value={produto.estoque} 
                        onChange={handleChange} 
                        min="0"
                    />
                </div>
                
                <button 
                    className="bg-green-700 text-white text-xl p-2 block w-full rounded-md" 
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Cadastrando..." : "Cadastrar Produto"}
                </button>
            </form>

            <Footer />
        </main>
    );
}
