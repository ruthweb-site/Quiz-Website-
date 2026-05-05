const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");
const subcategoryOptionsContainer = document.querySelector(".subcategory-options");
const submitResultBtn = document.querySelector(".submit-result-btn");

const QUIZ_TIME_LIMIT = 20;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let numberOfQuestions = 5;
let currentQuestion = null;
let questionsIndexHistory = [];
let correctAnswerCount = 0;

let quizMainCategory = localStorage.getItem("selectedCategory")?.toLowerCase() || "";
let quizSubCategory = "";

let quizStats = {
  username: localStorage.getItem("quizUsername") || "Guest",
  category: quizMainCategory,
  subcategory: "",
  numberOfQuestions: 0,
  correctAnswers: 0,
  questionsAttempted: 0,
  answersLog: []
};

function generateSubcategoryOptions(mainCategory) {
  subcategoryOptionsContainer.innerHTML = "";
  
  if (mainCategory === 'ai') {
    const topic = localStorage.getItem('aiTopic') || 'Generated';
    const btn = document.createElement("button");
    btn.className = "subcategory-option active";
    btn.textContent = `AI: ${topic}`;
    quizSubCategory = topic;
    subcategoryOptionsContainer.appendChild(btn);
    
    // Auto start quiz for AI if we just redirected
    if (localStorage.getItem('aiQuizData')) {
        setTimeout(() => startQuiz(), 500);
    }
    return;
  }

  const subcategories = Object.keys(questions[mainCategory] || {});

  if (subcategories.length === 0) {
    subcategoryOptionsContainer.innerHTML = `<p style="color: red">⚠ No subcategories for "${mainCategory}"</p>`;
    return;
  }

  subcategories.forEach((subcat, idx) => {
    const btn = document.createElement("button");
    btn.className = "subcategory-option";
    btn.textContent = subcat;
    if (idx === 0) {
      btn.classList.add("active");
      quizSubCategory = subcat;
    }
    btn.addEventListener("click", () => {
      document.querySelector(".subcategory-option.active")?.classList.remove("active");
      btn.classList.add("active");
      quizSubCategory = subcat;
    });
    subcategoryOptionsContainer.appendChild(btn);
  });
}

function resetTimer() {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
}

function startTimer() {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;
    if (currentTime <= 0) {
      clearInterval(timer);
      highlightCorrectAnswer();
      nextQuestionBtn.style.visibility = "visible";
      document.querySelector(".quiz-timer").style.background = "#c31402";
      answerOptions.querySelectorAll(".answer-option").forEach(opt => opt.style.pointerEvents = "none");
    }
  }, 1000);
}

function getRandomQuestion() {
  let categoryQuestions = [];
  
  if (quizMainCategory === 'ai') {
    categoryQuestions = JSON.parse(localStorage.getItem('aiQuizData') || '[]');
  } else {
    categoryQuestions = questions[quizMainCategory]?.[quizSubCategory] || [];
  }

  if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) return null;
  const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
  const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  return randomQuestion;
}

function highlightCorrectAnswer() {
  const options = answerOptions.querySelectorAll(".answer-option");
  if (!currentQuestion || currentQuestion.correctAnswer === undefined) return;
  const correctOption = options[currentQuestion.correctAnswer];
  if (!correctOption) return;
  correctOption.insertAdjacentHTML("beforeend", `<span class="material-symbols-rounded">check_circle</span>`);
}

function handleAnswer(option, answerIndex) {
  clearInterval(timer);
  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? 'correct' : 'incorrect');
  if (isCorrect) correctAnswerCount++;
  else highlightCorrectAnswer();
  const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
  option.insertAdjacentHTML("beforeend", iconHTML);
  answerOptions.querySelectorAll(".answer-option").forEach(opt => opt.style.pointerEvents = "none");
  nextQuestionBtn.style.visibility = "visible";
  quizStats.questionsAttempted++;
  if (isCorrect) quizStats.correctAnswers++;
  quizStats.answersLog.push({
    question: currentQuestion.question,
    selected: currentQuestion.options[answerIndex],
    correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
    wasCorrect: isCorrect
  });
  localStorage.setItem("quizStats", JSON.stringify(quizStats));
}

function renderQuestion() {
  resetTimer();
  currentQuestion = getRandomQuestion();
  if (!currentQuestion) return showQuizResult();
  document.querySelector(".quiz-question").textContent = currentQuestion.question;
  answerOptions.innerHTML = "";
  currentQuestion.options.forEach((optionText, idx) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.innerHTML = `<p>${optionText}</p>`;
    li.addEventListener("click", () => handleAnswer(li, idx));
    answerOptions.appendChild(li);
  });
  nextQuestionBtn.style.visibility = "hidden";
  document.querySelector(".quiz-timer").style.background = "#222";
  startTimer();
}

