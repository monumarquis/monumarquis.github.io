module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        about: 'url("/src/assets/img/outline-text/about.svg")',
        portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
        services: 'url("/src/assets/img/outline-text/services.svg")',
        testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
        contact: 'url("/src/assets/img/outline-text/contact.svg")',
      },
      colors: {
        primary: '#F08E8B',
        secondary: '#1C1D24',
        tertiary: '#9C4542',
        accent: {
          DEFAULT:'#1c1917 ',
          hover: '#06CBB8',
        },
        paragraph: '#1B0D1D',
        fourth:"#F33407",
        fifth:"#9ECD0D",
        input:"#F3FFFF",
        purple:"#4c1d95",
        footer:"#3586ff",
        
      },
    },
  },
  plugins: [],
};
