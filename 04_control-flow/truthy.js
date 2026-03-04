const userEmail = []

if (userEmail) { // ab yaha to mene koi true ya false nhi likha or na hi check kiya to phir yeh kaise execute hua yaha hi aata h truthy and falsy  matlab ki man liya gaya h
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN. inke aalawa sab kuch truthy h 

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) { yeh tarike se hum check karte h ki mera array empty h ya nhi 
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // is tarike se hum check karte h ki mera object empty h ya nhi 
    console.log("Object is empty");
}

/* dhyan se => false == 0 > true
false == "" > true
0 == "" > true */

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")