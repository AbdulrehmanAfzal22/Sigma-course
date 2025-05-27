let r = Math.floor(Math.random() * 100) + 1;
console.log(r);
for (let i = 1; i < 100; i++) {
   let userinput = prompt(`Enter a number between 1 to 100`) 
   userinput=Number(userinput)
  if (r === userinput) {
    alert(`You guess the number in ${i} tries`)
 break; }

  else if(r<userinput){
    alert(`Too high, try agian`)
  }
  else if(r>userinput){
    alert(`Too low, try agian`)
  }
  else{alert(`Please enter a valid number `)}
}