/* kis taraf data ko  memory store kiya jata h or kis taraf usko access kiya jata use ke basic per data type ko two parts ne convert kiya gaya h */
 
//  Primitive.  inka humko reference nhi diya jata inko copy karke hum diya jata h or jo bhi changes hum karte h vo sab in copy me hota h 

//  7 types : String, Number, Boolearn, null(empty not 0), undefined, Symbol, BigInt(bhot badi values ke liye)

const score = 100
const scoreValue = 100.3 // yeh bhi ek number hi treat hoga 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // ab yeh same hi kyu na ho per yeh false hi dega 

// const bigNumber = 3456543576654356754n ab js behind the scene isko as bigInt hi use karega 



// Reference (Non primitive)

// Array, Objects, Functions
// ab jo yeh refernce type h inka typeof =>function aata h per function ka typeof=> object function hota h 
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "jayant",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId); // yeh humko kisi bhi variable ka datatype baata deta h 