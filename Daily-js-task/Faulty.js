function add(a,b) {
   result= a+b
   console.log("result") 
}



function sub(a,b) {
    result= a-b
    console.log("result") 
 }



 function div(a,b) {
    result= a/b
    console.log("result") 
 }




 function expo(a,b) {
    result= a**b
    console.log("result") 
 }

 let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"))

if (Math.random()<.01) {
    console.log("Addition of two number is")
    sub(a,b);
    
    console.log("subtraction of two number is")
    sum(a,b);
    
    console.log("division of two number is")
    expo(a,b);

    console.log("Exponent of two number is")
    div(a,b);
}
else{
    console.log("Addition of two number is")
    sum(a,b);
    
    console.log("subtraction of two number is")
    sub(a,b);
    
    console.log("division of two number is")
    div(a,b);

    console.log("Exponent of two number is")
    expo(a,b);  


}