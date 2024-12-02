import React from 'react';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onFinishOrder: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ 
  items, 
  onUpdateQuantity, 
  onRemoveItem, 
  onFinishOrder,
  isOpen,
  onClose
}: CartProps) {
  const total = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  
  const formattedTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:flex md:justify-end">
      <div className="bg-white w-full md:w-[400px] h-full flex flex-col">
        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <ShoppingCart className="text-green-500" />
            <h2 className="text-xl font-semibold">Seu Pedido</h2>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <ShoppingCart size={48} className="text-gray-300 mb-4" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
              <button
                onClick={onClose}
                className="mt-4 text-green-500 font-medium hover:text-green-600"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{item.product.name}</h3>
                    <p className="text-green-600 font-medium">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      }).format(item.product.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        disabled={item.quantity <= 1}
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Remover item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t p-4 bg-white sticky bottom-0">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total:</span>
            <span className="text-xl font-bold text-green-600">{formattedTotal}</span>
          </div>
          <button
            onClick={onFinishOrder}
            disabled={items.length === 0}
            className="w-full bg-green-500 text-white py-4 rounded-lg font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Finalizar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}