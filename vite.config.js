import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // PENTING: host: true mengizinkan akses dari luar container (wajib untuk Codespaces)
    host: true, 
    // Kita kunci di port 5173 agar konsisten
    port: 5173, 
    // Opsional: Membuka browser otomatis saat server jalan (bisa dimatikan jika mengganggu)
    open: false, 
  }
})