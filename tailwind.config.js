/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#050505',
          800: '#090909',
          700: '#0B0B0B',
          600: '#111111',
          500: '#1a1a1a',
        },
        brand: {
          primary: '#FF7A00',
          secondary: '#FF8C1A',
          tertiary: '#FFA033',
        },
        accent: {
          white: '#FFFFFF',
          silver: '#C0C0C0',
          blue: '#E0F0FF',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'glow-pulse': 'glow-pulse 3s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.8', boxShadow: '0 0 10px rgba(255, 122, 0, 0.5)' },
          '50%': { opacity: '1', boxShadow: '0 0 20px rgba(255, 122, 0, 0.8)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      backgroundImage: {
        'hud-gradient': 'linear-gradient(to bottom right, rgba(255,122,0,0.1), transparent)',
      }
    },
  },
  plugins: [],
}
