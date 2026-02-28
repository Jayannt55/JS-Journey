const tinderUse =  new Object()//ase bhi object declare kar sakte h isko bolte h singleton object
//const tinderUse = {}

tinderUse.id ="55ab"
tinderUse.name = "kalaa"
tinderUse.isLoggedIn = true;

console.log(tinderUse);

const regularUser ={
  email: "example@gmail.com",
  fullName :{
    userName:{ //ase bhi hum kar sakte h yeh valid h 
      firstName:"Jayant",
      lastName:"Baliyan"
    }
  }
}

console.log(regularUser.fullName);// ab yaha per mene fullname variable me mene yeh sara object store kar diya h ab iska output jo h { userName: { firstName: 'Jayant', lastName: 'Baliyan' } } 

console.log(regularUser["fullName"].userName);//ab yaha me thora ander gaya { firstName: 'Jayant', lastName: 'Baliyan' }

//console.log(regularUser.fullName.firstName)agar asa kiya to yeh undefined dega kyu ki fullName ek variable h bas userName jis ka value h ek object to isliye usko nhi pata ki yeh frstName kaha h

console.log(regularUser.fullName.userName.firstName);
//console.log(regularUser.fullName?.userName.firstName); ab yeh jo mene ? lagaya kyu ki agar koi fullName exist hi nhi karta to - isko hum aage padhenge 

const obj1 ={1: "jayant",2:"baliyan"};
const obj2 ={3:"hello",4:"dosto"};

//const obj5 = {obj1 ,obj2};
/*console.log(obj5);ab yaha { obj1: { '1': 'jayant', '2': 'baliyan' },  obj2: { '3': 'hello', '4': 'dosto' } } yeh output aayega per mujhe to merge karna tha */

//const obj5 =Object.assign(obj1 ,obj2)//asa karne se yeh dono ko merge to kar dega per yeh snytax thik nhi kyu ki yeh obj1 yaha target ban jayega jis se yeh hoga ki yeh merge vala data obj1 me chala jayega to sahi syntax h ->
const obj5 = Object.assign({},obj1,obj2)// yeh sahi tarika h is se yeh blank {} matlab ki sara jo new yeh object bana is me dal de object or koi object ko ched or yeh yaha per target h NOTE=> per isko hum kam hi use karenge jada tar hum use karte h spread 
const obj6 = {...obj1,...obj2};// yeh hum sabse jada use karenge 
console.log(obj6)


const users = [
    {
        id: 1,
        email: "J@gmail.com"
    },
    {
        id: 2,
        email: "L@gmail.com"
    },
    {
        id: 3,
        email: "l@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));ab yeh sari values ko ek array bana kar dedega 
// console.log(Object.values(tinderUser));yeh sari values ko ek array bana kar de dega 
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); yeh kaam aata agar man lo ki jo mene key dali h vo h hi nhi to crash ho sakta h islkiye hum phele is se check kar lete h ki h ya nhi vo key 


const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh sir"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);
  



// yeh sara h jason 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]