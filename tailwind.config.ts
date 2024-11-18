import type { Config } from 'tailwindcss'

export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Color oscuro principal (dark: rgb(41, 41, 46))
        'dark-main': '#18181a',

        // Color principal (rgb(88, 133, 243))
        'primary': {
          DEFAULT: '#5885F3',
          light: '#5885F3',  // Versión más clara
          dark: '#1c2431',   // Versión más oscura
        },

        // Color de fondo para gradiente
        'bg-gradient': {
          start: '#FAF7F7',  // rgb(250, 247, 247)
          end: 'rgba(88, 133, 243, 0.25)'  // primary con 25% de opacidad
        }
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config