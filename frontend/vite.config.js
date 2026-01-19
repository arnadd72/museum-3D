import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Masukkan domain ke dalam array string
    allowedHosts: ["unnationally-phosphoric-nubia.ngrok-free.dev"],
  },
});
