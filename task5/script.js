let radius= document.getElementById("radius");
let peri= document.getElementById("peri");
let operi= document.getElementById("operi");
let oarea= document.getElementById("oarea");

function circle(){

  let peri= parseFloat(radius.value)*2*22/7;
  operi.innerText=peri.toFixed(2);
  let area= parseFloat(radius.value)*parseFloat(radius.value)*22/7;
  oarea.innerText=area.toFixed(2);
  console.log("Perimeter of Circle is : "+peri);
  console.log("Area of Circle is : "+area);
}
