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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openQuickView = (product: TipoProduto) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
    setIsQuickViewOpen(false);
  };

  // Função de checkout para simular finalização de compra
  const checkout = () => {
    alert("Compra realizada com sucesso!");
    setCart([]); // Limpa o carrinho após o checkout
    setIsCartOpen(false);
  };

  return (
    <div>
      <Cabecalho />

      {/* Campo de busca */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar produto..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Lista de produtos filtrada */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Image src={product.image} alt={product.name} width={150} height={150} />
            <h2>{product.name}</h2>
            <p>R${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product.name, product.price)}>Adicionar ao Carrinho</button>
            <button onClick={() => openQuickView(product)}>Visualizar</button>
          </div>
        ))}
      </div>

      {/* Modal de Visualização Rápida */}
      {isQuickViewOpen && quickViewProduct && (
        <div className="quick-view-modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeQuickView}>×</span>
            <Image src={quickViewProduct.image} alt={quickViewProduct.name} width={300} height={300} />
            <h2>{quickViewProduct.name}</h2>
            <p>R${quickViewProduct.price.toFixed(2)}</p>
            <button onClick={() => addToCart(quickViewProduct.name, quickViewProduct.price)}>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      )}

      {/* Carrinho de Compras */}
      {isCartOpen && (
        <div className="cart">
          <h2>Carrinho</h2>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - R${item.price.toFixed(2)}</p>
            </div>
          ))}
          <h3>Total: R${getTotal().toFixed(2)}</h3>
          <button onClick={() => setIsCartOpen(false)}>Fechar Carrinho</button>
          <button onClick={checkout}>Finalizar Compra</button>
        </div>
      )}

      <Footer />
    </div>
  );
}
