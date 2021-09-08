let celcius= document.getElementById("celcius");
let fahrenheit= document.getElementById("fahrenheit");

function ctof(){
  let output= ( parseFloat(celcius.value)*9/5 )+32;
  fahrenheit.value= parseFloat(output.toFixed(2));
  console.log(output);
}

function ftoc(){
  let output= ( parseFloat(fahrenheit.value)-32) /9*5;
  celcius.value= parseFloat(output.toFixed(2));
}