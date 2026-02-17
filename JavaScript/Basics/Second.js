// var is the global declaration of the variable.
// you can use it wherever you want to use.
var a=25;
const e=45; //  we can't change the const declared variable
console.log("A = "+a);
console.log("E = "+e);

a=15;
console.log(a);
{// a block
    let x=13; // block scope variable
    console.log("This A is in block : "+a);
    console.log("This E is in block : "+e);
    console.log("This X is in block : "+x);
}
{
    console.log("This E is in block : "+e);
    //console.log("This X is in block : "+x); // error occurs here, cause x isn't declared so we kept in comments.
}