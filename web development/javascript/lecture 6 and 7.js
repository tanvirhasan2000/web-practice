// `use strict`
// function calcAge(birthYear){
//     const age = 2037 - birthYear;
//     function printAge(){
//         let output=`${firstName} you are ${age},born in ${birthYear}`;
//         console.log(output);
//         if(birthYear>=1981 && birthYear<= 1996){
//             var millenial = true;
            
//             //creating new varaible with same name 
//             const firstName='Steven';
//             const str= `Oh, and you are a millenial,${firstName}`;
//             console.log(str);
            
//             function add(a,b){
//                 return a+b;
//             }
//             // re assigning outer variable
//             output= 'New output!'
//         }
//         console.log(millenial)
//         console.log(add(2,7));
//         console.log(output);
//     }
//     printAge();
//     return age;
// }

// const firstName= 'tanvir';
// calcAge(1991);



// // // hosting and tdz 
// console.log(addDecl(2,3));
// function addDecl(a,b){
//     return a+b;
// }
// var addExpr= function(a,b){
//     return a+b;
// }
// const addArrow= (a,b)=> a+b;
// if(!numproducts) deleteShoppingCart();
// console.log(numproducts);
// var numproducts = 10 ;
// function deleteShoppingCart(){
//     console.log('ALL products deleted');
// }

// var x =2;
// let y = 3;
// const z = 4;
// console.log(x == window.x);
// console.log(y == window.y);
// console.log(z == window.z);

// this keyword
`use strict`;
// console.log(this);
// const calcAge = function(birthyear){
//     console.log(2037-birthyear);
//     console.log(this);
// }
// calcAge(1991);
// const calcAgeArrow = birthyear =>{
//     console.log(2037-birthyear);
//     console.log(this);}
// calcAgeArrow(1991);
// const jonas = {
//     year: 1991,
//     calcAge: function(){
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }

// // method borrowing 
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
// const f = jonas.calcAge;
// console.log(f());


// # Regular Function vs/  Arrow Function


// var firstName = 'Tanvir';
// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//         const isMillenial = function(){
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996);
//         }
//         isMillenial();
//     },
//     greet: function()  {
//         console.log(this);
//         console.log(`hey ${this.firstName}`);
//     }
// };
// jonas.greet();
// console.log(this.firstName);
// jonas.calcAge();



// ** working with primitive and reference 
let age = 30;
let oldAge=30;
console.log(age);
console.log(oldAge);

const me={
    name:'Tanvir',
    age:25,
};
const friend=me;
friend.age=27;
console.log('Friend',friend);
console.log('Me',me);


let lastName ='Hasan';
let oldLastName=lastName;
lastName='Davis';
console.log(lastName,oldLastName);

const jessica={
    firstName:'jessica',
    lastName:'willams',
    age:27,
 
};
const marriedjessica=jessica;
marriedjessica.lastName='Davis';
console.log('Before marrage:',jessica);
console.log('After marrage:',marriedjessica);

// ** copying objects 
const jessica2={
    firstName:'jessica',
    lastName:'willams',
    age:27,
    family:['Alice','Bob'],
};
const jessicaCopy=Object.assign({},jessica2);
jessicaCopy.lastName='Davis';
console.log('Before marrage:',jessica2);
console.log('After marrage:',jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('john');
console.log('Before marrage:',jessica2);
console.log('After marrage:',jessicaCopy);