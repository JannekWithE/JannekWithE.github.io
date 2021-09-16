function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(200);
  
  push();
  circle(200,180,40) 
  stroke(100,0,0)
  fill(100,0,0)
  circle(210,180,4)
  circle(190,180,4)
  pop();
  
  push();
  strokeWeight(3)
  line(200,190,190,190)
  pop();
  
  line(200, 200, 200, 280);
  line(200,280,150,340)
  line(200,280,250,340)
  line(200,230, 230, 240)
  line(200,230, 170, 240)
  noLoop();

}
