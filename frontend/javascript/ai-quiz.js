document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById('generate-ai-btn');
    const topicInput = document.getElementById('ai-topic');
    const statusText = document.getElementById('ai-status');

    if (!generateBtn) return;

    generateBtn.addEventListener('click', async () => {
        const topic = topicInput.value.trim();
        
        if (!topic) {
            alert("Please enter a topic first!");
            return;
        }

        // Check if logged in
        if (localStorage.getItem('loggedIn') !== 'true') {
            alert("Please login first to use the AI Generator.");
            window.location.href = 'login.html';
            return;
        }

        try {
            generateBtn.disabled = true;
            statusText.style.display = 'block';
            statusText.textContent = "🚀 Gemini is thinking... please wait.";

            const response = await fetch('/api/ai/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ topic })
            });

            const data = await response.json();

            if (data.success) {
                statusText.textContent = "✅ Questions ready! Launching quiz...";
                
                // Store AI questions in localStorage
                localStorage.setItem('selectedCategory', 'ai');
                localStorage.setItem('aiQuizData', JSON.stringify(data.questions));
                localStorage.setItem('aiTopic', topic);

                // Redirect to quiz page
                setTimeout(() => {
                    window.location.href = 'quiz.html';
                }, 1000);
            } else {
                throw new Error(data.message || 'Failed to generate questions');
            }

        } catch (error) {
            console.error("AI Generation Error:", error);
            statusText.textContent = "❌ Error: " + error.message;
            generateBtn.disabled = false;
        }
    });
});
