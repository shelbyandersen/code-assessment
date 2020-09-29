//console.log("Hello World");

//1. DOM Element Variables
//2. JS Variables
//3. Function Calls

// list of all questions, choices, and answers
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

//answer choices

//define global vars
var startBtnEl = document.getElementById("startBtn");
var quizStartEl = document.getElementById("quiz-start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var scores = [];
var secondsLeft = 75;

//start quiz fn
function startQuiz() {
  quizStartEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  setTime();
}

//start timer fn
function setTime() {
  timerEl.addEventListener("click", function () {
    setTime();
  });
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
  console.log("Timer: ", setTime);
}

// end Quiz fn

//getQuestion fn

//validate answer

// save score

startBtnEl.onclick = startQuiz;
