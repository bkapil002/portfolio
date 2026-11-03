import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import contactHandler from "./api/contact.js";

// Serves /api/contact through the same handler Vercel uses, so the contact
// form and dashboard work with `npm run dev` and `npm run preview`
// (no Vercel CLI needed).
const localApi = () => {
  const middleware = async (req, res, next) => {
    if (!req.url?.startsWith("/api/contact")) return next();

    try {
      await contactHandler(req, res);
    } catch (error) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: error.message }));
    }
  };

  return {
    name: "local-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
};

export default defineConfig({
  plugins: [react(), tailwindcss(), localApi()],
});
