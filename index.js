let hScore = 0;
let gScore = 0;

document.getElementById("home-score").textContent = hScore;
document.getElementById("guest-score").textContent = gScore;

homeScore = document.getElementById("home-score");
guestScore = document.getElementById("guest-score");

function addHomeScore(newPoint) {
    hScore += newPoint;
    homeScore.textContent = hScore;
}

function addGuestScore(newPoint) {
    gScore += newPoint;
    guestScore.textContent = gScore;
}

function reset(side) {
    if(side == 'home') {
        hScore = 0;
        homeScore.textContent = hScore;
    } else if(side == 'guest') {
        gScore = 0;
        guestScore.textContent = gScore;
    }
}