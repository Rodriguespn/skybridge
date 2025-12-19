import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { skybridge } from "skybridge/web";

export default defineConfig({
  plugins: [react(), skybridge()],
  server: {
    port: 3000,
  },
});
