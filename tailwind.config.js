/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
                "primary": "#EB5757",
                        
                "secondary": "#D926AA",
                        
                "accent": "#1FB2A5",
                        
                "neutral": "#191D24",
                        
                "base-100": "#fff",
                        
                "info": "#3ABFF8",
                        
                "success": "#36D399",
                        
                "warning": "#FBBD23",
                        
                "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

