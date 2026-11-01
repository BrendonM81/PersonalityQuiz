console.log("script.js connected!");
let buttons = document.querySelectorAll("#question-1 button");
buttons.forEach(function(button){
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        })
        button.classList.add("selected");
    })
})
let buttons2 = document.querySelectorAll("#question-2 button");
buttons2.forEach(function(button){
    button.addEventListener("click", function() {
        buttons2.forEach(function(btn) {
            btn.classList.remove("selected");
        })
        button.classList.add("selected");
    })
})
let buttons3 = document.querySelectorAll("#question-3 button");
buttons3.forEach(function(button){
    button.addEventListener("click", function() {
        buttons3.forEach(function(btn) {
            btn.classList.remove("selected");
        })
        button.classList.add("selected");
    })
})