//index.js - lab 7 functions
//author: May Cho
//date: May 4, 2025

//sortUserName
function sortUserName(){
  var userName = window.prompt("Hello, please enter your name.");
  console.log("User's name=" + userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort=", nameArraySort);
  //join the array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted=", nameSorted);
  return nameSorted;
}

//output
document.writeln("Hello: ",
  sortUserName(), "</br>");
