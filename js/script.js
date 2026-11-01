console.log("script.js connected!");
let userAnswers = {};
let buttons = document.querySelectorAll("#question-1 button");
buttons.forEach(function(button){
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        })
        button.classList.add("selected");

        let buttonid = "1"
        let answer = button.getAttribute("data-answer");
        userAnswers[buttonid] = answer;
    })
})
let buttons2 = document.querySelectorAll("#question-2 button");
buttons2.forEach(function(button){
    button.addEventListener("click", function() {
        buttons2.forEach(function(btn) {
            btn.classList.remove("selected");
        })
        button.classList.add("selected");

        let buttonid = "2"
        let answer = button.getAttribute("data-answer");
        userAnswers[buttonid] = answer;
    })
})
let buttons3 = document.querySelectorAll("#question-3 button");
buttons3.forEach(function(button){
    button.addEventListener("click", function() {
        buttons3.forEach(function(btn) {
            btn.classList.remove("selected");
        })
        button.classList.add("selected");

        let buttonid = "3"
        let answer = button.getAttribute("data-answer");
        userAnswers[buttonid] = answer;
    })
})

let results = document.querySelectorAll("#show-result");
results.forEach(function(button){
    button.addEventListener("click", function() {
        let container = document.getElementById("result-container")
        container.style.display = 'flex';
        let output = document.getElementById("result-text");
        // + symbol turns dict value into an integer so it can be properly summed
        let sum = +userAnswers[1] + +userAnswers[2] + +userAnswers[3];
        console.log(userAnswers);
        console.log(sum);
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
    })
})