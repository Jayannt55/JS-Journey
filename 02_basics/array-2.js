const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

//  marvel_heros.push(dc_heros)// =>dhyan se iska output aayega [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] kyu ki humne dekah ki array me hum kuch bhi dal sakte h isliye usne array me array dal diya nested array NOTE iski indexing bhi majedar h 0 = thor 1, = ironman 2 ,= spiderman, yaha dekho 3 = ["superman", "flash", "batman"] yeh pura hi aayega
//  console.log(marvel_heros);
// console.log(marvel_heros[3]);//ab yaha per ["superman", "flash", "batman"]
// console.log(marvel_heros[3][1]);// agar mujhe yaha flash cahiye to ase likhna hoga

const allHeros = marvel_heros.concat(dc_heros); // yaha humko ek new variable declare karan padega tabhi work karega nhi to bas yeh martvel_heros ka hi output dega
marvel_heros.concat(dc_heros);
console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman' ]
console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
const all_new_heros = [...marvel_heros, ...dc_heros]// isko bolte h spread yeh hi recommended h 

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//kabhi rare isko use karenge per yeh kya karega ki ek new array bana dega jis me yeh sare array ko open karke unke sare elements ko bahar la kar is new array me dal dega  jo yeh infinity h yeh depth ki aap kitne depth tak isko open karna cahate h 
//const real_another_array = another_array.flat(1) yeh output dega [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
console.log(real_another_array);

console.log(Array.isArray("jayant"))
console.log(Array.from("jayant"))
console.log(Array.from({name: "jayant"})) // interesting kyu ki yaha yeh isko convert nhi kar payega or yaha mujhe ek khali array dega iske peeche ek reason h ki yeh bas  iterable , array like cheez jaise ki  jis ki  pass property .length ho usko hi array bana sakta h 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
