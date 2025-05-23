import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const repoName = 'Portfolio'

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()], // ✅ Include the plugin here
})
