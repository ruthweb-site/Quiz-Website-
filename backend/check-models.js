const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function listModels() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const result = await genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    console.log("🔍 Checking API Key and Models...");
    
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const response = await model.generateContent("Hi");
    console.log("✅ Connection Successful!");
    console.log("Response:", response.response.text());
  } catch (error) {
    console.error("❌ Diagnostic Error:");
    console.error("Status:", error.status);
    console.error("Message:", error.message);
    console.log("\n💡 TIP: If you see 404, your API Key might be invalid or the Generative Language API is not enabled in your Google Cloud Project.");
  }
}

listModels();
