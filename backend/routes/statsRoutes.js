const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const { protect } = require('../middleware/auth');

// GET /api/stats/me  (protected)
// Returns the most recent quiz result for the logged-in user
router.get('/me', protect, async (req, res) => {
  try {
    const latest = await Result.findOne({ userId: req.user.id })
      .sort({ completedAt: -1 })
      .lean();

    if (!latest) {
      return res.status(404).json({ success: false, message: 'No quiz stats found' });
    }

    return res.status(200).json({ success: true, stats: latest });
  } catch (err) {
    console.error('Stats error:', err);
    return res.status(500).json({ success: false, message: 'Server error fetching stats' });
  }
});

// GET /api/stats/history  (protected)
// Returns all quiz results for the logged-in user
router.get('/history', protect, async (req, res) => {
  try {
    const results = await Result.find({ userId: req.user.id })
      .sort({ completedAt: -1 })
      .lean();

    return res.status(200).json({ success: true, history: results });
  } catch (err) {
    console.error('History error:', err);
    return res.status(500).json({ success: false, message: 'Server error fetching history' });
  }
});

module.exports = router;
