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
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var secondsLeft = 75;
var questionIndex = 0;
var score;

//start quiz fn
function startQuiz() {
  quizStartEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  setTime();
  getQuestion();
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
  //console.log("Timer: ", setTime);
}

// end Quiz fn

//getQuestion fn
function getQuestion() {
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("title");
  titleEl.textContent = currentQuestion.title;
  console.log("Question: ", currentQuestion);
  choicesEl.innerHTML = "";
  //Answer choices
  currentQuestion.choices.forEach((choice, i) => {
    var button = document.createElement("button");
    button.setAttribute("class", "choices");
    button.setAttribute("value", choice);
    button.textContent = i + 1 + ". " + choice;
    button.onclick = validateAnswer;
    choicesEl.appendChild(button);
  });
}

//validate answer
function validateAnswer() {
  feedbackEl.setAttribute("class", "feedback");
  var currentQuestion = questions[questionIndex];
  if (this.value !== currentQuestion.answer) {
    feedbackEl.textContent = "Wrong";
    //Penalize time for wrong answer
    secondsLeft -= 15;

    if (secondsLeft < 0) {
      secondsLeft = 0;
    }

    //Display new time
    timerEl.textContent = secondsLeft;
  } else {
    feedbackEl.textContent = "Right";
  }

  setTimeout(function () {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  questionIndex++;
  if (questionIndex === questions.length) {
    quit();
  } else {
    getQuestion();
  }
}

//Save score
function quit() {
  score = 0;
  var titleEl = document.getElementById("title");
  titleEl.textContent = "All Done!";
  choicesEl.textContent = "Your final score is " + secondsLeft;
}

//Start quiz
startBtnEl.onclick = startQuiz;
