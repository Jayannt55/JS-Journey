//ab mano ki mujhe nhi pata ki argument kiten aayenge to ab m to parameter nhi de sakta to use ke liye hum use karte h rest operator ka
// function calculateCartPrice ( ...num1){
//   return num1
// }
// console.log(calculateCartPrice(200, 300, 4000 ,500));// ab yaha jitna caho utna value de do sab aayeg aek array me wrap ho kar  [200, 300, 4000, 500 ]

// function calculateCartPrice ( val1 ,val2,...num1){
//   return val1 ,val2, num1
// }
// console.log(calculateCartPrice(200, 300, 4000 ,500));// ab yaha per mujhe bas 4000 , 500 ka hi output milega val1 and val2 nhi kyu ki mene return line  me comma ka use kiya h jo ji function ke ander thora alag h isko sahi karne ke liye

function calculateCartPrice(val1, val2, ...num1) {
  return { val1, val2, num1 };
}
//console.log(calculateCartPrice(200, 300, 4000 ,500))// ab pura print hoga

//*********************** object in function ********************
const obj1 = {
  name: "Jayant",
  age: 23,
};
function handleObject(anyObject) {
  return `my name is ${anyObject.name} and my age is ${anyObject.age}`;
}
function handleObject({ name, age }) {
  // yeh bhi ek tarika h
  return `my name is ${name} and my age is ${age}`;
}
console.log(handleObject(obj1));
// console.log(handleObject(obj1));  ase bhi kar sakte ki m phele object declare kiya phir kiya ya phir m sidha argument me hi object de sakta hu =>

console.log(
  handleObject({
    name: "JAYANT BALIYAN",
    age: 23,
  }),
);

//***************************************** Array in function  ******************************************
const arr = [200, 400, 500];
function handleArray(anyArray) {
  return anyArray[1];
}
// console.log(handleArray(arr)) yeh bhi karsakte h or m function ke argument me bhi de sakta h
function handleArray(anyArray) {
  return anyArray[1];
}
console.log(handleArray([1, 2, 3, 4, 5]));
// console.log(handleArray(500))// ab yeh  crash nhi karega yeh aayega undefined kyu -> number koi index nhi hota h
// console.log(handleArray(500,1000))// yeh bhi undefined aayega
console.log(handleArray("jayant", "baliyan")); //yaha a aajayega per yeh sirf jayant vala aaya h baliyan nhi chal kyu ki mene function me sirf ek hi argument dala h isliye js engine ne jayant utya h or usko anyArray me dal diya ab agar m chata hu ki vo dono ko lene to =>
function handlearray(...anyArray) {
  return anyArray[1];
}
console.log(handlearray([1, 2, 3, 4, 5])); // yaha undefined aayeg akyu ki yaha per bas ek hi h jis ka index h 0 => kyu asa kyu ki spread operator yehi to karta h ki vo sab ko ek array me wrap kar deta h
console.log(handlearray("jayant", "baliyan"));

function Handlearray(anyArray, array) {
  return [anyArray[1], array[1]];
}
console.log(Handlearray("jayant", "baliyan"));
