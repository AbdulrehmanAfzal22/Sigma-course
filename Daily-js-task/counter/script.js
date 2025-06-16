let count = 0;

document.getElementById("increment").onclick = function() {
  count = count + 1;
  document.querySelector(".count").textContent = count;
};

document.getElementById("decrement").onclick = function() {
  count = count - 1;
  document.querySelector(".count").textContent = count;
};

document.getElementById("reset").onclick = function() {
  count = 0;
  document.querySelector(".count").textContent = count;
};