import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  root: __dirname,
  base: './',   
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001,        // Port bạn muốn cố định
    strictPort: true   // Nếu true, sẽ báo lỗi nếu port đã bị chiếm
  },
  build: {
    outDir: '../dist/customer',
    emptyOutDir: true,
  },
});
