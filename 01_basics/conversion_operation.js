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


//  **************************************operation**********************************************

// let value = 2
// let negativeValue = -value
// console .log(negativeValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)// 2 to the power of 2
// console.log(2/2)
// console.log(2%2) // remainder 


// let num1 = "hello"
// let num2 = " guys"
// let num3 = num1 + num2 // sirf add kar sakte h minus nhi or isko hi bolte h concatenate
// console.log(num3)

// console.log("1" + 2) =>   12
// console.log(1 + "2") =>  12
// console.log("1" + "2") =>  12
// console.log("1" + 2 + 2) =>  122
// console.log(1 + 2 + "2") =>  32
// yeh sab aacha tarika nhi h likhne ka kyu ki yeh code readability ko kharab karta h
/* ab yeh jo hum ko dikh raha h ki hum add kar rahe per bhi yeh dono ko chipka kar likh de raah or kahi per yeh add kar ke  phir chipka raha => jo phela type hoga vohi dusreme convert hokar output dega jaise ki "1" + 2 to yaha per phela ek string h to 2 ko phele string banega or phir output */
// and atlast in per depend na rahe or isko real life code m mat likhna 




// console.log( 3 + 4 * 5 % 3);

// console.log(+true); => 1
// console.log(+""); => 0
// yeh sab code readability ko kharab karta h isliye asa likhna avoid hi karu 


let num1, num2, num3

num1 = num2 = num3 = 2 + 2  // asa likha avoid hi karo 

let footStep = 100
++footStep; // ab yaha per postfix and prefix padho or dono me kya difference h 
console.log(footStep);