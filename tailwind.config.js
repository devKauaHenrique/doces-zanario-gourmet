/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rosa': "#CD8195",
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
    }
  },
  plugins: [],
}

