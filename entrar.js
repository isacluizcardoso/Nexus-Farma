   const form = document.querySelector('#login-form');
        const emailInput = document.getElementById('email-input');
        const passwordInput = document.getElementById('password-input');

        const SIMULATED_SAVED_EMAIL = "teste@exemplo.com";
        const SIMULATED_SAVED_PASSWORD = "senha123";


      

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const enteredEmail = emailInput.value.trim();
            const enteredPassword = passwordInput.value;
            
            
            if (enteredEmail === SIMULATED_SAVED_EMAIL && enteredPassword === SIMULATED_SAVED_PASSWORD) {
                
          
                localStorage.setItem('logado', 'true');
                localStorage.setItem('fotoPerfil', 'https://i.pravatar.cc/50');
                
                
                localStorage.setItem('lastLoggedInEmail', enteredEmail); 
                
                alert('Login efetuado com sucesso!');
                window.location.href = 'index.html';

            } else {
                
                alert('E-mail/Telefone ou Senha incorretos. Tente novamente.');
            }
        });
        
        
        document.addEventListener('DOMContentLoaded', () => {
            const lastEmail = localStorage.getItem('lastLoggedInEmail');
            if (lastEmail) {
                emailInput.value = lastEmail;
            }
        });

        
                  function voltarPagina() {
                  window.location.href = "index.html"; 
                 }


         if (localStorage.getItem('dark-mode') === 'enabled') 
            document.body.classList.add('dark-mode');