// Getting from HTML
const cartNotify = document.querySelector('.cartNotify')

// Get
const getCart = () => JSON.parse(localStorage.getItem('cart')) || []

// Set
const setCart = cartData => localStorage.setItem('cart', JSON.stringify(cartData))

// Functions
const addToCart = id => {
    const cart = getCart()

    if (cart.length > 0) {
        let wasModified = false

        cart.forEach(item => {
            if (item.id === id) {
                item.qtd += 1
                wasModified = true
            }
        })

        !wasModified && cart.push({ id: id, qtd: 1 })
    } else {
        cart.push({ id: id, qtd: 1 })
    }

    setCart(cart)
    showNotification()  // Chama a função para exibir a notificação
    showingNotifications()
}

const showingNotifications = () => {
    const cart = getCart()

    if (cart.length > 0)
        cartNotify.style.display = 'block'
}

// Função para exibir a notificação
const showNotification = () => {
    Toastify({
        text: "Produto adicionado no carrinho de compras.",
        duration: 1500,   // Duração da notificação em milissegundos
        close: true,      // Mostrar botão de fechar
        gravity: "bottom", // Posição vertical (topo ou fundo)
        position: "right", // Posição horizontal (esquerda, centro ou direita)
        stopOnFocus: true, // Pausar o temporizador ao passar o mouse
        style: {
            background: "#FF7F0A",
            boxShadow: "0 0 160px 0 #0008"
        }
    }).showToast() // Exibe a notificação
}

// Mostrar notificação caso já existam itens no carrinho
showingNotifications()
