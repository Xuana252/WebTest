/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 3px 3px 0px var(--secondary-variant-1)',
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
      },
      dropDown: {

        '0%' : {
          transform: 'scaleY(0)'
        },
        '80%' : {
          transform: 'scaleY(0.8)'
        },
        '100%' : {
          transform: 'scaleY(1)'
        }
        
      },
      retract: {
        '0%' : {
          transform: 'scaleY(1)'
        },
        '80%' : {
          transform: 'scaleY(0.2)'
        },
        '100%' : {
          transform: 'scaleY(0)'
        }
        
      },
    },
    animation: {
      'slide-up-animation': 'slideUp 0.5s ease-out',  
      'drop-down-animation': 'dropDown 150ms ease-in-out forwards',
      'retract-animation': 'retract 150ms ease-in-out forwards',
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


