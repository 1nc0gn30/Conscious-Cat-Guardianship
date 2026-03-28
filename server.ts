import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Proxy for The Cat API
  app.get("/api/cat/breeds", async (req, res) => {
    try {
      const apiKey = process.env.CAT_API_KEY;
      const response = await fetch("https://api.thecatapi.com/v1/breeds", {
        headers: apiKey ? { "x-api-key": apiKey } : {},
      });
      if (!response.ok) throw new Error("Cat API error");
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Cat API Proxy Error:", error);
      res.status(500).json({ error: "Failed to fetch breeds" });
    }
  });

  // API Proxy for Cat Facts
  app.get("/api/cat/fact", async (req, res) => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) throw new Error("Cat Fact API error");
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Cat Fact Proxy Error:", error);
      res.status(500).json({ error: "Failed to fetch fact" });
    }
  });

  // API Proxy for Cat Images
  app.get("/api/cat/images", async (req, res) => {
    try {
      const { limit = 1, breed_ids } = req.query;
      const apiKey = process.env.CAT_API_KEY;
      const url = new URL("https://api.thecatapi.com/v1/images/search");
      url.searchParams.append("limit", limit.toString());
      if (breed_ids) url.searchParams.append("breed_ids", breed_ids.toString());
      
      const response = await fetch(url.toString(), {
        headers: apiKey ? { "x-api-key": apiKey } : {},
      });
      if (!response.ok) throw new Error("Cat Image API error");
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error("Cat Image Proxy Error:", error);
      res.status(500).json({ error: "Failed to fetch images" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
