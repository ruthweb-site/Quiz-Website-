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

let quizMainCategory = localStorage.getItem("selectedCategory")?.toLowerCase() || "programming";
let quizSubCategory = "";

// Set and lock active category
document.querySelectorAll(".category-option").forEach(btn => {
  const category = btn.dataset.category.toLowerCase();
  if (category === quizMainCategory) {
    btn.classList.add("active");
  } else {
    btn.style.display = "none"; // Hide irrelevant categories
  }
});

// Generate subcategory buttons
function generateSubcategoryOptions(mainCategory) {
  subcategoryOptionsContainer.innerHTML = "";

  console.log("quizMainCategory:", mainCategory);
  console.log("questions[quizMainCategory]:", questions[mainCategory]);

  const subcategories = Object.keys(questions[mainCategory] || {});
  
  if (subcategories.length === 0) {
    subcategoryOptionsContainer.innerHTML = `<p style="color: red">⚠ No subcategories found for "${mainCategory}"</p>`;
    return;
  }

  subcategories.forEach((subcat, index) => {
    const btn = document.createElement("button");
    btn.className = "subcategory-option";
    btn.textContent = subcat;

    if (index === 0) {
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
generateSubcategoryOptions(quizMainCategory);

function resetTimer() {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
}

function startTimer() {
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

  if (questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
    return showQuizResult();
  }

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

  const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
  correctOption.insertAdjacentHTML("beforeend", iconHTML);
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
}

function renderQuestion() {
  currentQuestion = getRandomQuestion();
  if (!currentQuestion) return;

  resetTimer();
  startTimer();

  answerOptions.innerHTML = "";
  nextQuestionBtn.style.visibility = "hidden";
  document.querySelector(".quiz-timer").style.background = "#32313C";
  document.querySelector(".quiz-question").textContent = currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

  currentQuestion.options.forEach((optionText, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = optionText;
    li.addEventListener("click", () => handleAnswer(li, index));
    answerOptions.appendChild(li);
  });
}

function startQuiz() {
  configContainer.style.display = "none";
  quizContainer.style.display = "block";

  // Do NOT reset quizMainCategory
  quizSubCategory = configContainer.querySelector(".subcategory-option.active").textContent;
  numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);


  renderQuestion();
}

function resetQuiz() {
  resetTimer();
  correctAnswerCount = 0;
  questionsIndexHistory = [];
  configContainer.style.display = "block";
  resultContainer.style.display = "none";
}

function showQuizResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  const resultText = `You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly.`;
  document.querySelector(".result-message").innerHTML = resultText;

  if (correctAnswerCount < numberOfQuestions / 2) {
    showJokePopup();
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
      </div>
    `;
    document.body.appendChild(popup);

    popup.querySelector(".close-icon").addEventListener("click", () => {
      popup.style.display = "none";
    });
  }

  popup.style.display = "flex";
  popup.querySelector(".joke-text").textContent = "Loading joke...";

  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    popup.querySelector(".joke-text").textContent = data.joke || "Oops! No joke found.";
  } catch (error) {
    popup.querySelector(".joke-text").textContent = "Failed to fetch a joke. Please try again!";
    console.error("Joke API error:", error);
  }
}

document.querySelectorAll(".question-option").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".question-option").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    numberOfQuestions = parseInt(btn.textContent);  // update the global variable
  });
});

document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
nextQuestionBtn.addEventListener("click", renderQuestion);
