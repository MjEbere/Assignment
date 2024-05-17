function checkAge() {
let age = parseInt(document.getElementById("ageInput").value)
let showResult = document.getElementById("result")

if (age < 18) {
    showResult.textContent = "Sorry, you are not eligible!"
} else if (age > 50) {
    showResult.textContent = "Damn! you are too old"
} else if (age = blank) {
    showResult.textContent = "Ooops! Wrong input"
} else {
    showResult.textContent = "Welcome! You have been granted full access"
}
}

let initialCounter = 0;

function increment() {
    // initialCounter++ 
    // (default for increment by 1)
    initialCounter+=5
    updateCounter()
}

function decrement() {
    // initialCounter--
    // (default for decrement by 1)
    initialCounter-=3
    updateCounter()
}

function updateCounter() {
    document.getElementById("counter").innerHTML = initialCounter
}

function registerNameAndTrack() {
let name = document.getElementById("nameInput").value;
let track = document.getElementById("trackInput").value;
let showResult = "Hey, my name is "+ name +" and I am studying " + track;document.getElementById("theResult").innerHTML = showResult
}
