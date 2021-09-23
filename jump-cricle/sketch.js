let XD = 69
let VS = 150
let VA = 150
let pp = 400

function setup() {
  fill(52, 219, 235)
  createCanvas(400, 400);
}


function draw() {
  background(220);


  circle(VS,200,XD);
  

  VS = VS+1
  
  if (VS==pp) {VS=-VS}




}