import Image from "next/image";
import inicial from "/public/images/imageminicial.png";
import bot from "/public/images/icone bot.png";



function Inicial() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#061f2c] to-[#0c3a4a]">
                {/* Seção inicial com áreas de navegação */}
                <div className="w-full max-w-6xl p-8 bg-gradient-to-r from-[#B89746] to-[#D2B469] rounded-2xl shadow-lg mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-xl text-black cursor-pointer transition-all duration-300 hover:text-white hover:scale-110"></div>
                        <div className="text-xl text-black cursor-pointer transition-all duration-300 hover:text-white hover:scale-110"></div>
                    </div>

                    {/* Área do Cliente */}
                    <div className="flex items-center bg-black rounded-2xl p-6 shadow-md hover:bg-[#1a1a1a] transition-all duration-300">
                        <div className="w-64 h-52 bg-center bg-cover rounded-l-2xl">
                            <Image src={inicial} alt="imagem inicial " />
                        </div>
                        <div className="p-6 text-white">
                            <h2 className="text-4xl mb-4">Área do Cliente</h2>
                            <p className="text-gray-400 mb-6">Queremos que você encontre todas as respostas que procura por aqui. Tudo de forma simples, prática e ágil. Do nosso jeito LRI.</p>
                            <a href="/login">
                                <button className="bg-[#C0A554] text-black px-6 py-3 rounded-full shadow-md hover:bg-[#9e8b4d] transition-all duration-300">Login</button>
                            </a>
                        </div>
                    </div>

                    {/* Seção de Cadastro */}
                    <div className="flex justify-between items-center mt-8">
                        <div className="flex items-center">
                            <div className="w-52 h-48 rounded-2xl bg-center bg-cover">
                                <Image src={bot} alt="icone bot " />
                            </div>
                            <div className="bg-black bg-opacity-70 rounded-2xl p-6 text-center text-white backdrop-blur-md shadow-lg transition-transform duration-300 hover:translate-y-[-5px]">
                                <h3 className="text-lg mb-4 opacity-85">Ainda não possui conta?</h3>
                                <p className="text-gray-400 mb-4">Clique no ícone abaixo para realizar seu cadastro!</p>
                                <a href="/cadastro"><button className="bg-[#C0A554] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#9e8b4d] transition-all duration-300">Cadastrar</button></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-4/5 h-0.5 bg-gradient-to-r from-[#C0A554] to-black my-8 mx-auto"></div>

                {/* Seção de Galeria */}
                {/* Carrossel */}

                {/* Seção de Nossos Seguros */}
                <section className="text-center">
                    <h2 className="text-4xl text-[#C0A554] italic mb-8 uppercase tracking-wider">Nossos Seguros</h2>
                    <div className="bg-gradient-to-r from-[#061f2c] to-[#0c3a4a] p-8 rounded-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {['Seguro Completo', 'Seguro Contra Terceiros', 'Seguro Roubo e Furto', 'Assistência 24h'].map((title, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                                    <h3 className="text-2xl mb-4">{title}</h3>
                                    <p className="text-gray-700">
                                        {index === 0 ? 'Proteção total para o seu carro contra acidentes, roubos, furtos e danos a terceiros.' :
                                            index === 1 ? 'Proteção específica para danos causados a outros veículos ou propriedades em acidentes.' :
                                                index === 2 ? 'Garanta a segurança do seu patrimônio com cobertura em caso de roubo ou furto.' :
                                                    'Assistência completa em casos de emergências, pane elétrica ou mecânica, disponível 24 horas por dia.'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção de Depoimentos */}
                <section className="text-center py-12">
                    <h2 className="text-4xl text-[#C0A554] italic mb-8 uppercase tracking-wider">Depoimentos de Clientes</h2>
                    <div className="bg-gradient-to-r from-[#061f2c] to-[#0c3a4a] p-8 rounded-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {['Mariana S.', 'Carlos F.', 'Ana P.'].map((name, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                                    <p className="text-lg italic">“O atendimento da LRI é excepcional. Estou muito satisfeito com a segurança que oferecem.”</p>
                                    <p className="mt-4 text-yellow-500 font-semibold">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Seção de Perguntas Frequentes */}
                <section className="text-center py-12">
                    <h2 className="text-4xl text-[#C0A554] italic mb-8 uppercase tracking-wider">Perguntas Frequentes</h2>
                    <div className="bg-gradient-to-r from-[#061f2c] to-[#0c3a4a] p-8 rounded-2xl">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                                <h3 className="text-xl font-semibold text-[#C0A554] mb-2">Como faço para contratar um seguro?</h3>
                                <p className="text-gray-700">Você pode contratar nossos seguros entrando em contato diretamente pelo site ou por telefone.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                                <h3 className="text-xl font-semibold text-[#C0A554] mb-2">Quais são as formas de pagamento aceitas?</h3>
                                <p className="text-gray-700">Aceitamos cartões de crédito, débito, e transferência bancária.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Adicionando o Chatbot na parte inferior */}
               
            </div>
        </>
    );
}

export default Inicial;
