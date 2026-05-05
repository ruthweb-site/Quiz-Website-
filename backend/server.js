const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const dns = require('dns');
require('dotenv').config();

// Fix for querySrv ECONNREFUSED issues in some Node environments
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first');
}

const app = express();
console.log('📂 Backend __dirname:', __dirname);
console.log('📂 Frontend Path:', path.join(__dirname, '..', 'frontend'));

// ─── Middleware ──────────────────────────────────────────
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'frontend')));

// ─── Serve login page as entry point ──────────────────
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'login.html'));
});

// ─── API Routes ─────────────────────────────────────────
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/quiz', require('./routes/quizRoutes'));
app.use('/api/stats', require('./routes/statsRoutes'));
app.use('/api/ai', require('./routes/aiRoutes'));


// ─── Health check ───────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', tier: '3-tier', timestamp: new Date() });
});

// ─── Global Error Handler ──────────────────────────────
app.use((err, req, res, next) => {
  console.error('💥 Global Error:', err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

// ─── Connect to MongoDB Atlas and start server ──────────
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed!');
    console.error('Error Message:', err.message);
    if (err.message.includes('ECONNREFUSED')) {
      console.error('👉 TIP: This usually means your DNS is blocking the Atlas SRV record.');
      console.error('👉 Try whitelisting your IP in MongoDB Atlas (Network Access).');
    }
    process.exit(1);
  });

