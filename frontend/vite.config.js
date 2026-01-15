import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'essie-inswept-kimberely.ngrok-free.dev' // Tambahkan host ngrok Anda di sini
    ]
  }
})
