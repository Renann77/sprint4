import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-10">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between px-5">
                <div className="footer-section mb-6 lg:mb-0 lg:w-1/3">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Sobre Nós</h4>
                    <p className="text-gray-300">
                        Nós somos um grupo de estudantes da Faculdade De Informática e Administração Paulista (FIAP) trabalhando em um projeto de relatório automático de danos em veículos em parceria com a Porto Seguro.
                    </p>
                    <div className="mt-3">
                        <p className="text-yellow-300">Luis Lima RM:556904</p>
                        <p className="text-yellow-300">Renan Dorneles RM:557820</p>
                        <p className="text-yellow-300">Igor Dias Barrocal RM:555217</p>
                    </div>
                </div>

                <div className="footer-section mb-6 lg:mb-0 lg:w-1/3">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Contato</h4>
                    <p className="text-gray-300">Email: <span className="text-yellow-300">support@lricompanny.com</span></p>
                    <p className="text-gray-300">Telefone: <span className="text-yellow-300">55-11-(9)98350403</span></p>
                    <p className="text-gray-300">Endereço: <span className="text-yellow-300">Avenida Paulista 1106, Bela Vista</span></p>
                </div>

                <div className="footer-section lg:w-1/3">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">Siga-nos</h4>
                    <div className="flex space-x-4 justify-center lg:justify-start">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
             
                            <i className="fab fa-facebook text-2xl"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mt-8 text-center">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Lri Company. Todos Direitos Reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
