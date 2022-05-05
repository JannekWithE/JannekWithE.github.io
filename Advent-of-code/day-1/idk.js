const fs = require("fs")

const inputFileName = "input.txt"

let content = fs.readFileSync(inputFileName).toString()


// console.log("indhold:", content)

// split the files on linebreaks
let lines = content.split("\n").map(l => l.trim());


// output number of elements in array
// console.log("Line count:", lines.length)
// console.log("Contents: ", lines)

//let a = Number ("64")
//let b = Number ("77")
//let c = a + b
//console.log(c)

let result = 0

for (let i = 1; i < lines.length; i+=1) {
    const pre = Number (lines[i-1])
    const cur = Number (lines[i])

    let isIncreasing = pre < cur

    if (isIncreasing) {
    result += 1
    }


}
console.log("den stiger ",result, "gange")