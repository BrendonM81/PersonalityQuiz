console.log("script.js connected!");
// Creates object that stores the user's answers
let userAnswers = {};

// Selects all questions
let questions = document.querySelectorAll(".question-block");
questions.forEach(function(question){
    // Selects all buttons in those questions
    let buttons = question.querySelectorAll(".answer-btn")

    // Adds listener for each button that removes 'selected' class from each button and adds 'selected' class to the button that was clicked
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });
            button.classList.add("selected");

            let questionid = question.dataset.question;
            let answer = button.dataset.answer;
            // Point system for different answers
            if (answer === "A") {
                answer = 5;
            } else if (answer === "B") {
                answer = 27;
            } else if (answer === "C") {
                answer = 53;
            } else if (answer === "D") {
                answer = 121;
            }
            // Documents the user's answer by question id and answer value
            userAnswers[questionid] = answer;
        })
    })
})

// Function that displays the user's result which is based on the sum of their answer values
function displayResult() {
    // Sums the user's answer values
    let sum = userAnswers[1] + userAnswers[2] + userAnswers[3];
    let output = document.getElementById("result-text");

    // If else statement deciding the result based on the user's recorded answers
    if (sum === 15 || sum === 37 || sum === 63 || sum === 131) {
        output.textContent = `You are Peter Parker!`;
    } else if (sum === 59 || sum === 81 || sum === 107 || sum === 175) {
        output.textContent = `You are Miles Morales!`;
    } else if (sum === 111 || sum === 133 || sum === 159 || sum === 227) {
        output.textContent = `You are Gwen Stacy!`;
    } else if (sum === 247 || sum === 269 || sum === 295 || sum === 363) {
        output.textContent = `You are Aaron Davis!`;
    } else {
        output.textContent = `You are Hobie Brown!`
    }
    // Displays the hidden result container
    let container = document.getElementById("result-container")
    container.style.display = 'flex';
}

// Displays result when "Show Results" button is clicked
let results = document.getElementById("show-result");
results.addEventListener("click", function() {
        displayResult();
})