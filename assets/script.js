// Variable Declarations
var questions = [
    {
        title: "Commonly used data types do not include:",
        choices: ["Strings", "Alerts", "Booleans", "Numbers"],
        answer: "Alerts" 

    },
    {
        title: "The condition in an if /else statement is enclosed within:",
        choices: ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"],
        answer: "Parentheses"
        
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above",],
        answer: "All of the above" 

    },
    {
        title: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        answer: "Quotes" 

    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "Terminal/Command Prompt", "For Loops", "console.log",],
        answer: "Console.log" 

    }
];

// Function Declarations
function startTimer() {
    var seconds = 60;

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

// Ask Question
var currentIndex = 0;
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

// Collect User Input
var choicesContainer = document.getElementById("choices-container");
choicesContainer.addEventListener("click", function(event) {
    var userInput = event.target.innerHTML;
    if(userInput == questions[currentIndex].answer) {
        currentIndex++;
        askQuestions();
    }
});

// Application 
startTimer();
askQuestions();
