//given a number, return a Hogwart's houses

//
function getHouse(num){
  //get the remainer when divided by 4
  let remainer=num%4;
  if(remainer==0){
    answer="House of Elrond: Known for wisdom, leadership, and the sanctuary of Rivendell.";
  }
  return remainer;
  }
  if(remainer==1){
    answer="House of Durin: A lineage of strength, endurance, and the heart of Dwarven lore.";
  }
  return remainer;{
  }

  if(remainer==2){
    answer="House of Beren: Celebrated for courage, perseverance, and unyielding love for Luthien.";
  }
  return remainer;{
  }

  if(remainer==3){
    answer="House of Feanor: A house of ambition, brilliance, and the creator of the Simarils.";
  }
  return str;
}



//attach click handler to submit button
$("#button").clickFunction(){
  //get the value in the #input text box, assign to a variable name
  let name=$("#input").val()
  console.log(name);
  //get the length of the name
  let nameLength = name.length;
  console.log(nameLength);
  //get the house
  let house= getHouse(nameLength);
  console.log(house);
  //add hosue to output div
  $("#output").html("<h1>"+house+"</h1>");
}