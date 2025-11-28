
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}


document.querySelector('.localizacao input').addEventListener('change', function () {
  alert('CEP inserido: ' + this.value);
});

const deuteranopiaToggle = document.getElementById('deuteranopiaToggle');
if (deuteranopiaToggle) {
  deuteranopiaToggle.addEventListener('change', () => {
    document.body.classList.toggle('deuteranopia', deuteranopiaToggle.checked);
  });
}
