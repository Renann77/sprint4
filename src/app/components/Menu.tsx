"use client"

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

export default function Menu() {
    return (
        <nav className="flex justify-center py-4 bg-gray-800 rounded-lg ">
            <ul className="flex flex-wrap gap-8 text-white">
                <li className="flex items-center">
                    
                    <Link href="/"><FaHome className="w-6 h-6 mr-2" />Home </Link>
                </li>
                
                <li className="flex items-center">
                    
                    <Link  href="/comprra"><FaCartShopping className="w-6 h-6 mr-2 " />Compra de Peças</Link>
                </li>
                
                <li className="flex items-center">
                    
                    <Link href="/pages"><FaCarSide className="w-6 h-6 mr-2" />Gerenciamento de Veiculos</Link>
                </li>

                <li className="flex items-center">
                    
                    <Link href="/servicos"><GrBusinessService className="w-6 h-6 mr-2" />Serviços</Link>
                </li>

                <li className="flex items-center">
                   
                    <Link href="/cliente"> <GrBusinessService className="w-6 h-6 mr-2" />Clientes </Link>
                </li>
            </ul>
        </nav>
    );
}
