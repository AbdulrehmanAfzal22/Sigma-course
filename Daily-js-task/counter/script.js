let total = 0;
let number = "";

const display = document.querySelector(".count");

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");

btn1.onclick = function () {
  number += "1";
  display.textContent = number;
};
btn2.onclick = function () {
  number += "2";
  display.textContent = number;
};
btn3.onclick = function () {
  number += "3";
  display.textContent = number;
};
btn4.onclick = function () {
  number += "4";
  display.textContent = number;
};
btn5.onclick = function () {
  number += "5";
  display.textContent = number;
};
btn6.onclick = function () {
  number += "6";
  display.textContent = number;
};
btn7.onclick = function () {
  number += "7";
  display.textContent = number;
};
btn8.onclick = function () {
  number += "8";
  display.textContent = number;
};
btn9.onclick = function () {
  number += "9";
  display.textContent = number;
};

const plusBtn = document.getElementById("increment");
plusBtn.onclick = function () {
  total += Number(number);
  number = "";
  display.textContent = total;
};

const minusBtn = document.getElementById("decrement");
minusBtn.onclick = function () {
  total -= Number(number);
  number = "";
  display.textContent = total;
};

const resetBtn = document.getElementById("reset");
resetBtn.onclick = function () {
  total = 0;
  number = "";
  display.textContent = "0";
};
