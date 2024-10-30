import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";

export default function Menu(){

    return(
        <nav className="flex">
            <ul className="flex gap-7 links">
                <li><FaHome className="gap-2 w-9"/><Link href={'/'}>Home</Link></li>
                <li><GrProductHunt className="gap-2 w-9" /><Link href={'/produtos'}>Produtos</Link></li>
                <li><FaCartShopping className="gap-20 w-9" /><Link href={'/comprra'}>Compra De Peças </Link></li>
                <li><FaCarSide className="gap-2 w-9" />  <Link href={'/produtos/cad-produtos'}>Cadastro de Carros</Link></li>
            </ul>
        </nav>
    )
}
