import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration. base "/" keeps asset URLs absolute so deep links such as
// /projects load correctly on Vercel (paired with the rewrite in vercel.json).
export default defineConfig({
  plugins: [react()],
  base: "/",
});
