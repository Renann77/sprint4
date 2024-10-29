"use client";

import { useState } from 'react';
import Cabecalho from '../components/Cabecalho';
import Footer from '../components/Footer';


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
  { id: 2, name: "Óleo do Motor", image: "/images/filtro-de-oleo.jpeg", price: 79.90 },
  { id: 3, name: "Porta de Carro", image: "/images/portadecarro.jpg", price: 760.00 },
  { id: 4, name: "Pneu", image: "/images/pneu.jpg", price: 429.90 },
  { id: 5, name: "Retrovisor", image: "/images/retrovisor.jpg", price: 220.00 },
  { id: 6, name: "Para-Brisa", image: "/images/parabrisa.jpg", price: 109.90 },
  { id: 7, name: "Bancos", image: "/images/banco.jpg", price: 3599.90 },
  { id: 8, name: "Kit Chave de Rodas", image: "/images/kit.jpg", price: 169.99 },
  { id: 9, name: "Rádio Automotivo", image: "/images/radio.jpg", price: 499.99 },
  { id: 10, name: "Amortecedor", image: "/images/amortecedor.jpg", price: 219.90 },
  { id: 11, name: "Câmera de Ré", image: "/images/camera.jpg", price: 189.00 },
  { id: 12, name: "Filtro de Ar", image: "/images/filtroar.jpg", price: 59.90 },
  { id: 13, name: "Macaco Hidráulico", image: "/images/macaco.jpg", price: 129.90 },
];

export default function ShopPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061f2c] to-[#0d3441] text-gray-100">

      {/* Header Fixo */}
      <Cabecalho/>
      <header className="fixed top-0 left-0 right-0 bg-[#C0A554] shadow-lg z-50">
        <div className="px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">AutoPeças</h1>
          <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="relative p-2 text-white hover:text-[#FFD700] transition"
          >
          
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Espaçamento para o header fixo */}
      <div className="pt-20">
        {/* Lista de Produtos */}
        <section className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <article key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative pt-[75%] bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#061f2c] line-clamp-2">{product.name}</h3>
                <p className="text-[#C0A554] font-bold mt-1">R$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product.name, product.price)}
                  className="mt-3 w-full bg-[#C0A554] text-white py-2 rounded-md text-sm font-medium hover:bg-[#a88f47] transition-colors"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* Carrinho Móvel (Slide-in) */}
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-[#061f2c]">Seu Carrinho</h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-[#061f2c] hover:text-[#C0A554]"
                >
                  
                </button>
              </div>

              <div className="flex-grow overflow-y-auto">
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center mt-8">Seu carrinho está vazio</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded shadow-sm">
                        <span className="text-[#061f2c]">{item.name}</span>
                        <span className="text-[#C0A554] font-semibold">R$ {item.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-auto border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-[#061f2c]">Total:</span>
                  <span className="text-lg font-bold text-[#C0A554]">R$ {getTotal().toFixed(2)}</span>
                </div>

                <button
                  onClick={checkout}
                  disabled={cart.length === 0}
                  className="w-full bg-[#C0A554] text-white py-3 rounded-lg font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-[#a88f47] transition-colors"
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
}
