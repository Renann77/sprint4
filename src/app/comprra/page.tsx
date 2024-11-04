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
  { id: 2, name: "Óleo do Motor", image: "/images/filtro de oleo.jpeg", price: 79.90 },
  { id: 3, name: "Porta de Carro", image: "/images/portadecarro.jpg", price: 760.00 },
  { id: 4, name: "Pneu", image: "/images/pneu.jpg", price: 429.90 },
  { id: 5, name: "Retrovisor", image: "/images/retrovisor.jpg", price: 220.00 },
  { id: 6, name: "Para-Brisa", image: "/images/parabrisa.jpg", price: 109.90 },
  { id: 7, name: "Bancos", image: "/images/banco.jpg", price: 3599.90 },
  { id: 8, name: "Kit Chave de Rodas", image: "/images/kit.jpg", price: 169.99 }
];

// Exemplo de feedback de clientes
const feedbacks = [
  { productId: 1, userName: "João", rating: 4, comment: "Ótima qualidade!" },
  { productId: 2, userName: "Maria", rating: 5, comment: "Recomendo a todos!" },
];

// Histórico de compras
const purchaseHistory = [
  { date: "2024-10-01", items: [{ name: "Pneu", price: 429.90 }, { name: "Óleo do Motor", price: 79.90 }] },
  { date: "2024-09-15", items: [{ name: "Pastilhas de Freio", price: 149.99 }] },
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

  const getFeaturedProducts = (): TipoProduto[] => {
    return products.filter((product) => product.price > 300);
  };

  const getDiscountedProducts = (discountRate: number): TipoProduto[] => {
    return products.map((product) => ({
      ...product,
      price: parseFloat((product.price * (1 - discountRate)).toFixed(2)),
    }));
  };

 

  const getPurchaseHistory = () => {
    return purchaseHistory;
  };

  
  const getTopSellingProducts = (): TipoProduto[] => {
    return products.filter((product) => product.price > 500);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-[#061f2c] to-[#0d3441] text-gray-100">
      <Cabecalho />

     

      {/* Carrinho de Compras Modal */}
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

      {/* Espaçamento para o header fixo */}
      <div className="pt-20">

        {/* Seção de Produtos em Destaque */}
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold text-[#C0A554]">Produtos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFeaturedProducts().map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-[#061f2c]">{product.name}</h3>
                <p className="text-[#C0A554] font-bold">R$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product.name, product.price)}
                  className="mt-4 w-full bg-[#C0A554] hover:bg-[#FFD700] text-white font-bold py-2 rounded"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Produtos com Desconto */}
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold text-[#C0A554]">Produtos com Desconto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getDiscountedProducts(0.2).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-[#061f2c]">{product.name}</h3>
                <p className="line-through text-gray-400">R$ {product.price.toFixed(2)}</p>
                <p className="text-[#C0A554] font-bold">R$ {(product.price * 0.8).toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product.name, product.price * 0.8)}
                  className="mt-4 w-full bg-[#C0A554] hover:bg-[#FFD700] text-white font-bold py-2 rounded"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Mais Vendidos */}
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold text-[#C0A554]">Mais Vendidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getTopSellingProducts().map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-[#061f2c]">{product.name}</h3>
                <p className="text-[#C0A554] font-bold">R$ {product.price.toFixed(2)}</p>
                <button
                  onClick={() => addToCart(product.name, product.price)}
                  className="mt-4 w-full bg-[#C0A554] hover:bg-[#FFD700] text-white font-bold py-2 rounded"
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Seção de Avaliações */}
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold text-[#C0A554]">Avaliações dos Clientes</h2>
          {feedbacks.map((feedback, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="text-[#061f2c] font-semibold">{feedback.userName}</h4>
              <p className="text-sm text-gray-600">{feedback.comment}</p>
              <p className="text-[#C0A554]">Nota: {feedback.rating}/5</p>
            </div>
          ))}
        </section>

        {/* Seção de Histórico de Compras */}
        <section className="px-6 py-8">
          <h2 className="text-xl font-bold text-[#C0A554]">Histórico de Compras</h2>
          {getPurchaseHistory().map((purchase, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
              <h4 className="text-[#061f2c] font-semibold">Data: {purchase.date}</h4>
              <ul>
                {purchase.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    {item.name} - R$ {item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <Footer />
      </div>
    </div>
  );
}
