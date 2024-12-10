function buyProduct(name, price) {
    const confirmBuy = confirm(`Você selecionou "${name}" por R$ ${price}. Deseja continuar para o pagamento?`);
    if (confirmBuy) {
        const cardNumber = prompt("Insira o número do seu cartão:");
        if (cardNumber) {
            alert(`Pagamento confirmado para o produto "${name}"!`);
        } else {
            alert("Compra cancelada.");
        }
    }
}