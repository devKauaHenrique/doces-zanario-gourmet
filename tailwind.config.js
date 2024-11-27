/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rosa': "#CD8195",
        'rosa-escuro': "#ac586e",
        "verde": "#98C5AE",
        "verde-escuro": "#67917b",
        "bege": "#FBF7EE"
      },
    },
    backgroundImage: {
      'home': "url(/assets/home.jpg)",
      'fundo-bolo': "url(/assets/fundo-bolo.png"
    },
    height: {
      'screen-minus-header-1': 'calc(100vh - 3rem)',
      'screen-minus-header-2': 'calc(100vh - 5rem)'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'satisfy': ['Satisfy', 'sans-serif'],
      'della-respira': ['Della Respira', 'sans-serif'],
    },
    keyframes:{
      wiggle:{
        '0%, 100%':{transform: 'translateY(0) scale(1)'},
        '50%': {transform: 'translateY(-8px) scale(1.1)'},
      },
    }
  },
  plugins: [],
}

