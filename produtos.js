document.getElementById("buyBtn").addEventListener("click", () => {
  const message = document.getElementById("message");
  message.textContent = "Produto adicionado ao carrinho com sucesso!";
  message.style.opacity = 1;

  setTimeout(() => {
    message.style.opacity = 0;
  }, 2500);
});


function voltarPagina() {
  window.location.href = "proximas.html"; 
}

const cartPanel = document.querySelector('.side-cart');
const toggleCartBtn = document.getElementById('toggleCartBtn');

toggleCartBtn.addEventListener('click', () => {
  cartPanel.classList.toggle('hidden');
});

const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

const symptomTargets = {
  "Dor de cabeça": "dorflex",
  "Febre": "paracetamol",
  "Tosse": "xarope",
  "Cólica": "buscopan",
  "Dores musculares": "dorflex",
  "Congestão nasal": "nasal"
};

searchInput.addEventListener('focus', () => {
  suggestions.classList.remove('hidden');
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    suggestions.classList.add('hidden');
  }
});

function selectSuggestion(text) {
  searchInput.value = text;
  suggestions.classList.add('hidden');

  const targetId = symptomTargets[text];
  if (targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      targetElement.style.outline = "3px solid #0b6fa4";
      targetElement.style.transition = "outline 0.3s";

      setTimeout(() => {
        targetElement.style.outline = "none";
      }, 2000);
    }
  } else {
    alert("Nenhum produto encontrado para esse sintoma.");
  }
}
