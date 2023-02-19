let homeCount = 0;
let guestCount = 0;
let totalHomeCount = document.getElementById('home');
let totalGuestCount = document.getElementById('guest');
let leadingteam = document.getElementById('leadingteam');


function plusOne() {
    homeCount += 1;
    totalHomeCount.innerHTML = homeCount;
}


function plusTwo() {
    homeCount += 2;
    totalHomeCount.innerHTML = homeCount;
}


function plusThree() {
    homeCount += 3;
    totalHomeCount.innerHTML = homeCount;
}

function gplusOne() {
    guestCount += 1;
    totalGuestCount.innerHTML = guestCount;
}


function gplusTwo() {
    guestCount += 2;
    totalGuestCount.innerHTML = guestCount;
}


function gplusThree() {
    guestCount += 3;
    totalGuestCount.innerHTML = guestCount;
}


function resetGame() {
    homeCount = 0;
    guestCount = 0;
    totalGuestCount.innerHTML = guestCount;
    totalHomeCount.innerHTML = homeCount;   
}