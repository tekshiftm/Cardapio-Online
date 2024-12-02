export function formatWhatsAppMessage(items: { name: string; quantity: number; price: number }[]) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const message = items
    .map(item => `${item.quantity}x ${item.name} - ${new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(item.price * item.quantity)}`)
    .join('\n');

  return `*Novo Pedido*\n\n${message}\n\n*Total: ${new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total)}*`;
}

export function sendToWhatsApp(message: string) {
  const phoneNumber = '88921458605'; // Replace with your WhatsApp number
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/55${phoneNumber}?text=${encodedMessage}`, '_blank');
}