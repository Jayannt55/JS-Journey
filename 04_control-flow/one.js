//+++++++++++++++++++++++++++++++ IF ,ELSE IF , ELSE ++++++++++++++++++++++++++++
const isUserloggedIn = true
const temperature = 41

// <, >, <=, >=, ==, !=, ===, !==
// if ( temperature === 40 ){ yaha per yeh value ke sath sath uska data type bhi check karta h 
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); yeh nhi chalega kyu ki scope 


 const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2"); asa likh sakte h per yeh aacha nhi h yeh code ki readability ko kharab karta h ha lekin agar  asa koi h jo bas ek line ka hi to tab hum => 
if(balance >500) console.log("asa likh sakte h ")// ab yaha doubt aayega ki yaha scope nhi h per humne lagaya nhi h per js engine m khud man leta h -> isko bolte implicit or jo {} ke sath likhte h usko bolte h explicit 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { // ab yeh && h and matlab ki yeh sari condition true ho tab hi aage badhna nhi to nhi ab cahe usme ek bhi false h to pura false yeh execute nhi hoga 
    console.log("Allow to buy");
}

if (loggedInFromGoogle || loggedInFromEmail) { // ab yeh || h or matlab ki agar isme ek bhi true h to execute kar do 
    console.log("User logged in");
}