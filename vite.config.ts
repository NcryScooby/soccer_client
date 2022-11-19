import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// remove [vite] connected... message
process.env.VITE_SUPPRESS_CONNECT_MESSAGE = "true";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
