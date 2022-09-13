//Previouse way of doing it
// while(num.length < 9){
//  num = '0' + num
//  if(num.length == 8){
//   return num
//  }
// }
//}

// This first let statement is asking what the input you want to insert
let number = Number(prompt("What is the decimal form?"))

// This let statement converts the number into bianary
let result = number.toString(2)

// This sets it to a string
result = String(result)

// Gives you the length
let lenOfNum = result.length
//Makes the length into your bytes you need
let bytes = lenOfNum / 8
//Making the bytes into a whole number and determining number of bits required
let bits = Math.ceil(bytes) * 8
//Pads the front to the next byte
let resultFinal = result.padStart(bits,"0")

// This outputs your answer for the bianary
alert("The Bianary of " + number + " is " + resultFinal)


// This converts your input to hexadecimal
let result2 = number.toString(16)
// This is the output for the hexadecimal
alert("The Hexadecimal of " + number + " is " + result2)



console.log(resultFinal)
