
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

function voltarPagina() {
  window.location.href = "index.html"; 
}

const deuteranopiaToggle = document.getElementById('deuteranopiaToggle');

// Verifica se já estava ativo antes
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
