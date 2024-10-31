"use client"

// pages/servicos.tsx
import Image from "next/image";
import { useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import Footer from '../components/Footer';
import logo from '/public/images/logo.jpg'; 

// Definindo os tipos
interface Servico {
    id: number;
    title: string;
    basePrice: number;
}

interface Cliente {
    nome: string;
    documento: string;
}

interface Contrato {
    id: number;
    servico: string;
    cliente: Cliente;
    dataContratacao: Date;
}

// Lista de serviços disponíveis
const servicos: Servico[] = [
    { id: 1, title: 'Seguro Completo', basePrice: 1200 },
    { id: 2, title: 'Seguro Contra Terceiros', basePrice: 800 },
    { id: 3, title: 'Seguro Roubo e Furto', basePrice: 1000 },
    { id: 4, title: 'Assistência 24h', basePrice: 600 },
    { id: 5, title: 'Seguro de Vida', basePrice: 300 },
    { id: 6, title: 'Seguro de Acidentes Pessoais', basePrice: 200 },
    { id: 7, title: 'Seguro para Carros Elétricos', basePrice: 1500 },
    { id: 8, title: 'Seguro de Viagem', basePrice: 400 }
];

const Servicos = () => {
    const [cotacao, setCotacao] = useState<number | null>(null);
    const [contrato, setContrato] = useState<Contrato | null>(null);
    const [cliente, setCliente] = useState<Cliente>({ nome: '', documento: '' });
    const [idade, setIdade] = useState<number>(30);
    const [tipoVeiculo, setTipoVeiculo] = useState<string>('normal');

    const calcularCotacao = (servicoId: number): number => {
        const servico = servicos.find(s => s.id === servicoId);
        if (!servico) throw new Error("Serviço não encontrado");

        let precoFinal = servico.basePrice;

        if (idade < 25) {
            precoFinal *= 1.2;
        }
        if (tipoVeiculo === 'esportivo') {
            precoFinal *= 1.3;
        }

        return precoFinal;
    };

    const contratarSeguro = (servicoId: number) => {
        const servico = servicos.find(s => s.id === servicoId);
        if (!servico) throw new Error("Serviço não encontrado");

        const novoContrato: Contrato = {
            id: Date.now(),
            servico: servico.title,
            cliente: cliente,
            dataContratacao: new Date()
        };

        setContrato(novoContrato);
        console.log("Seguro contratado:", novoContrato);
    };

    return (
        <>

        <Cabecalho/>
            <div className="bg-gradient-to-r from-[#0d1b2a] to-[#1b2a6b] min-h-screen">
                <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg mx-auto mt-10">
                    <header className="flex justify-between items-center mb-8">
                    <Image 
                src={logo}  
                alt="Logo da Lri Companny" 
                 className="w-[70px] h-[70px] rounded-full shadow-lg transition-transform transition-shadow duration-400 ease-in-out transform hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_16px_32px_rgba(243,213,132,0.5)]"
            
            />
                        <nav className="text-lg text-[#1b2a6b]">
                            <a href="#" className="hover:text-[#d75b5b] transition duration-300">Menu</a>
                        </nav>
                    </header>

                    {/* Formulário para capturar dados do cliente */}
                    <div className="mb-8">
                        <h2 className="text-3xl mb-4 text-center text-[#1b2a6b]">Cadastro de Cliente</h2>
                        <input
                            type="text"
                            placeholder="Nome"
                            value={cliente.nome}
                            onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1b2a6b]"
                        />
                        <input
                            type="text"
                            placeholder="Documento"
                            value={cliente.documento}
                            onChange={(e) => setCliente({ ...cliente, documento: e.target.value })}
                            className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1b2a6b]"
                        />
                        <input
                            type="number"
                            placeholder="Idade"
                            value={idade}
                            onChange={(e) => setIdade(Number(e.target.value))}
                            className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1b2a6b]"
                        />
                        <select
                            value={tipoVeiculo}
                            onChange={(e) => setTipoVeiculo(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-[#1b2a6b]"
                        >
                            <option value="normal">Normal</option>
                            <option value="esportivo">Esportivo</option>
                        </select>
                    </div>

                    {/* Seção de Nossos Seguros */}
                    <section className="text-center">
                        <h2 className="text-4xl text-[#1b2a6b] italic mb-8">Nossos Seguros</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {servicos.map((service) => (
                                <div key={service.id} className="bg-[#f4f4f4] p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl">
                                    <h3 className="text-2xl mb-4 text-[#1b2a6b]">{service.title}</h3>
                                    <p className="text-gray-700">R$ {service.basePrice}</p>
                                    <button
                                        className="bg-[#d75b5b] text-white px-4 py-2 mt-2 rounded-lg shadow-md hover:bg-[#c74b4b] transition duration-300"
                                        onClick={() => {
                                            const preco = calcularCotacao(service.id);
                                            setCotacao(preco);
                                            contratarSeguro(service.id);
                                        }}
                                    >
                                        Contratar
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Exibindo Cotação e Contrato */}
                    {cotacao && (
                        <div className="text-center my-8">
                            <h3 className="text-2xl text-[#1b2a6b]">Cotação: R$ {cotacao}</h3>
                        </div>
                    )}
                    {contrato && (
                        <div className="text-center my-8">
                            <h3 className="text-2xl text-[#1b2a6b]">Contrato Criado!</h3>
                            <p>Serviço: {contrato.servico}</p>
                            <p>Cliente: {contrato.cliente.nome}</p>
                            <p>Data: {contrato.dataContratacao.toLocaleDateString()}</p>
                        </div>
                    )}

                    {/* Seção de Depoimentos */}
                    <section className="text-center py-12">
                        <h2 className="text-4xl text-[#1b2a6b] italic mb-8">Depoimentos de Clientes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {['Mariana S.', 'Carlos F.', 'Ana P.'].map((name, index) => (
                                <div key={index} className="bg-[#f4f4f4] p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl">
                                    <p className="text-lg italic">“O atendimento da LRI é excepcional. Estou muito satisfeito com a segurança que oferecem.”</p>
                                    <p className="mt-4 text-[#d75b5b] font-semibold">{name}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Seção de Perguntas Frequentes */}
                    <section className="text-center py-12">
                        <h2 className="text-4xl text-[#1b2a6b] italic mb-8">Perguntas Frequentes</h2>
                        <div className="space-y-6">
                            <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold text-[#1b2a6b] mb-2">Como faço para contratar um seguro?</h3>
                                <p className="text-gray-700">Você pode contratar nossos seguros entrando em contato diretamente pelo site ou por telefone.</p>
                            </div>
                            <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-md transition-transform duration-300 hover:shadow-xl">
                                <h3 className="text-xl font-semibold text-[#1b2a6b] mb-2">Quais são as formas de pagamento aceitas?</h3>
                                <p className="text-gray-700">Aceitamos cartões de crédito, débito, e transferência bancária.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Servicos;
