/* eslint-disable no-undef */
import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/Modale/index.jsx"),
      name: "modale_by_barberousse",
      fileName: (format) => `modale_by_barberousse.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
})
