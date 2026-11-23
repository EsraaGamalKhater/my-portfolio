
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'github-pages' ? '/my-portfolio/' : '/',
  server: {
    allowedHosts: [
      'sb-lxiaj2aun9mr.vercel.run',
      'sb-6h67f2wno9tk.vercel.run',
    ],
  },
}))
