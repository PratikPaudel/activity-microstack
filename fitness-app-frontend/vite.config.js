import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Use polling if file changes are not detected
    },
    host: true, // Allow access from network
    port: 5173, // Ensure the port is not blocked
  },
});
