const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function list() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  try {
    // There isn't a direct listModels in the standard genAI object usually, 
    // it's often done via the Google AI Studio or specific API calls.
    // But let's try to see if we can get ANY model to work.
    const models = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-1.0-pro', 'text-embedding-004'];
    for (const m of models) {
        try {
            const model = genAI.getGenerativeModel({ model: m });
            await model.generateContent("Hi");
            console.log(`✅ ${m} works!`);
        } catch (e) {
            console.log(`❌ ${m} failed: ${e.message}`);
        }
    }
  } catch (e) {
    console.log("Global error:", e.message);
  }
}
list();
