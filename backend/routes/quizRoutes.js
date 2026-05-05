const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const { protect } = require('../middleware/auth');
const { quizSubmissionsCounter } = require('../middleware/prometheus');

// POST /api/quiz/submit  (protected)
// Saves a completed quiz result to MongoDB Atlas
router.post('/submit', protect, async (req, res) => {
  try {
    const {
      category,
      subcategory,
      numberOfQuestions,
      questionsAttempted,
      correctAnswers,
      answersLog
    } = req.body;

    if (!category || !subcategory || numberOfQuestions === undefined || correctAnswers === undefined) {
      return res.status(400).json({ success: false, message: 'Missing required quiz result fields' });
    }

    // Increment Prometheus counter
    quizSubmissionsCounter.inc({ category, subcategory });

    const score = numberOfQuestions > 0
      ? Math.round((correctAnswers / numberOfQuestions) * 100)
      : 0;

    const result = await Result.create({
      userId: req.user.id,
      username: req.user.username,
      category,
      subcategory,
      numberOfQuestions,
      questionsAttempted: questionsAttempted || 0,
      correctAnswers,
      score,
      answersLog: answersLog || []
    });

    return res.status(201).json({
      success: true,
      message: 'Quiz result saved',
      result
    });

  } catch (err) {
    console.error('Submit quiz error:', err);
    return res.status(500).json({ success: false, message: 'Server error saving quiz result' });
  }
});

module.exports = router;
