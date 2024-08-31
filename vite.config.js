import { defineConfig } from 'vite'
import { config } from 'dotenv'
import react from '@vitejs/plugin-react'

config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup.jsx',
  },
  css: {
    modules: {
      localsConvention: 'camelCaseOnly'
    }
  },
  define: {
    'process.env.REACT_APP_SERVICE_ID': JSON.stringify(process.env.REACT_APP_SERVICE_ID),
    'process.env.REACT_APP_TEMPLATE_ID': JSON.stringify(process.env.REACT_APP_TEMPLATE_ID),
    'process.env.REACT_APP_PUBLIC_KEY': JSON.stringify(process.env.REACT_APP_PUBLIC_KEY),
  }
})