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
        'catebox': 'fit-content',
        'photo': '240px',
      },
      fontFamily: {
        'title': 'Playwrite BE VLG'
      },
      fontSize: {
        'title' : '5em',
        'cate' :'1.5em'
      },
      lineHeight: {
        'title' : '2em',
        "hoverPhoto": '100%'
      },
      gridTemplateRows: {
        'myGrid' : '20% 5% 5% 70%',
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

