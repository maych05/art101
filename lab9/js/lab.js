/*
  lab.js - This simple JS/jQuery script uses buttons to modify some elements on the page

  requirements: jQuery must be loaded for this script to work.
  author: May Cho
  date: May 11, 2025
*/ 

//add button to challenge section
$("#challenge").append("<buttonid='button-challenge'>Make Special</button>");

//add a click listener to the challenge button
$("#button-challenge").click(function(){
  //now add (or subtract) the "special" class to the section
  $("challenge").toggleClass("special");
});
