const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");
const subcategoryOptionsContainer = document.querySelector(".subcategory-options");

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
  const categoryQuestions = questions[quizMainCategory]?.[quizSubCategory] || [];
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
  configContainer.style.display = "none";
  quizContainer.style.display = "block";

  // Get active subcategory and question count
  const activeSubcat = configContainer.querySelector(".subcategory-option.active");
  const activeQuestionCount = configContainer.querySelector(".question-option.active");

  if (!activeSubcat || !activeQuestionCount) {
    alert("Please select a subcategory and number of questions.");
    return;
  }

  quizSubCategory = activeSubcat.textContent;
  numberOfQuestions = parseInt(activeQuestionCount.textContent);

  // Reset stats
  correctAnswerCount = 0;
  questionsIndexHistory = [];

  // Prepare stats object
  quizStats = {
    username: localStorage.getItem("quizUsername") || "Guest",
    category: quizMainCategory, // fixed category
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

  console.log("Checking joke condition:", quizStats.correctAnswers, quizStats.numberOfQuestions);

  if (quizStats.correctAnswers < quizStats.numberOfQuestions / 2) {
    showJokePopup();  // ✅ Will now work correctly
  }
  
}


async function showJokePopup() {
  let popup = document.querySelector(".joke-popup");

  if (!popup) {
    popup = document.createElement("div");
    popup.className = "joke-popup";
    popup.innerHTML = `
      <div class="joke-content">
        <span class="material-symbols-rounded close-icon">close</span>
        <p class="joke-text">Loading joke...</p>
      </div>`;
    document.body.appendChild(popup);

    popup.querySelector(".close-icon").addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  popup.style.display = "flex";
  const jokeText = popup.querySelector(".joke-text");
  jokeText.textContent = "Loading joke...";

  try {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart", {
      headers: { Accept: "application/json" }
    });
    const data = await res.json();

    if (data.setup && data.delivery) {
      // ✅ Properly show two-part joke
      jokeText.innerHTML = `😂 Joke: <b>${data.setup}</b><br>${data.delivery}`;
    } else if (data.joke) {
      jokeText.innerHTML = `😂 Joke: ${data.joke}`;
    } else {
      jokeText.innerHTML = `😅 Joke: Oops! No joke found.`;
    }
  } catch (error) {
    jokeText.textContent = "Failed to fetch a joke. Please try again!";
    console.error("Joke API error:", error);
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