function startQuiz() {
  // For AI quiz, skip subcategory/question validation
  if (quizMainCategory === 'ai') {
    const aiData = JSON.parse(localStorage.getItem('aiQuizData') || '[]');
    if (aiData.length === 0) {
      alert("No AI quiz data found. Please generate a quiz first.");
      return;
    }
    const topic = localStorage.getItem('aiTopic') || 'AI Generated';
    quizSubCategory = topic;
    numberOfQuestions = aiData.length;

    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // Reset stats
    correctAnswerCount = 0;
    questionsIndexHistory = [];

    quizStats = {
      username: localStorage.getItem("quizUsername") || "Guest",
      category: 'ai',
      subcategory: topic,
      numberOfQuestions: numberOfQuestions,
      correctAnswers: 0,
      questionsAttempted: 0,
      answersLog: []
    };

    renderQuestion();
    return;
  }

  // Normal quiz flow — validate first, THEN hide config
  const activeSubcat = configContainer.querySelector(".subcategory-option.active");
  const activeQuestionCount = configContainer.querySelector(".question-option.active");

  if (!activeSubcat || !activeQuestionCount) {
    alert("Please select a subcategory and number of questions.");
    return;
  }

  quizSubCategory = activeSubcat.textContent;
  numberOfQuestions = parseInt(activeQuestionCount.textContent);

  configContainer.style.display = "none";
  quizContainer.style.display = "block";

  // Reset stats
  correctAnswerCount = 0;
  questionsIndexHistory = [];

  // Prepare stats object
  quizStats = {
    username: localStorage.getItem("quizUsername") || "Guest",
    category: quizMainCategory,
    subcategory: quizSubCategory,
    numberOfQuestions: numberOfQuestions,
    correctAnswers: 0,
    questionsAttempted: 0,
    answersLog: []
  };

  renderQuestion(); // Start the first question
}




function resetQuiz() {
  resetTimer();
  correctAnswerCount = 0;
  questionsIndexHistory = [];
  configContainer.style.display = "block";
  quizContainer.style.display = "none";
  resultContainer.style.display = "none";
}

function showQuizResult() {
  clearInterval(timer);
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  document.querySelector(".result-message").innerHTML =
    `Great effort! You got <b>${quizStats.correctAnswers}</b> out of <b>${quizStats.numberOfQuestions}</b> correct.`;

  localStorage.setItem("quizStats", JSON.stringify(quizStats));

  // ─── Manual Submission via Button ─────────────────────
  const token = localStorage.getItem("quizToken");
  if (submitResultBtn) {
    submitResultBtn.style.display = "block";

    if (!token) {
      // No token = login didn't reach the backend
      submitResultBtn.textContent = "⚠️ Not logged in to server - Login again";
      submitResultBtn.style.background = "#ff9800";
      submitResultBtn.disabled = false;
      submitResultBtn.onclick = () => {
        window.location.href = "login.html";
      };
    } else {
      // Has token = can submit
      submitResultBtn.textContent = "Submit Score to Leaderboard";
      submitResultBtn.style.background = "#28a745";
      submitResultBtn.disabled = false;

      submitResultBtn.onclick = () => {
        submitResultBtn.disabled = true;
        submitResultBtn.textContent = "Submitting...";
        submitResultBtn.style.background = "#666";

        fetch('/api/quiz/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
            category: quizStats.category,
            subcategory: quizStats.subcategory,
            numberOfQuestions: quizStats.numberOfQuestions,
            questionsAttempted: quizStats.questionsAttempted,
            correctAnswers: quizStats.correctAnswers,
            answersLog: quizStats.answersLog
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            submitResultBtn.textContent = "✅ Successfully Submitted!";
            submitResultBtn.style.background = "#28a745";
          } else {
            submitResultBtn.textContent = "❌ Error: " + (data.message || "Failed");
            submitResultBtn.style.background = "#dc3545";
            submitResultBtn.disabled = false;
          }
        })
        .catch(err => {
          submitResultBtn.textContent = "❌ Backend Unavailable: " + err.message;
          submitResultBtn.style.background = "#dc3545";
          submitResultBtn.disabled = false;
          console.warn('⚠ Submission error:', err.message);
        });
      };
    }
  }

}





document.querySelectorAll(".category-option").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-option").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    quizMainCategory = btn.dataset.category.toLowerCase();
    localStorage.setItem("selectedCategory", quizMainCategory);
    generateSubcategoryOptions(quizMainCategory);
  });
});

document.querySelectorAll(".question-option").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".question-option").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    numberOfQuestions = parseInt(btn.textContent);
  });
});

document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
nextQuestionBtn.addEventListener("click", renderQuestion);

// Initialize subcategories if category exists
if (quizMainCategory) {
  generateSubcategoryOptions(quizMainCategory);
}
