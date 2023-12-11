const questions = [
  {
      question: "Which of the following are fruits?",
      answers: [
          { text: "Apple", isCorrect: true },
          { text: "Tomato", isCorrect: false },
          { text: "Banana", isCorrect: true },
          { text: "Onion", isCorrect: false },
      ]
  },
  // Add more questions here
];

const quizContainer = document.getElementById("quiz-container");

function generateQuestion(question) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `<h2>${question.question}</h2>`;

  const answerList = document.createElement("ul");

  for (const answer of question.answers) {
      const answerElement = document.createElement("li");
      answerElement.classList.add("answer-option");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `answer-${answer.text}`;
      answerElement.appendChild(checkbox);

      const label = document.createElement("label");
      label.htmlFor = checkbox.id;
      label.textContent = answer.text;
      answerElement.appendChild(label);

      answerList.appendChild(answerElement);
  }

  questionElement.appendChild(answerList);
  quizContainer.appendChild(questionElement);
}

// Generate questions
questions.forEach(generateQuestion);

const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", function () {
  // Check for correct answers
  let score = 0;
  for (const question of questions) {
      const correctAnswers = question.answers.filter(answer => answer.isCorrect);
      const selectedAnswers = document.querySelectorAll(`input[type="checkbox"]:checked`);

      let correct = true;
      for (const answer of correctAnswers) {
          const checkbox = document.getElementById(`answer-${answer.text}`);
          if (!checkbox.checked) {
              correct = false;
              break;
          }
      }

      if (correct) {
          score++;
      }
  }

  // Display score
  alert(`You scored ${score} out of ${questions.length}`);
});
