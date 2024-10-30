import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { GrProductHunt } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";

export default function Menu(){

    return(
        <nav className="flex">
            <ul className="flex gap-7 links">
                <li><FaHome className="gap-2 w-9"/><Link href={'/'}>Home</Link></li>
                <li><GrProductHunt className="gap-2 w-9" /><Link href={'/produtos'}>Produtos</Link></li>
                <li><FaCartShopping className="gap-2 w-9" /><Link href={'/comprra'}>Compra De Peças </Link></li>
                <li><FaCirclePlus className="gap-2 w-9"/><Link href={'/produtos/cad-produtos'}>Cadastro de Produtos</Link></li>
            </ul>
        </nav>
    )
}
