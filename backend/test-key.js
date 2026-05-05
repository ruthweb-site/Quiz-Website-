const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function check() {
  console.log("Using API Key starting with:", process.env.GEMINI_API_KEY ? process.env.GEMINI_API_KEY.substring(0, 5) + "..." : "UNDEFINED");
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent("Test");
    console.log("Success with gemini-1.5-flash!");
    console.log(result.response.text());
  } catch (e) {
    console.log("Failed with gemini-1.5-flash:");
    console.log(e.message);
    
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.0-pro' });
        const result = await model.generateContent("Test");
        console.log("Success with gemini-1.0-pro!");
        console.log(result.response.text());
    } catch (e2) {
        console.log("Failed with gemini-1.0-pro:");
        console.log(e2.message);
    }
  }
}
check();
