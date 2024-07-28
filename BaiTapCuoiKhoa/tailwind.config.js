/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 5px 2px var(--secondary-variant-1)',
      },
      width: {
        'catebox': '40%',
      },
      minWidth: {
        'minCate': '80px',
      },
      height: {
        'catebox': '100%',
        'photo': '240px',
        'menu': '110px',
      },
      fontFamily: {
        'title': 'Playwrite BE VLG'
      },
      fontSize: {
        'title' : '1.1em',
        'cate' :'1em'
      },
      lineHeight: {
        'title' : '1.5em',
        "hoverPhoto": '100%'
      },
      gridTemplateRows: {
      },
      
    },
    keyframes:{
      slideUp:{
        'from':{
          transform: 'translateY(30px)'
        },
      }
    },
    animation: {
      'slide-up-animation': 'slideUp 0.5s ease-out',  
    },
    colors: {
      primary: 'var(--primary)',
      secondary: {
        1: 'var(--secondary)',
        2: 'var(--secondary-variant-1)',
      },
      accent: 'var(--accent)',
      black: 'black',
      transparent: 'transparent',
      white:'white'
    },
    fontFamily: {
      AppLogo: 'AppLogo'
    }
  },
  plugins: [],
}


