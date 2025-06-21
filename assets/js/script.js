document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.form-container form');
    const cpfInput = document.getElementById('cpf');

    // --- CPF Mask ---
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d)/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = value;
        });
    }

    // --- Form Submission ---
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // --- CPF Validation ---
            if (cpfInput && !validaCPF(cpfInput.value)) {
                showCpfError('CPF inválido. Por favor, verifique.');
                return; 
            }

            const form = e.target;
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // --- Provide instant feedback ---
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // --- Simulate API call (replace with actual fetch in production) ---
            try {
                // In a real application, you would gather form data like this:
                // const formData = new FormData(form);
                // const response = await fetch('/your-api-endpoint', {
                //     method: 'POST',
                //     body: formData
                // });
                
                // if (!response.ok) {
                //     throw new Error('Network response was not ok.');
                // }
                
                // const result = await response.json();

                // For now, we just simulate a delay
                await new Promise(resolve => setTimeout(resolve, 1500));

                // --- Show success message ---
                const formContainer = document.querySelector('.form-container');
                formContainer.innerHTML = `
                    <div class="success-message">
                        <h3>Obrigado!</h3>
                        <p>Sua mensagem foi recebida com sucesso. Nossa equipe de especialistas entrará em contato em breve.</p>
                        <a href="index.html" class="cta-button">Voltar ao Início</a>
                    </div>
                `;

            } catch (error) {
                console.error('Submission error:', error);
                // --- Handle error ---
                submitButton.disabled = false;
                submitButton.textContent = 'Tente Novamente';
                // Optionally, display an error message to the user
                const errorElement = document.createElement('p');
                errorElement.textContent = 'Ocorreu um erro. Por favor, tente novamente mais tarde.';
                errorElement.style.color = '#ff6b6b';
                form.appendChild(errorElement);
            }
        });
    }

    // --- CPF Validation Functions ---
    function validaCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,'');
        if(cpf == '') return false;
        // Elimina CPFs invalidos conhecidos
        if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111" || 
            cpf == "22222222222" || 
            cpf == "33333333333" || 
            cpf == "44444444444" || 
            cpf == "55555555555" || 
            cpf == "66666666666" || 
            cpf == "77777777777" || 
            cpf == "88888888888" || 
            cpf == "99999999999")
                return false;
        // Valida 1o digito
        let add = 0;
        for (let i=0; i < 9; i ++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            let rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                return false;
        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i ++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }

    function showCpfError(message) {
        if (!cpfInput) return;
        cpfInput.classList.add('invalid');
        
        let errorElement = cpfInput.parentNode.querySelector('.cpf-error-message');
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.className = 'cpf-error-message';
            cpfInput.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;

        cpfInput.addEventListener('input', clearCpfError, { once: true });
    }

    function clearCpfError() {
        if (!cpfInput) return;
        cpfInput.classList.remove('invalid');
        const errorElement = cpfInput.parentNode.querySelector('.cpf-error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }
}); 