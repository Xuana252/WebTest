/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-custom': 'inset 0 5px 2px rgba(0, 0, 0, 0.2)',
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
        'title' : '1.2em',
        'cate' :'1em'
      },
      lineHeight: {
        'title' : '2em',
        "hoverPhoto": '100%'
      },
      gridTemplateRows: {
      },
      backgroundColor: {
        'hoverPhoto' : 'rgba(0,0,0,0.5)',
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
  },
  plugins: [],
}

