const dateInput = document.getElementById("dateInput");
const dateOutput = document.getElementById("dateOutput");

dateInput.addEventListener("change", function () {
        dateOutput.textContent = "You picked the date: " + dateInput.value;
    });


const geometryCard = document.getElementById("geometryCard");
const triangle = geometryCard.querySelector(".triangle");

geometryCard.addEventListener("click", function () {
        triangle.classList.toggle("hidden");
    });


const sunImage = document.getElementById("sunImage");

    sunImage.addEventListener("click", function () {
        sunImage.classList.toggle("framed");
    });