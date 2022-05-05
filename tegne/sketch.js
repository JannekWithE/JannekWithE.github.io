let firkantshape = []
function setup() {

  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background("lightblue");

  //Dette er teskt så man ved havd er hvad
  textSize(30)
  text("4 = Firkant", 10, 30)

  //
  for (const Firkant of firkantshape) {
    Firkant.render()
  }
  

}


function keyPressed() {
  if (key == "c") {
    reset()
  }

}
