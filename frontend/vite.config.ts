import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: 3000,
  host: true,
  build: {
    // Exclude files with the *.cy.tsx extension
    rollupOptions: {
      input: {
        main: 'src/main.ts', // Adjust this to your entry file
        // Add other entry points if necessary
      },
      output: {
        // Your output options
      },
      // Exclude files with the *.cy.tsx extension from being processed by Vite
      external: ['**/*.cy.tsx'],
    },
  },
  // Exclude the Cypress folder from being processed by Vite
  exclude: ['cypress/**'],

})
