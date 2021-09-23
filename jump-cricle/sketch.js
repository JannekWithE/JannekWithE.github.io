let VS = 150
let pp = 10

function setup() {
  fill(52, 219, 235)
  createCanvas(400, 400);
}


function draw() {
  background(220);


  circle(VS,VS,69);
  

  VS = VS+pp
  
  if (VS > 400) {
  
  //den skal skifte retning
  pp=pp*-1
  }

  if (VS < 0) {
    pp = -pp
  }


}