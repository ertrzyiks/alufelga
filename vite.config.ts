import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  base: '/alufelga/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
