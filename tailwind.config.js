/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      keyframes: {
        dance: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(-8px) rotate(-3deg)' },
          '50%': { transform: 'translateX(8px) rotate(3deg)' },
          '75%': { transform: 'translateX(-4px) rotate(-2deg)' }
        },
        confetti: {
          '0%': { transform: 'translateY(-10vh) rotate(0)' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)' }
        },
        petal: {
          '0%': { transform: 'translateY(-10vh) translateX(0) rotate(0)' },
          '50%': { transform: 'translateY(50vh) translateX(20px) rotate(90deg)' },
          '100%': { transform: 'translateY(110vh) translateX(-20px) rotate(180deg)' }
        },
        heartFall: {
          '0%': { transform: 'translateY(-10vh) scale(0.9)', opacity: 0.7 },
          '100%': { transform: 'translateY(110vh) scale(1.1)', opacity: 1 }
        },
        heartPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }
        }
      },
      animation: {
        dance: 'dance 1.2s infinite',
        'confetti-fall': 'confetti linear forwards',
        'petal-fall': 'petal ease-in-out infinite',
        fall: 'heartFall ease-in-out infinite',
        'heart-pulse': 'heartPulse 1.2s ease-in-out infinite'
      },
      boxShadow: {
        love: '0 0 20px rgba(255, 0, 102, 0.35)'
      },
      textShadow: {
        love: '0 2px 8px rgba(255, 0, 102, 0.5)'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-love': {
          textShadow: '0 2px 8px rgba(255, 0, 102, 0.5)'
        },
      }
      addUtilities(newUtilities)
    }
  ]
}


