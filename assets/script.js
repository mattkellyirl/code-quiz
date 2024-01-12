// Variable Declarations

var quizQuestions = [
    {
        title: "Commonly used data types do not include:",
        choices: ["1. strings", "2. alerts", "3. booleans", "4. numbers"],
        answer: "2. alerts" 

    },
    {
        title: "The condition in an if /else statement is enclosed within:",
        choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "3. parentheses"
        
    },
    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above",],
        answer: "4. all of the above" 

    },
    {
        title: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "3. quotes" 

    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [ "1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log",],
        answer: "4. console.log" 

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

// Application 

startTimer();

