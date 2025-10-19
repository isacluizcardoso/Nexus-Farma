
const menuItems = document.querySelectorAll('.menu-item');
const tabs = document.querySelectorAll('.tab-content');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(i => i.classList.remove('active'));
    tabs.forEach(tab => tab.classList.remove('active'));

    item.classList.add('active');
    const target = document.getElementById(item.dataset.tab);
    target.classList.add('active');
  });
});

function voltarPagina() {
  window.location.href = "home.html"; 
}


document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Configurações salvas com sucesso!');
  });
});

// === 🌙 Dark Mode ===
const darkToggle = document.getElementById('darkModeToggle');

// Carregar estado do modo escuro salvo
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
  if (darkToggle) darkToggle.checked = true;
}

// Ativar/desativar dark mode
if (darkToggle) {
  darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
}

// === 🔙 Função da seta para voltar ===
function voltarPagina() {
  window.location.href = "index.html"; // Volta para a home
}

const deuteranopiaToggle = document.getElementById('deuteranopiaToggle');

// Carrega o estado salvo ao abrir a aba de config
if (localStorage.getItem('deuteranopia') === 'true') {
  deuteranopiaToggle.checked = true;
  document.body.classList.add('deuteranopia');
}

deuteranopiaToggle.addEventListener('change', () => {
  if (deuteranopiaToggle.checked) {
    document.body.classList.add('deuteranopia');
    localStorage.setItem('deuteranopia', 'true');
  } else {
    document.body.classList.remove('deuteranopia');
    localStorage.setItem('deuteranopia', 'false');
  }
});

