let number = null
let numberToString = String(number)
console.log(numberToString)
console.log(typeof numberToString)
//console.log(typeof(numberToString))  dono me se koi bhi use kar sakte ho dono syntax sahi h
// 33 => 33
// null = null


let string = null
let stringToNumber = Number(string)
//console.log(stringToNumber)  
//console.log(typeof stringToNumber) 
// "jayant" = NaN
// "33" = 33
// "33abc" = NaN
// null = 0
// agar m define nhi karu to yaha per tab bhi NaN dega 
// true = 1  
// false = 0  but => not "false" = 0 / or not "true" = 1 yeh sab NaN dega
// yaha per sab me typeof to number hi aayega lekin value alag hogi jaise NaN , 33 , 1 , 0


let score = null
let stringToBoolean = Boolean(score)
//console.log(stringToBoolean)
// "22" = true
// "0" = true
// "" = false
// null = false
// "jayant" = true
// 0 = false 
// agar m isko define hi nhi karu tab bhi false dega
