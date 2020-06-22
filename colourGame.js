var colors = generateRandomColors(6);

//HTML elements
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

//Buttons: 
var resetButton = document.querySelector('#reset');
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

var hardMode = true;
var easyMode = false;

init();

function init() {
    updateSquares();
    addButtonEventListeners();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                colorDisplay.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again"
            }
        })
    }
}

function addButtonEventListeners() {
    easyButton.addEventListener("click", function () {
        easyMode = true
        hardmode = false;
        easyButton.classList.add("selected");
        hardButton.classList.remove("selected");
        colors = generateRandomColors(3);
        for (var i = 3; i < squares.length; i++) {
            squares[i].style.display = "none"
        }
        updateSquares();
    })

    hardButton.addEventListener("click", function () {
        hardMode = true;
        easyMode = false;
        easyButton.classList.remove("selected");
        hardButton.classList.add("selected");
        colors = generateRandomColors(6);
        for (var i = 3; i < squares.length; i++) {
            squares[i].style.display = "block"
        }
        updateSquares();
    })

    resetButton.addEventListener("click", function () {
        if (easyMode === true) {
            colors = generateRandomColors(3);
        } else {
            colors = generateRandomColors(6);
        }
        updateSquares();
        this.textContent = "New colors";
    })
}

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // Math.random() generates a number between 0-1, so to get a number between 0-6 we multiply by 6. We can add 1 if we want 1-6
    // Math.floor() removes everything after the decimal point
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num) {
    var randomColors = [];
    for (i = 0; i < num; i++) {
        randomColors.push("rgb(" + randomRGBVal() + ", " + randomRGBVal() + ", " + randomRGBVal() + ")");
    }
    return randomColors;
}

function randomRGBVal() {
    return Math.floor(Math.random() * 256);
}

function updateSquares() {
    checkDifficulty();
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    colorDisplay.style.backgroundColor = "steelblue";
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#steelblue";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}

function checkDifficulty() {
    if (easyMode === true) {
        easyButton.style.backgroundColor = "steelblue";
        easyButton.style.color = "white";
        hardButton.style.backgroundColor = "white";
        hardButton.style.color = "steelblue";
    } else {
        hardButton.style.backgroundColor = "steelblue";
        hardButton.style.color = "white";
        easyButton.style.backgroundColor = "white";
        easyButton.style.color = "steelblue";
    }
}
