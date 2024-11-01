import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-br from-black via-gray-900 to-[#0c3a4a] text-white py-16">
            <div className="container mx-auto max-w-screen-lg px-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    
                    {/* Coluna Sobre Nós */}
                    <div className="footer-section">
                        <h4 className="text-2xl font-bold text-yellow-500 mb-4">Sobre Nós</h4>
                        <p className="text-gray-300 mb-4">
                            Somos um grupo de estudantes da Faculdade De Informática e Administração Paulista (FIAP) 
                            trabalhando em um projeto para relatório automático de danos em veículos em parceria com a Porto Seguro.
                        </p>
                        <ul className="space-y-2 text-yellow-400">
                            <li>Luis Lima RM: 556904</li>
                            <li>Renan Dorneles RM: 557820</li>
                            <li>Igor Dias Barrocal RM: 555217</li>
                        </ul>
                    </div>

                    {/* Coluna Contato */}
                    <div className="footer-section">
                        <h4 className="text-2xl font-bold text-yellow-500 mb-4">Contato</h4>
                        <p className="text-gray-300">
                            <span className="block mb-1">Email: <span className="text-yellow-400">support@lricompanny.com</span></span>
                            <span className="block mb-1">Telefone: <span className="text-yellow-400">55-11-(9)98350403</span></span>
                            <span className="block">Endereço: <span className="text-yellow-400">Avenida Paulista 1106, Bela Vista</span></span>
                        </p>
                    </div>

                    {/* Coluna Siga-nos */}
                    <div className="footer-section text-center lg:text-left">
                        <h4 className="text-2xl font-bold text-yellow-500 mb-4">Siga-nos</h4>
                        <div className="flex justify-center lg:justify-start space-x-6">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition duration-300">
                                <FaFacebookSquare className="text-3xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition duration-300">
                                <FaXTwitter className="text-3xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-500 transform hover:scale-110 transition duration-300">
                                <FaInstagramSquare className="text-3xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Linha de Rodapé */}
                <div className="mt-12 border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Lri Company. Todos os Direitos Reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
