const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Helper: generate JWT
function generateToken(user) {
  return jwt.sign(
    { id: user._id, username: user.username, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// POST /api/auth/login
// Matches existing frontend: username + email login (no password)
router.post('/login', async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({ success: false, message: 'Username and email are required' });
    }

    // Find user by email
    let user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      // Existing user: verify username matches
      if (user.username.toLowerCase() !== username.toLowerCase()) {
        return res.status(401).json({ success: false, message: 'Username does not match this email' });
      }
    } else {
      // New user: auto-register them
      user = await User.create({ username, email: email.toLowerCase() });
    }

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });

  } catch (err) {
    console.error('❌ Login error:', err);
    return res.status(500).json({
      success: false,
      message: 'Server error during login',
      error: err.message
    });
  }
});

// POST /api/auth/register (optional explicit register)
router.post('/register', async (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      return res.status(400).json({ success: false, message: 'Username and email are required' });
    }

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ success: false, message: 'User with this email already exists' });
    }

    const user = await User.create({ username, email: email.toLowerCase() });
    const token = generateToken(user);

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: { id: user._id, username: user.username, email: user.email }
    });

  } catch (err) {
    console.error('Register error:', err);
    return res.status(500).json({ success: false, message: 'Server error during registration' });
  }
});

module.exports = router;
