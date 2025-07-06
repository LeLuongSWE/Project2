import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  root: __dirname,
  base: './',   
  plugins: [react()],
  server: {
    port: 3002,        // Port bạn muốn cố định
    strictPort: true   // Nếu true, sẽ báo lỗi nếu port đã bị chiếm
  },
  build: {
    outDir: '../dist/employee',
    emptyOutDir: true,
  },
});
