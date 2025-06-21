document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.form-container form');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

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
}); 