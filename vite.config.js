import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/my-portfolio/' : '/',
  server: {
    allowedHosts: ['sb-lxiaj2aun9mr.vercel.run', 'sb-6h67f2wno9tk.vercel.run'],
  },
}))
