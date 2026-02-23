// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1); ab yaha per jab bhi comapre kare to yeh phele confirm kareki dono ka data type same ho haa ab cahge yaha per js true hi kyuna output de per bhi 

 



// inko to avoid hi kare to aacha asa comparsion karna kyuki yeh kabhi confusion me dal sakte h 
console.log(null > 0);// 
console.log(null == 0);
console.log(null >= 0);
/* The reason is that an equality check == and comparisons ><>=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false. */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===   ab yeh sirf value hi nhi balki use ke sath uska datatype bhi check karta h 

console.log("2" === 2);