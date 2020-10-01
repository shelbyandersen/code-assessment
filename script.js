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
var endScreenEl = document.getElementById("end-screen");
var highScores = document.getElementById("scores");
var storeInitials = document.getElementById("initials");
var submitBtn = document.getElementById("submit");
var timerInterval;

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
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// end Quiz fn

//getQuestion fn
function getQuestion() {
  var currentQuestion = questions[questionIndex];
  var titleEl = document.getElementById("title");
  titleEl.textContent = currentQuestion.title;
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
    endQuiz();
  } else {
    getQuestion();
  }
}

//End game
function endQuiz() {
  clearInterval(timerInterval);
  var titleEl = document.getElementById("title");
  titleEl.textContent = "All Done!";
  choicesEl.textContent = "Your final score is " + secondsLeft;
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.classList.remove("hide");
  console.log("Seconds Left: ", secondsLeft);
}

//Save score
function saveHighscore() {
  var initials = storeInitials.value.trim();
  if (initials !== "") {
    //Get scores from local storage
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    //Users score
    var newScore = {
      score: secondsLeft,
      initials: initials,
    };

    //Save score to local storage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    //Go to high scores page
    window.location.href = "highscores.html";
  }
}
// Save score fn
function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

//Submit score
submitBtn.onclick = saveHighscore;

//Start quiz
startBtnEl.onclick = startQuiz;
