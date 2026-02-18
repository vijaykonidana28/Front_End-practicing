// Some tricky questions and solutions;
// calcultions possible with string because of the dynamic type behavior
// in javaScript like in python.
console.log(17 + "5"); // concatination 
console.log(17 + +"5");// escapes concatination cause used + before string
console.log(17 - "5");
console.log(17 * "5");
console.log(17 / "5");
console.log(17 % "5");
console.log(17 + +"5" + 4);
console.log("5" + 11);
console.log(17 + (+"5" + 2));