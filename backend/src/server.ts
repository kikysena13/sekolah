
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "API Sistem Informasi Manajemen Sekolah aktif!",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "OK",
    service: "School Management API",
  });
});

app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});
