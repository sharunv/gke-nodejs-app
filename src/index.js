import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;

// Health check
app.get("/healthz", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Main route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Production-ready GKE app 🚀" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
