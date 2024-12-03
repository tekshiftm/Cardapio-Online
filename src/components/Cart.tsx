import React, { useState } from 'react';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import { CartItem } from '../types/menu';

interface Props {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onFinalize: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onFinalize }: Props) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calcula o total de itens no carrinho
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Botão flutuante para abrir o carrinho */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none z-50"
        aria-label="Abrir Carrinho"
      >
        <ShoppingCart size={24} />
        {/* Badge com a quantidade de itens no carrinho */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </button>

      {/* Carrinho deslizante */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg border-l p-4 w-80 sm:w-96 transform transition-transform ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="max-h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="text-orange-500" />
              <h2 className="text-lg font-semibold">Seu Pedido</h2>
            </div>
            {/* Botão para fechar o carrinho */}
            <button
              onClick={() => setIsCartOpen(false)}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fechar Carrinho"
            >
              <X size={24} />
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <>
              <div className="space-y-2 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border rounded">
                        <button
                          className="px-2 py-1 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          aria-label={`Diminuir quantidade de ${item.name}`}
                        >
                          -
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button
                          className="px-2 py-1 hover:bg-gray-100"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          aria-label={`Aumentar quantidade de ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                      <span>{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label={`Remover ${item.name}`}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">Total: R$ {total.toFixed(2)}</div>
                <button
                  onClick={onFinalize}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
                  aria-label="Finalizar Pedido"
                >
                  Finalizar Pedido
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
