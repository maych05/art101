//user types something in text box
//on click event listener
$("#action").click(
  function(){
//what will happen when the button is clicked
    console.log("button is clicked");
//make the button copy the text 
//find the box and its contents
//usertext=$("#userinput").val("hello");
//copy the contents
    let usertext=$("#userinput").val("hello");
    $("#convo").append(usertext+"<br>");
    console.log($("#userinput").val("hello"));
//copy to div convo
  }
)

/*
  lab.js - This simeple JavaScript/jQuery script appends new elements to an outpit div
  requirements: jQuery must be loaded for this script to work.
  
  Author: May Cho
  Date: May 14, 2025
*/


function generateRandomText(){
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min= 3;
  const max= 100;
  const randLen= Math.floor(Math.random()*(max-min+1))+min;
  //get random starting index slice to Loren Ipsum text const randStart = Math.floor(Math.random()*(text.length-randLen+1));
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
});

// get new fake dialogue
const newText = generateRandomText();

// append a new div to our output div
$("#output").append('<div class="text"><p>' + newText + '</p></div>');