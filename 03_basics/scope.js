var a = 30;
let b = 40;
const c = 50;
if (true) {
  var a = 40;
  let b = 50;//yeh jo bahar b mene banaya h use se alag h yeh ek alag variable h per bas yeh sirf is if condition tak hi simit h 
  const d = 30;//yeh jo bahar c mene banaya h use se alag h yeh ek alag variable h per bas yeh sirf is if condition tak hi simit h 
}
console.log(a);//yaha 40 aayega kyu ki yeh scope ko nhi manta bas yeh sirf function scope ka manta h or iske liye hum jada var use nhi karte h 
console.log(b);//yaha 40
console.log(c);//yaha 50
console.log(d);// ab yeh nhi chalega ku ki d ka scope bas if ke ander tak hi tha 


function one(){
    const username = "JAYANT"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); yeh nhi chalega vohi same reason website ka scope bas two ke ander tak hi bahar nhi NOTE=> yaha per onw two ke liye global scope h to matalb two one ka use kar sakta h apne scope me 

     two()

}

// one()

if (true) {
    const username = "JAYANT"
    if (username === "JAYANT") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)// yaha yeh error dega 
const addTwo = function(num){
    return num + 2
}