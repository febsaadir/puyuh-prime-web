/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'puyuh-gold': '#F4A261', // Warna kuning telur/premium
        'puyuh-brown': '#2A9D8F', // Kita ganti coklat tua biasa dengan Teal modern atau Earthy Green
        'puyuh-dark': '#264653', // Warna teks modern
        'puyuh-cream': '#FDFBF7', // Background homemade feel
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Modern
        serif: ['Merriweather', 'serif'], // Kesan homemade/elegan
      }
    },
  },
  plugins: [],
}