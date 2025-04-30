// index.js - Lab 6: Arrays and Objects
// Author: May Cho
// Date: 4/28/25

// Define Variables
myTransport = ["Honda Civic" , "bike" , "rides from friends" , "Uber"];

// create an object for my main ride
myMainRide = {
    make: "Honda",
    model: "Civic",
    color: "Red",
    year: 2000,
    age: function() {
      return 2025 - this.year;
    } 
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>" ,
  JSON.stringify(myMainRide, null, '\t') , "</pre>") ;

//Section Time

window.prompt("Please say something");

let textPiece="let's do something";

function theElephant (someFood){

  let userSortedText=userText.split("").sort().join("");

  return userSortedText;

}

let userText=window.prompt ("let's do something");

let finalText = theElephant(userText);

document.writeIn(finalText); 