// Variable Declarations
var questions = [
    {
        title: "Q1. Commonly used data types do not include:",
        choices: ["Strings", "Alerts", "Booleans", "Numbers"],
        answer: "Alerts" 

    },
    {
        title: "Q2. The condition in an if /else statement is enclosed within:",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses"
        
    },
    {
        title: "Q3. Arrays in JavaScript can be used to store:",
        choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above" 

    },
    {
        title: "Q4. String values must be enclosed within _______ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        answer: "Quotes" 

    },
    {
        title: "Q5. A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Command Prompt", "For Loops", "The console.log method"],
        answer: "The console.log method" 

    }
];

// Start timer on page load
var seconds = 60;
function startTimer() {
    var timerInterval = setInterval(function () {
        document.getElementById('timer').innerHTML = seconds + ' seconds remaining';

        if (seconds <= 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').innerHTML = 'Time is up!';
        } else {
            seconds--;
        }
    }, 1000);
};

// Ask question
var currentIndex = 0;
console.log("Current Index is: " + currentIndex);
var questionContainer = document.getElementById("question-container");
function askQuestions() {
    var questionTitle = questions[currentIndex].title;
    questionContainer.textContent = questionTitle;
    var choices = questions[currentIndex].choices;
    document.getElementById("choice-1").innerHTML = choices[0];
    document.getElementById("choice-2").innerHTML = choices[1];
    document.getElementById("choice-3").innerHTML = choices[2];
    document.getElementById("choice-4").innerHTML = choices[3];
};

// Collect user input
var choicesContainer = document.getElementById("choices-container");
choicesContainer.addEventListener("click", function(event) {
    var userInput = event.target.innerHTML;
    if(userInput == questions[currentIndex].answer) {
        currentIndex++;
        console.log(currentIndex);
        console.log("Correct");
    } 

    else if(userInput!==questions[currentIndex].answer) {
         currentIndex++;
         seconds -= 10;
         console.log(currentIndex);
         console.log("Incorrect");
    }

    // Check for quiz completion and redirect to highscores
    if(currentIndex >= 5) {
    window.location.href = 'highscores.html';
    } else {
        // Ask the next question only if the quiz is not completed
        askQuestions();
    }
});

// Call functions for application
startTimer();
askQuestions();
