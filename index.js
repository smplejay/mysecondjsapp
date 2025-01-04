let hScore = 0;
let gScore = 0;

document.getElementById("home-score").textContent = hScore;
document.getElementById("guest-score").textContent = gScore;

homeScore = document.getElementById("home-score");
guestScore = document.getElementById("guest-score");

// Home Buttons
function add1hScore() {
    hScore += 1;
    homeScore.textContent = hScore;
}

function add2hScore() {
    hScore += 2;
    homeScore.textContent = hScore;
}

function add3hScore() {
    hScore += 3;
    homeScore.textContent = hScore;
}

// Guest Buttons
function add1gScore() {
    gScore += 1;
    guestScore.textContent = gScore;
}

function add2gScore() {
    gScore += 2;
    guestScore.textContent = gScore;
}

function add3gScore() {
    gScore += 3;
    guestScore.textContent = gScore;
}

function hReset() {
    homeScore.textContent = 0;
    hScore = 0;
}

function gReset() {
    guestScore.textContent = 0;
    gScore = 0;
}