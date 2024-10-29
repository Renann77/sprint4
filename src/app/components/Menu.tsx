import Link from "next/link";

export default function Menu(){

    return(
        <nav className="flex">
            <ul className="flex gap-7 links">
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/produtos'}>Produtos</Link></li>
                <li><Link href={'/comprra'}>Compra De Peças </Link></li>
                <li><Link href={'/produtos/cad-produtos'}>Cadastro de Produtos</Link></li>
            </ul>
        </nav>
    )
}
