const name = "Jayant";
const age = 23;
//console.log(name + " my age is " + age); //ase likh sakte h per yeh modern nhi
//console.log(`${name} my age is ${age}`);//isko String Interpolation bolte h

const gameName = new String("Jayannt-Ji"); // is taraf se bhi hm ek variable likh sakte h per  yeh recommended nhi h  kyu ki thora jada time leta h or space bhi
// console.log(gameName[0]);
// console.log(gameName.__proto__); yeh sab strings ke method ka link h

const letsFind = "  chaloDekhteH  "; // 0="",1="",2="c"......13="H"..
console.log(letsFind.toUpperCase());
console.log(letsFind.toLowerCase());
console.log(letsFind.trim());
console.log(letsFind.trim().length); //yeh phele extra space haateyga or phit length calculate karega
console.log(letsFind.indexOf("D")); // agar m yaha per d bhi dunga to yeh -1 dega matlab nhi mila
console.log(letsFind.includes("Dekhte")); // yeh bas true and false me output deag ki kya jo value di vo useme h ki nhi
console.log(letsFind.charAt(13));
console.log(letsFind.slice(3, 7)); // yeh isko hisme tod dega or 2 index se 6 tak value likh dega  yaha negative value  de sakte per negative dete time confuse bhi ho skata iskiye -ve ke time bas -ve value hi likho
console.log(letsFind.slice(-3)); //ya ase likho
console.log(letsFind.slice(2, -3)); //ya ase likho  phele -ve value mat do nhi to empty string dega
console.log(letsFind.substring(2, 12)); // yaha negative value dene se yeh 0 manlega
console.log(letsFind.replace("D", "d")); //yeh ab D ko d se replace kar dega per yeh humne real value me change nhi kiya h yeh bas copy vali value me change hua h
console.log(gameName.split("-")); // yeh split karta , isko tod kar ek array bana ta h , yeh jo mene split ke baad () isme likha yeh matlab ki aap kis basis per yeh string ko todna cahate ho
