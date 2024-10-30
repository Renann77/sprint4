"use client"
import { TipoProduto } from "@/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import Modal from "./cad-produtos/Modal"
import Cabecalho from "../components/Cabecalho"
import DamageReportForm from "../components/DamageReportFrom"

export default function Produtos(){

    const navigate = useRouter()

    const [open, setOpen] = useState(false)
    const [idDelete, setIdDelete] = useState(0)

    const idModal = (id:number)=>{
        setOpen(true)
        setIdDelete(id)
    }

    const [lista, setLista] = useState<TipoProduto[]>([])

    useEffect(()=>{
        const chamadaApi = async () => {
            const response = await fetch("http://localhost:3000/api/base-produtos")
            const data = await response.json()
            setLista(data)
            console.log(data);            
        }
        chamadaApi()
    },[])

    const handleDelete = async (id:number)=>{
        try{
            const response = await fetch(`http://localhost:3000/api/base-produtos/${id}`,{method:"DELETE"})
            if(response.ok){
                setOpen(false)
                window.location.reload()
            }else{
                alert("Erro ao deletar o produto")
                setOpen(false)
                navigate.push('/produtos')
            }
        }catch(error){
            console.error("Falha ao apagar registro.",error);            
        }
    }

    return(
        <main className="grow p-5">

            <Cabecalho/>
            
           
            
        </main>
    )
}
