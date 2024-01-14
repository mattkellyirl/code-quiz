// Variable Declarations
var questions = [
    {
        title: "Commonly used data types do not include:",
        choices: ["Strings", "Alerts", "Booleans", "Numbers"],
        answer: "Alerts" 

    },
    {
        title: "The condition in an if/else statement is enclosed within:",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses"
        
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above" 

    },
    {
        title: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        answer: "Quotes" 

    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Command Prompt", "For Loops", "The console.log method"],
        answer: "The console.log method" 

    }
];

// Start timer on page load
var seconds = 60;
var totalScore = 0;
var currentIndex = 0;

function startTimer() {
    var timerInterval = setInterval(function () {
        document.getElementById('timer').innerHTML = seconds + ' seconds remaining';
        seconds--;

        // Check if the timer has reached 0, if it has then clear interval and redirect to highscores
        if (seconds < 0) {
            clearInterval(timerInterval);
            redirectToHighscores();
        }
    }, 1000);
};

function askQuestion() {
    var questionContainer = document.getElementById("question-container");
    var questionTitle = questions[currentIndex].title;
    questionContainer.textContent = questionTitle;
    var choices = questions[currentIndex].choices;
    document.getElementById("choice-1").innerHTML = choices[0];
    document.getElementById("choice-2").innerHTML = choices[1];
    document.getElementById("choice-3").innerHTML = choices[2];
    document.getElementById("choice-4").innerHTML = choices[3];
};

function choiceButtonClick(btn) {
    var userInput = btn.innerHTML;
    if(userInput == questions[currentIndex].answer) {
        totalScore++;
        console.log("Correct");
    } 
    else if(userInput !== questions[currentIndex].answer) {
        seconds -= 10;
        console.log("Incorrect");
    }

    // Check if all questions are complete or timer runs out and redirect to highscores
    if(currentIndex == questions.length - 1) {
        redirectToHighscores();
    }

    // Ask the next question only if the quiz is not completed
    currentIndex++;
    calculateScore();
    askQuestion();
};

function calculateScore() {
    localStorage.setItem("userScore", totalScore);
};

// Retrieve user score from local storage and display
if(document.getElementById("highscores")) {
    var userScore = localStorage.getItem('userScore');

    if(userScore) {
        document.getElementById("result").textContent = userScore + "/5";
    };
};

function redirectToHighscores() {
    calculateScore();
    window.location.href = "highscores.html";
};

if(document.getElementById("quiz")) {
    startTimer();
    askQuestion();
};