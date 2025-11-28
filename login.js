
if (localStorage.getItem('dark-mode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

function voltarPagina() {
  window.location.href = "index.html"; 
}

const form = document.querySelector('#register-form');
        const emailInput = document.getElementById('email-input');
        const passwordInput = document.getElementById('password-input');
        const confirmPasswordInput = document.getElementById('confirm-password-input');

          function voltarPagina() {
              window.history.back();
          }

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

           
            if (!email) {
                alert('Por favor, insira seu e-mail ou telefone.');
                return;
            }
            if (password.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }
            
         
            if (password !== confirmPassword) {
                alert('As senhas digitadas não são iguais. Por favor, confirme a senha.');
                return;
            }

            localStorage.setItem('userEmail', email);
            
            localStorage.setItem('userPassword', password); 
            localStorage.setItem('logado', 'true');
            localStorage.setItem('fotoPerfil', 'https://i.pravatar.cc/50');

            
            window.location.href = 'continuar.html';
        });