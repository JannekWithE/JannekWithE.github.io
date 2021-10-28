let ystart = 0
let xstart = 0
let yend = 0
let xend = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200);

  strokeWeight(3)
  stroke(mouseX, mouseY, 200)

  if (mouseIsPressed) {
    xend = mouseX
    yend = mouseY
  }

  line(xstart, ystart, xend, yend)
}

function mousePressed() {
  xstart = mouseX
  ystart = mouseY
}
