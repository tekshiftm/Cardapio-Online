import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'X-Burger Especial',
    description: 'Hambúrguer artesanal, queijo, alface, tomate e molho especial',
    price: 25.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    category: 'Hamburguers'
  },
  {
    id: 2,
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela, manjericão fresco',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500',
    category: 'Pizzas'
  },
  {
    id: 3,
    name: 'Batata Frita',
    description: 'Porção de batatas fritas crocantes',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500',
    category: 'Acompanhamentos'
  },
];