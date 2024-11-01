import Menu from './Menu';
import Image from 'next/image';
import logo from '/public/images/logo.jpg'; 

export default function Cabecalho() {
    return (
        
        <header className="flex flex-col items-center bg-gradient-to-r from-[#061f2c] to-[#0c3a4a] p-5">
             
            <Image 
                src={logo}  
                alt="Logo da Lri Companny" 
                className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px] rounded-full shadow-lg transition-transform transition-shadow duration-400 ease-in-out transform hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_16px_32px_rgba(243,213,132,0.5)]"
            />

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold italic text-center text-white mt-4">
                Lri Companny
            </h1>
            <Menu />
        </header>
    );
}
    