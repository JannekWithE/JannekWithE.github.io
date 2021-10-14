
function setup() {
  createCanvas(1000, 400);

  textSize(30)
  text('Du skal åbne konsollen (Højre klick -> Undersøg -> Console)', 10, 50)



  //Opgave 1
  a = 10
  console.log("Opgave 1")
  while (a > 0) {

    console.log(a)

    a = a - 1
  }

  //Opgave 2
  let bSum = 0
  for (let b = 1; b <= 20; b++) {

    bSum = bSum + b
  }
  console.log("Opgaev 2 giver " + bSum)

  //Opgave 3
  console.log("Opgave 3")

  for (let x = 2; x <= 10; x++) {
    console.log(x + "-tabllen")

    for (let c = 1; c <= 10; c++) {
      let resultat3 = x * c

      console.log(resultat3)
    }
  }

  //Opgave 4
  console.log("opgave 4 del 1: resultaterne for y=3*x*x+6*x+9 hvis x=1, x=2, x=3 ... x=10")
  for (let d = 0; d <= 10; d++) {
    let y = 3 * d * d + 6 * d + 9

    console.log(y)
  }

  console.log("opgave 4 del 2: resultaterne for y=3*x*x+6*x+9 hvis x=10, x=20, x=30 ... x=100")
  for (let e = 0; e <= 10; e++) {
    let u = e * 10
      let r = 3 * u * u + 6 * u + 9

    console.log(r)
  }
}