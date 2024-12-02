import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 sm:h-56 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2 h-10">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">{formattedPrice}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-all transform hover:scale-105 active:scale-95"
            aria-label={`Adicionar ${product.name} ao carrinho`}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}