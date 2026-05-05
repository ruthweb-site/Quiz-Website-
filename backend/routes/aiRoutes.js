const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post('/generate', async (req, res) => {
  try {
    const { topic } = req.body;

    if (!topic) {
      return res.status(400).json({ success: false, message: 'Topic is required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Generate a quiz with 5 multiple-choice questions about "${topic}".
    Format the output as a JSON array of objects. Each object MUST have:
    - "question": string
    - "options": an array of 4 strings
    - "correctAnswer": an integer (0-3) representing the index of the correct option.
    
    Ensure the JSON is valid and contains ONLY the array. Do not include markdown formatting or extra text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    console.log('🤖 AI Raw Response:', text);

    // Robust JSON extraction: Find the first [ and the last ]
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      throw new Error('AI response did not contain a valid JSON array');
    }

    const questions = JSON.parse(jsonMatch[0]);

    res.json({
      success: true,
      questions
    });

  } catch (error) {
    console.error('💥 AI Generation Error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to generate quiz',
    });
  }
});

module.exports = router;
