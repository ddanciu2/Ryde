/* Open when someone clicks on the span element */
function openMenu() {
    document.getElementById("hamburgerMenu").style.zIndex = 0;
    document.getElementById("HMLayout").style.width = "100%";
}
  
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeMenu() {
document.getElementById("hamburgerMenu").style.zIndex = 1;
document.getElementById("HMLayout").style.width = "0%";
}

function changeToDay(){
    var dayDisplay = document.getElementById("DayOverlay");
    var weekDisplay = document.getElementById("WeekOverlay")
    var monthDisplay = document.getElementById("MonthOverlay");

    dayDisplay.style.display = "block";
    weekDisplay.style.display = "none";
    monthDisplay.style.display = "none";
}

function changeToWeek(){
    var dayDisplay = document.getElementById("DayOverlay");
    var weekDisplay = document.getElementById("WeekOverlay")
    var monthDisplay = document.getElementById("MonthOverlay");

    dayDisplay.style.display = "none";
    weekDisplay.style.display = "block";
    monthDisplay.style.display = "none";
}

function changeToMonth(){
    var dayDisplay = document.getElementById("DayOverlay");
    var weekDisplay = document.getElementById("WeekOverlay")
    var monthDisplay = document.getElementById("MonthOverlay");

    dayDisplay.style.display = "none";
    weekDisplay.style.display = "none";
    monthDisplay.style.display = "block";
}