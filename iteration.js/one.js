// for loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
    
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) { // ab agar humne kya per isko index++ ke place per bas index likh diya to yeh loop rukega nhi or chalte jayega or flash print karte jayega isliye yaha per yeh index++ likhna jaruri h 
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break  //ab isko dekhte hi yeh loop band hojayegi or is loop je scope se bahar nikal jayenge hum 
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // ab yeh loop se bahar to nhi aayega per yeh hamara one time is scope ke bahar ka kuch bhi execute nhi karega yeh sidha index++ kar dega or phir condition per chala jayega 
    }
   console.log(`Value of i is ${index}`);
    
}
