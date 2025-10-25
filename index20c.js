// alert("This is a test");
const btns = document.querySelectorAll(".square");
var randomSquare = Math.floor(Math.random() * btns.length);

function startGame() {
  btns.onclick = function randomChose() {
    btns[randomSquare].classList.add("active");
  document.querySelector("h1").textContent = "Game Started!";
}

document.addEventListener("onclick", function () {
  startGame();
});

}