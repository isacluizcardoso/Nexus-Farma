if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

function voltarPagina() {
  window.location.href = "login.html"; 
}