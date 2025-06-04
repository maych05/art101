//index.js - Lab 15
//Author: May Cho
//Date: 6/2/2025

const ajaxObj ={
  url: "http://www.yerkee.com/api/fortune",
  type: "GET",
  dataType: "json"
};

$("#activate").click(function(){
  console.log("Button is clicked");
  
  $.ajax(ajaxObj)
  .done(function(data){
    console.log("success!");
    console.log(data);

  let answer = data.answer;
  let imageURL = data.image;
  let imageHTML= "<img src='" + imageURL + "'>";
  $("#output").html("<h1>"+ answer +"</h1>");
  $("#output").append(imageHTML);
  })

  .fail(function(xhr, status, errorThrown){
      console.log(errorThrown + "Status:" + status);
  });
})