import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true
  },
  server: {
    cors: true,
    cache: {
      maxAge: 1000 * 60 * 60 * 24, // 1 hari
    },
  },
})
