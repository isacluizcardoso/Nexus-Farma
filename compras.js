
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const card = event.target.closest('.purchase-card');
        const orderId = card.querySelector('h2').textContent;
        
        alert(`Detalhes do ${orderId} seriam carregados aqui!`);
        // Aqui você faria uma requisição AJAX ou redirecionaria para a página de detalhes do pedido.
    });
});

function voltarPagina() {
  window.location.href = "index.html"; // Volta para a home
}