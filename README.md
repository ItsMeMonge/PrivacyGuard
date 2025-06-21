# Privacy Guard - High-Conversion Landing Page Template

This is an open-source project that provides a complete and modern template for a high-conversion landing page (Sellpage), themed for a digital privacy service ("Privacy Guard"). The design is dark, professional, and built with UI/UX and copywriting techniques to maximize lead generation.

![Homepage Screenshot](https://prnt.sc/5FrvuB1LMe7J)

## ✨ Features

- **Modern & Responsive Design:** Built with Flexbox and Media Queries for a seamless experience on desktops, tablets, and mobile devices.
- **Conversion-Focused:** Each section is designed with a sales goal, from capturing attention on the homepage to overcoming objections on the pricing page.
- **Strategic Sales Funnel:**
    1.  `index.html`: Initial impact page.
    2.  `remove.html`: Sales page detailing risks and presenting the service plans.
    3.  `contact.html`: Contact form for the final conversion.
- **Dynamic Contact Form:** Asynchronous form submission using JavaScript (AJAX) that prevents page reloads and provides instant user feedback.
- **Micro-interactions:** Subtle animations on buttons and form elements that enhance the user experience and convey quality.
- **Clean & Organized Code:** Clear file structure and commented code for easy understanding and customization.

## 📂 File Structure

```
/
├── assets/
│   ├── css/
│   │   └── style.css         # Main stylesheet
│   └── js/
│       └── script.js         # Dynamic form logic
│
├── index.html                # Homepage
├── remove.html               # Sales/Pricing page
├── contact.html              # Contact page with the form
└── README.md                 # This file
```

## 🚀 How to Use

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ItsMeMonge/PrivacyGuard.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd PrivacyGuard
    ```
3.  **Open `index.html`** in your browser to see the website.

## 🎨 Customization Guide

This template is ready to be adapted for your own service. Here are the key areas to customize:

-   **Marketing Copy:** All text content in `index.html`, `remove.html`, and `contact.html` is placeholder. You should replace the headlines, descriptions, service features, and pricing tiers to match your specific product.

-   **Form Endpoint:** The most critical change. In `assets/js/script.js`, you need to replace the simulated API call with a real one. Find this section:

    ```javascript
    // --- Simulate API call (replace with actual fetch in production) ---
    try {
        // ...
        // For now, we just simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        // ...
    } 
    ```
    
    Replace the `try` block with your actual `fetch` call to send the form data to your backend.

-   **Branding & Colors:** You can easily change the entire site's color scheme by editing the CSS variables at the top of `assets/css/style.css`.

    ```css
    :root {
        --bg-color: #0d0d0d;
        --primary-color: #00ff99;
        /* ...and so on */
    }
    ```

---

Made with a focus on performance and sales. Feel free to use and adapt this template for your own projects. 