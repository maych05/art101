//index.js - Lab 15
//Author: May Cho
//Date: 6/2/2025

const ajaxObj = {
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
  type: "GET",
  dataType: "json"
};

$(document).ready(function() {
  console.log("Script is running!");

  $("#activate").click(function() {
    console.log("Button is clicked");

    $.ajax(ajaxObj)
      .done(function(data) {
        console.log("AJAX success!", data);

        // Logging data inside the callback
        console.log(data.name);              // "ditto"
        console.log(data.id);                // 132
        console.log(data.height);            // 3
        console.log(data.weight);            // 40
        console.log(data.base_experience);  // 101

        // List abilities
        data.abilities.forEach(a => console.log(a.ability.name));

        // List types
        data.types.forEach(t => console.log(t.type.name));

        // Show sprite URL
        console.log(data.sprites.front_default);

        // Update HTML output with Pokémon name and image
        let html = `<h1>${data.name}</h1>`;
        html += `<img src="${data.sprites.front_default}" alt="${data.name}">`;
        $("#output").html(html);
      })
      .fail(function(xhr, status, error) {
        console.error("AJAX error:", status, error);
      });
  });
});



