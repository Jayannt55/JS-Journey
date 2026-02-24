// const count = 100;
// console.log(count);// yaha => 100

// const yourBalance = new Number(1000000000000);
// console.log(yourBalance);// yaha => [Number: 1000000000000]

// console.log(yourBalance.toLocaleString())// yeh comma laga deta h per us ke hisab se
// console.log(yourBalance.toLocaleString('en-IN'))// yeh bhi comma lagata h per INDIA ke hisab se

const decimalNumber = 1023.52;
console.log(decimalNumber.toFixed(1)); // yeh fixed limit tak hi output dega ab jaise hum gst nikal te h to vaha per kuch jada decimal ke baad aa jaye to hum nhi cahenge na ki vo user ko dikhe isliye hum usko bas 2 kar dete h to ab vo 100.72482 => 100.72 hi tak dikhayega    NOTE = yeh ek string me deta h  to agar aage is ke baad bhi iska use kar ke kuch calucate karna h to dhyan se
console.log(typeof decimalNumber.toFixed(1)); // string aayega
console.log(decimalNumber.toPrecision(4)); // yeh pura digit hi ginta h or phir usko significant karta NOTE = isko bhot dhyan se hi use karna

const score = 10;
console.log(score.toString()); //yeh isko string me badal deta h per original value ko nhi copy value ko
console.log(typeof score); //=> number
console.log(typeof score.toString()); //=> string

//************************* maths **********************
// console.log(Math);
// console.log(Math.abs(-4)); sirf minus value +ve me hoti h yeh nhi ki +ve value -ve me ho jaye
// console.log(Math.round(4.6)); yeh round off  kar deta h
// console.log(Math.ceil(4.2)); yeh max value lega jaise yaha per 5
// console.log(Math.floor(4.9)); yeh min value lega jaise yha per 4
// console.log(Math.min(4, 3, 6, 8)); yeh min value dega in me se = 3
// console.log(Math.max(4, 3, 6, 8)); yeh max value dega in me se = 8

console.log(Math.random()); // yeh koi bhi random number dega per bas 0 and 1 ke beech me
console.log(Math.random() * 10 + 1); // ab mene isko bola ki tu 0 se 10 ke beech me de or phir usme 1 add kar de matlab ki m cahata hu ki yeh mujhe 1 se 10 ke beech me kuch random number de
console.log(Math.floor(Math.random() * 10) + 1); // yeh ab min value lega

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // agar m cahata hu ki mujhe ek limit me hi yeh value de jis me ek min and max use ke bech me hi de
