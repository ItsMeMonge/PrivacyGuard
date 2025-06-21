# Privacy Guard - Template de Landing Page de Alta Conversão

Este é um projeto de código aberto que fornece um template completo e moderno para uma landing page (Sellpage) focada em conversão, com o tema de um serviço de privacidade digital ("Privacy Guard"). O design é sombrio, profissional e construído com técnicas de UI/UX e copywriting para maximizar a geração de leads.

![Homepage Screenshot](img/index.png)

## ✨ Recursos

- **Design Moderno e Responsivo:** Construído com Flexbox e Media Queries para uma experiência perfeita em desktops, tablets e celulares.
- **Foco em Conversão:** Cada seção foi projetada com um objetivo de vendas, desde a captura de atenção na home até a quebra de objeções na página de preços.
- **Funil de Vendas Estratégico:**
    1.  `index.html`: Página de impacto inicial.
    2.  `remove.html`: Página de vendas que detalha os riscos e apresenta os planos.
    3.  `contact.html`: Formulário de contato para a conversão final.
- **Formulário de Contato Dinâmico:** Envio de formulário assíncrono em JavaScript (AJAX) que evita recarregamento da página e fornece feedback instantâneo ao usuário.
- **Micro-interações:** Animações sutis em botões e elementos de formulário que melhoram a experiência do usuário e transmitem qualidade.
- **Código Limpo e Organizado:** Estrutura de arquivos clara e código comentado para fácil entendimento e customização.

## 📂 Estrutura de Arquivos

```
/
├── assets/
│   ├── css/
│   │   └── style.css         # Folha de estilos principal
│   └── js/
│       └── script.js         # Lógica do formulário dinâmico
│
├── index.html                # Página inicial (Home)
├── remove.html               # Página de vendas/preços
├── contact.html              # Página de contato com o formulário
└── README.md                 # Este arquivo
```

## 🚀 Como Usar

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ItsMeMonge/PrivacyGuard.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd PrivacyGuard
    ```
3.  **Abra o arquivo `index.html`** no seu navegador para visualizar a página.

## 🎨 Guia de Customização

Este template está pronto para ser adaptado para o seu próprio serviço. Aqui estão as áreas-chave para customizar:

-   **Textos de Marketing:** Todo o conteúdo de texto em `index.html`, `remove.html`, e `contact.html` é um exemplo. Você deve substituir os títulos, descrições, características do serviço e os planos de preços para que correspondam ao seu produto.

-   **Endpoint do Formulário:** A mudança técnica mais crítica. No arquivo `assets/js/script.js`, você precisa substituir a chamada de API simulada por uma real. Encontre esta seção:

    ```javascript
    // --- Simulate API call (replace with actual fetch in production) ---
    try {
        // ...
        // Por agora, apenas simulamos um atraso
        await new Promise(resolve => setTimeout(resolve, 1500));
        // ...
    } 
    ```
    
    Substitua o bloco `try` pela sua chamada `fetch` real para enviar os dados do formulário para o seu backend.

-   **Marca e Cores:** Você pode facilmente alterar todo o esquema de cores do site editando as variáveis CSS no topo do arquivo `assets/css/style.css`.

    ```css
    :root {
        --bg-color: #0d0d0d;
        --primary-color: #00ff99;
        /* ...e assim por diante */
    }
    ```

---

Feito com foco em performance e vendas. Sinta-se à vontade para usar e adaptar este template para os seus próprios projetos. 