const mongoose = require('mongoose');

const answerLogSchema = new mongoose.Schema({
  question: String,
  selected: String,
  correctAnswer: String,
  wasCorrect: Boolean
});

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  username: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  numberOfQuestions: {
    type: Number,
    required: true
  },
  questionsAttempted: {
    type: Number,
    required: true
  },
  correctAnswers: {
    type: Number,
    required: true
  },
  score: {
    type: Number, // percentage score
    required: true
  },
  answersLog: [answerLogSchema],
  completedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Result', resultSchema);
