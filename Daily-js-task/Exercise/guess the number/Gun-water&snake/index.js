let u = prompt("S for Snake, W for Water, G for Gun");
let c = ["S", "W", "G"][Math.floor(Math.random() * 3)];

let r;

if (u === c) {
  r = "Draw!";
} else if (
  (u === "S" && c === "W") ||
  (u === "W" && c === "G") ||
  (u === "G" && c === "S")
) {
  r = "You Win!";
} else {
  r = "You Lose!";
}

alert(r + " Computer chose " + c);
