export function formatWhatsAppMessage(items: any[]) {
  const message = items
    .map(
      (item) =>
        `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(
          2
        )}`
    )
    .join('\n');

  const total = items
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return encodeURIComponent(
    `*Novo Pedido*\n\n${message}\n\n*Total: R$ ${total}*`
  );
}