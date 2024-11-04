"use client";

import { useState } from "react";
import Image from "next/image";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";

interface CartItem {
  name: string;
  price: number;
}

interface TipoProduto {
  id: number;
  name: string;
  image: string;
  price: number;
}

const products: TipoProduto[] = [
  { id: 1, name: "Pastilhas de Freio", image: "/images/pastilhasfreio.jpeg", price: 149.99 },
  { id: 2, name: "Óleo do Motor", image: "/images/filtrodeoleo.jpeg", price: 79.90 },
  { id: 3, name: "Porta de Carro", image: "/images/portadecarro.jpg", price: 760.00 },
  { id: 4, name: "Pneu", image: "/images/pneu.jpg", price: 429.90 },
  { id: 5, name: "Retrovisor", image: "/images/retrovisor.jpg", price: 220.00 },
  { id: 6, name: "Para-Brisa", image: "/images/parabrisa.jpg", price: 109.90 },
  { id: 7, name: "Bancos", image: "/images/banco.jpg", price: 3599.90 },
  { id: 8, name: "Kit Chave de Rodas", image: "/images/kit.jpg", price: 169.99 }
];

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [quickViewProduct, setQuickViewProduct] = useState<TipoProduto | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const addToCart = (itemName: string, itemPrice: number) => {
    setCart([...cart, { name: itemName, price: itemPrice }]);
    setIsCartOpen(true);
  };

  const getTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = () => {
    alert(`Compra finalizada! Total: R$ ${getTotal().toFixed(2)}`);
    setCart([]);
    setIsCartOpen(false);
  };

  const filterProducts = (): TipoProduto[] => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const openQuickView = (product: TipoProduto) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setIsQuickViewOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061f2c] to-[#0d3441] text-gray-100">
      <Cabecalho />

      <header className="fixed top-0 left-0 right-0 bg-[#C0A554] shadow-lg z-50">
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">AutoPeças</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar produtos..."
            className="px-4 py-2 rounded-lg border-2 border-[#FFD700] text-[#061f2c] bg-white"
          />
          <button onClick={() => setIsCartOpen(!isCartOpen)} className="relative p-2 text-white hover:text-[#FFD700] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 9h18M3 15h18M3 21h18" />
            </svg>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {isCartOpen && (
        <div className="fixed right-0 top-16 bg-white w-80 p-6 rounded-l-lg shadow-lg z-50">
          <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">O carrinho está vazio.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>R$ {item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between font-bold mt-4">
            <span>Total:</span>
            <span>R$ {getTotal().toFixed(2)}</span>
          </div>
          <div className="flex mt-4 space-x-4">
            <button
              onClick={() => setIsCartOpen(false)}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            >
              Fechar
            </button>
            <button
              onClick={checkout}
              className="flex-1 bg-[#C0A554] hover:bg-[#FFD700] text-white font-bold py-2 px-4 rounded"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      )}

      <div className="pt-20">
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold text-[#C0A554]">Resultados da Busca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterProducts().map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                <Image src={product.image} alt={product.name} width={300} height={200} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-[#061f2c]">{product.name}</h3>
                <p className="text-[#C0A554] font-bold">R$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => openQuickView(product)}
                  className="mt-4 w-full bg-[#C0A554] hover:bg-[#FFD700] text-white py-2 px-4 rounded"
                >
                  Visualização Rápida
                </button>
              </div>
            ))}
          </div>
        </section>

        {isQuickViewOpen && quickViewProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
              <button
                onClick={closeQuickView}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                X
              </button>
              <Image src={quickViewProduct.image} alt={quickViewProduct.name} width={400} height={300} className="w-full h-auto rounded-md mb-4" />
              <h2 className="text-2xl font-bold text-[#061f2c]">{quickViewProduct.name}</h2>
              <p className="text-[#C0A554] font-bold text-lg mb-4">R$ {quickViewProduct.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(quickViewProduct.name, quickViewProduct.price)}
                className="w-full bg-[#C0A554] hover:bg-[#FFD700] text-white py-2 px-4 rounded"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
