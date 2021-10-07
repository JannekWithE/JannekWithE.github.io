let dia = 50
const Mid = 200


function setup() {
  fill(52, 219, 235)
  createCanvas(400, 400);
}


function draw() {
  background(220);
  
  let xMus=mouseX
  let yMus=mouseY
  
  circle(xMus,yMus,dia);

  if (xMus<200 && yMus<200 || xMus>200 && yMus>200) 
  {fill("red")}
    else {fill("white");
  }

   
}