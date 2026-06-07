'use strict'
console.log(this);
const calcage=function(birthYear){
    console.log(2037-birthYear);
    console.log(this);
};
calcage(1991);

const cancAgeArror=birthYear=>{
    console.log(2037-birthYear);
    console.log(this);
};
cancAgeArror(1980);

// this inside a method 

// const jonas ={
//     year:1991,
//     calcAge:function(){
//         console.log(this);
//         console.log(2037-this.year);
//     },
// };
// jonas.calcAge();
// const matilda ={
//     year:2017,
// }
// matilda.calcAge=jonas.calcAge;
// matilda.calcAge();

// const f=jonas.calcAge;


//------------ regular vs arrow this keyword 


// //var firstName="Matilda";
// const jonas={
//     firstName:'jonas',
//     year:1991,
//     calcAge:function(){
//         console.log(this);
//         console.log(2037-this.year);
//         // solution 1
//         const isMillenial =()=>{
//             console.log("this is solution 1");
//             console.log(this);
//             console.log(this.year>=1981 && this.year<=1996);

//         };
//         isMillenial();

//         // //solution 2
//         // const self=this;
//         // const isMillenial =function(){
//         //     console.log(self);
//         //     console.log(self.year>=1981 && self.year<=1996);

//         // };
//         // isMillenial();
//     },
//     greet: () => {
//         console.log(this);
//         console.log(`hey ${this.firstName}`);
//     },
// };
// jonas.greet();
// jonas.calcAge();
// console.log(this.firstName);
////// *** dont use arrow inside obj, this can not be accessed by arrow function 

// ---- argument keyword;
// const addExpr=function(a,b){
//     return a+b;
// };
// addExpr(2,5);
// addExpr(2,5,8,12 );
// var addArrow=(a,b)=>{
//     return a+b;
// };
// addArrow(1,2,4);


// // Lecture primitives vs objects (primitive vs reference types);

// let age =30 ;
// let oldAge=age;
// age=31;
// console.log(age);
// console.log(oldAge);

// const me ={
//     name:'jonas',
//     age:30,
// };

// const friend =me;
// friend.age= 27;
// console.log('Friend:',friend);
// console.log('Me:',me);

// premitive types

let lastName="Willams";
let oldLastName=lastName;
lastName="Davis";
console.log(lastName,oldLastName);
// reference types
const jessica={
    firstName:'Jessica',
    lastName:'willams',
    age: 27,
};
const marriedjessica=jessica;
marriedjessica.lastName='Davis';
console.log('Before marrage',jessica);
console.log('After marriage',marriedjessica);
// marriedjessica={};// not allowed 


// copying objects; 

const jessica2={
    firstName:'Jessica',
    lastName:'willams',
    age: 27,
    family:['alice','bob'],
};
const jessicaCopy=Object.assign({},jessica2);
jessicaCopy.lastName="Davis";
console.log('Before Marriage:',jessica2);
console.log('After Marriage:',jessicaCopy);
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before Marriage:',jessica2);
console.log('After Marriage:',jessicaCopy);