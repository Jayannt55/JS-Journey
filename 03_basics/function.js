function simpleInterest(P, R, T) {
  let result = (P * R * T) / 100;
  console.log(result);
}

// simpleInterest(10000,7,1)
// const interest = simpleInterest(10000,7,1);
// console.log(interest)// yaha undefined aayega kyu ki mene function se kuch return to liya hi nhi h

// function simpleInterest(P,R,T){
//   let result = (P*R*T)/100;
//   return result;
//   console.log("Jayant")//ab yeh nhi chalega kyu ki function already return ho chuka return ke baad kuch bhi likho vo execute nhi hoga
// }

// const result = simpleInterest(10000,7,1);
// console.log(result);// yaha ans aayega

function simpleInterest(P, R, T) {
  // jo yaha per mene yeh p,r,t diya inko bolte h parameter
  console.log("Jayant"); // yeh run hoga
  return (P * R * T) / 100; //is tarike se bhi likh sakte h
}

const result = simpleInterest(10000, 7, 1); //jo mene yaha per yeh value di inko bol te h argument
console.log(result);

// function userName(name){
//   return `hello ${name}`
// }
// const username = userName("jayant")
// console.log(username)

// function userName(name){
//   return `hello ${name}`
// }
// const username = userName()
// console.log(username)// ab yaha per aayega hello undefined kyu ki mene yah per koi argument hi nhi diya per m cahat hu ki agar user argument na de per bhi koi default value aa jaye to =>

// function userName(name = "user"){
//   return `hello ${name}`
// }
// const username = userName()
// console.log(username)

// console.log(userName("jayant"));//yaha per vo default value ko overwrite karke mera naam dal dega

// ab man lo ki m cahata hu ki agar user ne kuch bhi value nhi di to m usko bolo ki value do
function userName(name) {
  if (name === undefined) {
    // ab isko ek or tarike se likh sakte h !name iska matlab bhi same hi h
    return "please enter your name"; // ab mene yaha return de diya h to ab js aage nhi chalega or vo sidha yeh function ko return kar dega lekin agar m yaha return ke bajaye m isko console.log me likhta to phir yeh function aage bhi run hota
  }
  return `hello ${name}`;
}
const username = userName();
console.log(username);
//ab yeh !name matlab kya ! iska matlab hota h not matlab agar true h to usko false kar dega or false h to true kar dega
// ab yeh if vali condition tab hi chalti h jab vo true ho 