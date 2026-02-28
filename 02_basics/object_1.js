const mySym = Symbol("key");
const mySym2 = Symbol("key2");

const user = {
  "name 1": "Jayant",
  fullName: "Jayant Baliyan",
  age: 22,
  isLoggedIn: true,
  location: "India",
  email: "jayant@gmail.com",
  lastLoginDay: ["monday", "tuesday", "wednesday", "saturday"],
  [mySym]: "myKey", // symbol bane ne ke liye yaha [] hi bana padega nhi to js isko simple string bana dega
  mySym2: "myKey2",
};

// console.log(user.email);
// console.log(user["email"]);// yehi recommended h isko hi use karo
//console.log(user.name 1); ab yeh nhi cahlega  kyu ki yeh error dega to isliye hamesha [] iska hi use karo
// console.log(user["name 1"]);
// console.log(user.mySym2)//yeh mujhe value print to kar va dega per yeh ek symbol nhi dega
// console.log(user[mySym])
// console.log(user)
user.email = "example@gmail.com";
//Object.freeze(user);
user.email = "jayant@gmail.com"; // ab yeh change nhi hoga kyu ki mene usko freeze kar diya  h
console.log(user["email"]);

//yeh karne se phlele freeze hata lena kyu ki m object ke ander function ko dal rhaa hu per jab mene phele hi usko lock rakha h to m modify nhi kar sakta 
user.greeting = function () {
  console.log("Hello JS user");
};
user.greetingTwo = function () {
  console.log(`Hello JS user, ${this.fullName}`);
};
console.log(user.greeting());
console.log(user.greetingTwo());
