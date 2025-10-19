document.getElementById("buyBtn").addEventListener("click", () => {
  const message = document.getElementById("message");
  message.textContent = "Produto adicionado ao carrinho com sucesso!";
  message.style.opacity = 1;

  setTimeout(() => {
    message.style.opacity = 0;
  }, 2500);
});


// === 🔙 Função da seta para voltar ===
function voltarPagina() {
  window.location.href = "index.html"; // Volta para a home
}

const cartPanel = document.querySelector('.side-cart');
const toggleCartBtn = document.getElementById('toggleCartBtn');

toggleCartBtn.addEventListener('click', () => {
  cartPanel.classList.toggle('hidden');
});


const deuteranopiaToggle = document.getElementById('deuteranopiaToggle');
if (deuteranopiaToggle) {
  deuteranopiaToggle.addEventListener('change', () => {
    document.body.classList.toggle('deuteranopia', deuteranopiaToggle.checked);
  });
}