let dia = 50
const mid = 200


function setup() {
  fill(52, 219, 235)
  createCanvas(400, 400);
}


function draw() {
  background(220);
  
  let xMus=mouseX
  let yMus=mouseY
  
  circle(xMus,yMus,dia);

  if (xMus<mid && yMus<mid || xMus>mid && yMus>mid) 
  {fill("red")}
    else {fill("white");
  }

   
}