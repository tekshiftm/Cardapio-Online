import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "X-Burger Especial",
    description: "Hambúrguer artesanal, queijo, alface, tomate e molho especial",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
    category: "burgers"
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Molho de tomate, mussarela, manjericão fresco",
    price: 45.90,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
    category: "pizzas"
  },
  {
    id: 3,
    name: "Salada Caesar",
    description: "Alface romana, croutons, parmesão e molho caesar",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500",
    category: "salads"
  },
  {
    id: 4,
    name: "Coca-Cola",
    description: "350ml",
    price: 6.90,
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=500",
    category: "drinks"
  }
];