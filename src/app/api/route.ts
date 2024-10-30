import { TipoCarro } from "@/types"; // Ensure this is updated to reflect the new type for cars
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET() {
    const file = await fs.readFile(process.cwd() + '/src/app/data/base-produtos.json', 'utf-8');
    const carros = JSON.parse(file);

    return NextResponse.json(carros);
}

export async function POST(request: Request) {
    const file = await fs.readFile(process.cwd() + '/src/app/data/base-produtos.json', 'utf-8');
    const data = JSON.parse(file);
    const { nome, modelo } = await request.json(); // Assuming you want `nome` and `modelo` for cars
    const carro = { nome, modelo } as TipoCarro; // Ensure TipoCarro has `id`, `nome`, and `modelo`
    carro.id = Number(Date.now()); // Generate a unique ID
    data.push(carro);
    const json = JSON.stringify(data);
    await fs.writeFile(process.cwd() + '/src/app/data/base-produtos.json', json);

    return NextResponse.json(carro);
}
