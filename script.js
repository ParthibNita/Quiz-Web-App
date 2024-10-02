import questions from "./questions.js";

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-btn");
const scoreCircle = document.getElementById("score-circle");
const timerContainer = document.getElementById("timer-container");

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions;
let timeInterval;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//timer for each question
function startTimer() {
  let time = 10;
  const timerElement = document.getElementById("timer");
  timerElement.innerText = `00:${time}`;

  clearInterval(timeInterval);

  timeInterval = setInterval(() => {
    time--;
    timerElement.innerText = `00:${time < 10 ? `0${time}` : time}`;
    if (time <= 0) {
      clearInterval(timeInterval);
      goToNextQuestion();
    }
  }, 1000);
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  //shuffling the questions
  shuffledQuestions = shuffleArray(questions);

  questionElement.innerHTML = "Ready to play? Click on Start";
  questionElement.style.textAlign = "center";
}

function showQuestion() {
  resetState();
  startTimer();

  let currentQuestion = shuffledQuestions[currentQuestionIndex];

  questionElement.innerHTML = `${++currentQuestionIndex}. ${
    currentQuestion.question
  }`;

  //shuffling the choices
  const randomChoices = shuffleArray(currentQuestion.choices);
  //currentQuestion.choices.sort(() => Math.random() - 0.5);

  //show the choices
  randomChoices.forEach((eachAns) => {
    const button = document.createElement("button");
    button.innerText = eachAns.text;
    button.classList.add("btn");

    if (eachAns.correct) {
      button.dataset.correct = eachAns.correct;
    }

    button.addEventListener("click", checkAnswer);
    answerButton.appendChild(button);
  });
}

function goToNextQuestion() {
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
    console.log("Your score is " + score);
  }
}

//evaluate the answer
function checkAnswer(e) {
  clearInterval(timeInterval); //stop timer once answered

  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.style.backgroundColor = "#7ae582";
    score++;
  } else {
    selectedButton.style.backgroundColor = "#ef233c";
    selectedButton.style.color = "#fff";
  }

  Array.from(answerButton.children).forEach((eachbtn) => {
    if (eachbtn.dataset.correct === "true") {
      eachbtn.style.backgroundColor = "#7ae582";
    }

    //disable all the other buttons
    eachbtn.disabled = true;
    eachbtn.style.cursor = "not-allowed";
  });

  nextButton.style.display = "block";
}

//show score
function showScore() {
  resetState();
  timerContainer.style.display = "none";

  let scorePercentage = Math.round((score / questions.length) * 100);

  const scoreText = document.getElementById("score-text");
  scoreText.innerHTML = `${scorePercentage}%`;

  scoreCircle.classList.remove("hidden");
  scoreCircle.style.background = `conic-gradient(green ${scorePercentage}%, lightgray ${scorePercentage}%)`;

  startButton.innerHTML = "Play Again";
  startButton.style.display = "block";
  questionElement.innerHTML = `Your score is ${score} out of ${questions.length}`;
  questionElement.style.textAlign = "center";
}

function resetState() {
  nextButton.style.display = "none";
  questionElement.style.textAlign = "left";
  answerButton.innerHTML = "";
}

//dark-mode
const darkToggle = document.getElementById("dark-toggle-btn");
const moon = document.getElementById("moon-icon");
const sun = document.getElementById("sun-icon");
const app = document.getElementById("main");
let darkModeCheck = false;

function toggleDarkMode() {
  darkModeCheck = !darkModeCheck;
  // console.log(darkModeCheck);
  updateTheme();
}

function updateTheme() {
  if (darkModeCheck) {
    app.classList.add("dark-mode");
    moon.style.display = "none";
    sun.style.display = "block";
  } else {
    app.classList.remove("dark-mode");
    moon.style.display = "block";
    sun.style.display = "none";
  }
}
darkToggle.addEventListener("click", toggleDarkMode);

startButton.addEventListener("click", () => {
  scoreCircle.classList.add("hidden");
  startQuiz();

  startButton.style.display = "none";
  timerContainer.style.display = "block";
  showQuestion();
});

nextButton.addEventListener("click", goToNextQuestion);

startQuiz();
