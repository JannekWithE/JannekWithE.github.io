let xPos = 150
let xSpeed = 7
let ySpeed = 5
let yPos = 250


function setup() {
  fill(52, 219, 235)
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  
  let radius = 25
  let dia = radius * 2
  
  noStroke()
  fill(xPos, yPos, dia)
  circle(xPos,yPos,dia);
  yPos += ySpeed 
  xPos += xSpeed
  
  let HitsRight = xPos + radius > width 
  let Hitsleft = xPos - radius < 0  
  if (Hitsleft||HitsRight) {
    
    fill("red")
  //den skal skifte retning
  xSpeed= -xSpeed
  }

  let Hitsbottem = yPos + radius > height 
  let Hitsloft = yPos - radius < 0
  if (Hitsloft||Hitsbottem) {
    fill("blue")
    ySpeed = -ySpeed
    }
}