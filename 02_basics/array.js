const myArray = [1,2,3,3,"jayant", true]// yeh 1,2... yeh h element
const arr2 = new Array(2, 4, 5 , "jayant")// yeh bhi ek way h per yeh na kar to hi aacha h
console.log(myArray[4]);// jayant dega kyu ki iska bhi index 0  se start hota h 
console.log(myArray.length)// 6 


arr2.push("baliyan")// yeh add kar dega last me 
console.log(arr2)
arr2.pop()// yeh last vala delete kar deta h 
console.log(arr2)
arr2.unshift(1)// yeh bhi add hi krta h per starting me or is se sara indexing hum ko dobara kara padta h jis se time bhi lagta h or yeh computer per load bhi dal ta h 
console.log(arr2)
arr2.shift() // yeh remove kar deta h starting se per yeh bhi time leta h or load dalta h computer per
console.log(arr2)
console.log(arr2.includes("jayant"))// yeh boolean me value dega 
console.log(arr2.indexOf("jayant"))// yeh uska index value baata h
console.log(arr2.indexOf("hello"))// yaha aayega -1 matlab ki yeh value nhi mili 

const newArr = arr2.join()// jo bhi value arr2 me usko string bana kart de dega 
console.log(newArr)
console.log(typeof newArr)// string aayega 

const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)// ab yaha per yeh photocopy baan lega myArr ki 1 and 2 index ki isme 3 yeh include nhi hota h NOTE yeh original ko touch bhi nhi karta h

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// yeh is 1 se 3 tak sab delete kar dega NOTE yeh original array ko bhi change kar deta h 
console.log("C ", myArr);// yeh jo mene hatya usko remove karke output dega 
console.log(myn2); // jo delete hua usko output dega 
