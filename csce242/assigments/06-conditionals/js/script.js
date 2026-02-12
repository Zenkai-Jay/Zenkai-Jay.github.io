document.getElementById("arrow-nav").onclick = (e) => {

    e.currentTarget.innerHTML = "&#9650;";
    document.getElementById("main-nav-items").classList.toggle("hide-small");
};

const slider = document.getElementById("minutes");
const output = document.getElementById("output");

slider.addEventListener("input", function(e) {
    output.textContent = slider.value + " minutes";
    const numEntered = parseInt(e.currentTarget.value);
    const p = document.getElementById("output");

     if(numEntered >=45) {
        p.innerHTML += " You've got some time. Make Breakfast and start your morning right!";
    } else if(numEntered >= 30) {
        p.innerHTML += " You've still got time but let's get there early for a parking spot!";
    } else if(numEntered >=15) {
        p.innerHTML += " You're running out of time!!";
    } else {
        p.innerHTML += " You're late!!! :(";
    }
});



const dateElement = document.getElementById("countdown");
const currentDate = new Date();

const classTime = new Date ();
classTime.setHours(8);
classTime.setMinutes(30);
classTime.setSeconds(0);

const diff = classTime - currentDate;   
const minutes = Math.floor(diff / 60000);  


