const accountId = 5565;
let password = "hello";
var email = "jayant@gmail.com";
/* var use hi mat karo to aacha kyu ki block scope  and function scope ki problem aa jati h */
kuchBhi = "hey"; // ase bhi kar sakta hu js error nhi dega per yeh recommended nhi h
let accountHold;
/* ab m ase kar sakta hu var and let ke case m ki m koi value hi na du to isko node dikhayega undefined per const me to mujhe node asas bhi nhi karne dega vo error dega */
console.log(accountId);
// accountId = 5565; m isko asa nhi karta sakta cahe m same hi kyu na du m isko change nhi kar sakta
password = "welldone";
email = "hello@gmail.com";
console.table([
  accountId,
  password,
  email,
  accountHold,
]); /* ab m baar to asa nhi ki har cheez ko baar baar console.log se likhu isliye mene yaha per console.table use kiya ab yeh console.table([mere variables name with comma ]) likh diya */
