document.addEventListener("DOMContentLoaded", () => {
  const stats = JSON.parse(localStorage.getItem("quizStats"));

  if (!stats) {
    document.querySelector(".stats-container").innerHTML = "<p>No quiz stats available.</p>";
    return;
  }

  // Fill summary fields
  document.getElementById("stat-username").textContent = stats.username;
  document.getElementById("stat-category").textContent = stats.category;
  document.getElementById("stat-subcategory").textContent = stats.subcategory;
  document.getElementById("stat-total").textContent = stats.numberOfQuestions;
  document.getElementById("stat-attempted").textContent = stats.questionsAttempted;
  document.getElementById("stat-correct").textContent = stats.correctAnswers;

  // Populate table
  const tbody = document.getElementById("stats-table-body");
  stats.answersLog.forEach((log, index) => {
    const tr = document.createElement("tr");

    const status = log.wasCorrect
      ? '<span style="color: green;">Correct</span>'
      : '<span style="color: red;">Wrong</span>';

    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${log.question}</td>
      <td>${log.selected}</td>
      <td>${log.correctAnswer}</td>
      <td>${status}</td>
    `;

    tbody.appendChild(tr);
  });
});
