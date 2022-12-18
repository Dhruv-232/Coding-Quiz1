var startQuizButton = document.querySelector("#startQuiz")
var timeEl = document.querySelector("#time")
var startScreen = document.querySelector("#startScreen")
var quizScreen = document.querySelector("#quizScreen")
var questionText = document.querySelector("#questionText")
var seconds = 60
var questionIndex = 0

function nextQuestion() {
  //increment question index
  questionIndex++

  //if there is another question show it
  if (questionIndex < questionBank.length){
    showQuestion()
  }

  else {

  }
  //else end quiz
}

function showQuestion() {
  var currentQuestion = questionBank[questionIndex];
  questionText.innerHTML = currentQuestion.questionText;

  for(var i =0; i < currentQuestion.answers.length; i++){
    var id = `#answer${i}`
    document.querySelector(id).innerHTML =currentQuestion.answers[i]
  }
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      seconds--;
      timeEl.textContent = seconds + " seconds left till the quiz finishes";


  
      if(seconds === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }


  
    }, 1000);

  }

function startQuiz(){
  //hide startScreen
  startScreen.classList.add("hide")
  //show quizScreen
  quizScreen.classList.remove("hide")
  //startTimer
  setTime()
  showQuestion()
}

startQuizButton.addEventListener("click", startQuiz)


var questionBank = [
  {
    questionText: "Commonly used data types DO not include:",
    answers:["strings", "booleans", "alerts", "numbers"],
    correctIndex: 2
  },
  {
    questionText: "The condition in an if/else statement is enclosed with __________",
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctIndex: 2
  },
  {
    questionText: "Arrays in javascript can be used to store __________",
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctIndex: 3
  },
  {
    questionText: "String values must be stored within __________ when being assigned to variables",
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctIndex: 2
  },
  {
    questionText: "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: ["Javascript", "ternminal/bash", "for loops", "console.log"],
    correctIndex: 3
  }

]







