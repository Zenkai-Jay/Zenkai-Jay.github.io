const dateElement = document.getElementById("countdown");
const currentDate = new Date();

const classTime = new Date ();
classTime.setHours(8);
classTime.setMinutes(30);
classTime.setSeconds(0);

const diff = classTime - currentDate;   
const minutes = Math.floor(diff / 60000);  

if (minutes > 15) {
    dateElement.textContent = `You have ${minutes} minutes until class. Relax!`;
}
else if (minutes >= 10) {
    dateElement.textContent = `${minutes} minutes left. Start getting ready.`;
}
else if (minutes >= 5) {
    dateElement.textContent = `Only ${minutes} minutes left — move!`;
}
else if (minutes >= 0) {
    dateElement.textContent = `${minutes} minutes left. RUN!`;
}
else if (minutes >= -5) {
    dateElement.textContent = `Class started ${Math.abs(minutes)} minutes ago — hurry in.`;
}
else if (minutes >= -15) {
    dateElement.textContent = `Class started ${Math.abs(minutes)} minutes ago — you're late.`;
}
else {
    dateElement.textContent = `Class started more than 15 minutes ago. You missed it.`;
}