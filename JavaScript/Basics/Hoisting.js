/* 
Hoisting ?
    --> Hoisting is a core JavaScript mechanism where the interpreter 
    appears to move the declarations of functions, variables, classes,
    or imports to the top of their containing scope during the 
    compilation phase, before the code is executed. 
--> It is available only for the ES6 below versions.
--> It is a V8Chrome Engine mechanism. 
*/

let a=10;
console.log(a);
console.log(sum(13,45));
// Here the function is defined after calling the function.
function sum(a,b)
{
    return(a+b);
}
/*
// here is the example for the errors occured .
console.log(t); // Here it shows the reference error 
let t=15;

console.log(x); // Here it shows the undefined variable
var x=25;// because it is declared with var keyword.
*/