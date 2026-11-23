
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGithubPages ? '/my-portfolio/' : '/',
  server: {
    allowedHosts: [
      'sb-lxiaj2aun9mr.vercel.run',
      'sb-6h67f2wno9tk.vercel.run',
    ],
  },
})
