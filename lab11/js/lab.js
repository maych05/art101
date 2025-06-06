/*
  lab.js - This simple JS/jQuery script gets a value from an input field and outputs a modified version.
  Requirements: jQuery must be loaded for this script to work.
  
  Author: May Cho
  Date: May 17, 2025
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

$(document).ready(function(){
// click listener for button
  $("#submit").click(function(){
  // get value of input field
    const userName = $("#user-name").val();
  // now let's sort it
    const userNameSorted = sortString(userName);
  // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
  });
});

$("#submit").click(function() {
  console.log("Button clicked"); // This should appear in the console
});

