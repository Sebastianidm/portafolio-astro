/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        // Tu animación de glitch (sin cambios)
        'glitch': 'glitch-soft 6s linear 1', 

        // --- NUEVAS ANIMACIONES ---
        // Animación para el texto verde (títulos de sección)
        'pulse-green': 'pulse-green-neon 5s ease-in-out infinite',
        // Animación para el borde fucsia (tarjetas de proyecto)
        'pulse-fuchsia': 'pulse-fuchsia-neon 4s ease-in-out infinite',
      },
keyframes: {
        // Tu keyframe de glitch (sin cambios)
        'glitch-soft': {
          '0%':   { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
          '5%':   { 'text-shadow': '1px 0 0 #84cc16, -1px 0 0 #d946ef' },
          '10%':  { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
          '15%':  { 'text-shadow': '0 -1px 0 #84cc16, 0 1px 0 #d946ef' },
          '20%':  { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
          '25%':  { 'text-shadow': '-1px 0 0 #d946ef, 1px 0 0 #84cc16' },
          '30%':  { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
          '35%':  { 'text-shadow': '0 1px 0 #84cc16, 0 -1px 0 #d946ef' },
          '40%':  { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
          '45%, 85%': { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' }, 
          '90%':  { 'text-shadow': '2px 0 0 #d946ef, -2px 0 0 #84cc16' },
          '95%':  { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
          '100%': { 'text-shadow': '1px 1px 0 rgba(0,0,0,0.5)' },
        },
        
        // --- NUEVOS KEYFRAMES ---
        'pulse-green-neon': {
          '0%, 100%': { 'text-shadow': '0 0 8px rgba(163, 230, 62, 0.5)' }, // (Verde lima: #a3e63e)
          '50%': { 'text-shadow': '0 0 16px rgba(163, 230, 62, 1)' }
        },
        'pulse-fuchsia-neon': {
          '0%, 100%': { 'box-shadow': '0 0 15px rgba(192, 38, 211, 0.5)' }, // (Fucsia: #c026d3)
          '50%': { 'box-shadow': '0 0 25px rgba(192, 38, 211, 0.9)' }
        }
      }
    },
  },
  plugins: [],
}