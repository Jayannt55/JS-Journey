// +++++++++++++++++++++++++++++ SWITCH +++++++++++++++++++++++++++++
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// yeh h default syntax switch ka 
const month = "march" 

switch (month) {
    case "jan":
        console.log("January");
       break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break; // ab agar yeh nhi lagaya to kya hoga ki yeh use next vale vo bhi execute karte jayeg ajab tak usko break na mile ya phir yeh switch khatam na ho or ek baat yeh default bhi execute kar dega agar break nhi h to 
    default:// agar koi bhi case nhi chala to yeh execute chal jayega 
        console.log("default case match");
        break;
}