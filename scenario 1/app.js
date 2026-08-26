let score = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("incrementBtn");
const resetButton = document.getElementById("resetBtn");

incrementButton.addEventListener("click", function () {
score++;
countDisplay.innerHTML = score;
});

resetButton.addEventListener("click", function () {
score = 0;
countDisplay.innerHTML = score;
});
