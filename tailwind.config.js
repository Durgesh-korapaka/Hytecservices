/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Pulled from the AV logo: deep navy -> royal blue -> ice blue.
        brand: {
          50: '#EEF5FF',
          100: '#D9E8FF',
          200: '#BBD6FF',
          300: '#8CBCFF',
          400: '#5698FF',
          500: '#2F74F5',
          600: '#1257D6',
          700: '#0F46B0',
          800: '#133C8C',
          900: '#15346F',
          950: '#0B1B3A',
        },
        ice: {
          50: '#EFFAFF',
          100: '#DEF3FF',
          200: '#B6E9FF',
          300: '#75D9FF',
          400: '#2CC5FB',
          500: '#02ADEB',
        },
        sun: {
          100: '#FFF3D6',
          400: '#FFC13B',
          500: '#FFB020',
          600: '#E08E00',
        },
        wa: {
          DEFAULT: '#25D366',
          dark: '#128C4B',
        },
        ink: '#0B1B3A',
        mist: '#F4F8FD',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', '"Noto Sans Telugu"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', '"Plus Jakarta Sans Variable"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(11,27,58,.04), 0 8px 24px -6px rgba(11,27,58,.08)',
        lift: '0 2px 4px rgba(11,27,58,.04), 0 18px 40px -12px rgba(18,87,214,.25)',
        glow: '0 10px 30px -8px rgba(18,87,214,.55)',
        'glow-wa': '0 10px 30px -8px rgba(37,211,102,.6)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      keyframes: {
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%': { transform: 'translateY(-6px) translateX(0)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(60px) translateX(8px)', opacity: '0' },
        },
        airflow: {
          '0%': { strokeDashoffset: '40', opacity: '0' },
          '30%': { opacity: '.9' },
          '100%': { strokeDashoffset: '-40', opacity: '0' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(.6)', opacity: '0' },
          '30%': { opacity: '.9' },
          '100%': { transform: 'translateY(-40px) scale(1)', opacity: '0' },
        },
        twinkle: {
          '0%,100%': { opacity: '.2', transform: 'scale(.7)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: { to: { transform: 'translateX(-50%)' } },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'none' },
        },
        shimmer: { to: { backgroundPosition: '200% center' } },
      },
      animation: {
        'spin-slow': 'spin-slow 6s linear infinite',
        'spin-drum': 'spin-slow 2.4s linear infinite',
        float: 'float 5s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        drift: 'drift 3.2s ease-in infinite',
        airflow: 'airflow 2.6s ease-in-out infinite',
        bubble: 'bubble 2.8s ease-out infinite',
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        'fade-up': 'fade-up .5s ease-out both',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
