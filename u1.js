//window.alert("A surprise attack!");

//buttons showup setting
document.getElementById("buttons").addEventListener("click", function () {
    const section = document.getElementById("countdown");
    countdown.style.display = "block";
});

//audio setting
const audio = new Audio('viva.mp3');

document.getElementById("buttons").addEventListener("click", function () {
    audio.play();
});

//clock setting
setInterval("runClock()", 1000); //make the function a String to let the time runs automatically

function runClock() {
    var currentDay = new Date();
    var ourDay = new Date("Aug 28, 2025");

    var daysLeft = (ourDay - currentDay) / (1000 * 60 * 60 * 24);
    document.getElementById("dd").innerHTML = Math.floor(daysLeft);

    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    document.getElementById("hh").innerHTML = Math.floor(hrsLeft);

    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    document.getElementById("mm").innerHTML = Math.floor(minsLeft);

    var secLeft = (minsLeft - Math.floor(minsLeft)) * 60;
    document.getElementById("ss").innerHTML = Math.floor(secLeft);

}

