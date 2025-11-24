const express = require('express');
const connectDatabase = require("./config/db");
const apiRoute = require('./routes/api');
const db = require("./models"); // ⬅ penting
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", apiRoute);

async function startServer() {
  try {
    await connectDatabase();
    console.log("📌 Database connected");

    // 🔥 Sinkronisasi Sequelize → Bikin tabel otomatis
    await db.sequelize.sync({ alter: true });
    console.log("📌 Database & tabel berhasil disinkronisasi");

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Gagal menjalankan server:", error.message);
    process.exit(1);
  }
}

startServer();
