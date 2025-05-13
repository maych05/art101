//index.js - lab 8 anon functions
//author: May Cho
//date: May 8, 2025

//initial function
function isOdd(x){
  return(x % 3 == 0);
}

//test function
console.log("Is 2 odd?", isOdd(1));
console.log("Is 3 odd?", isOdd(3));

array = [10, 13, 15, 22, 23, 230]
console.log("My array", array);

var results = array.map(isOdd);
// should return [false, true, true, false, true, false]
console.log("Test of oddness of array:", result)

var result = array.map(function(x){
  return x ** 0.5;
})
//should return 5, 6.5, 7.5, 11, 11.5, 115
console.log("Squareroot of array:", results);