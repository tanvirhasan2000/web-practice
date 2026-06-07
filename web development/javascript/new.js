

// // const age = 10;
// // const isOldEnough = age>=18;
// // if(isOldEnough){
// //     console.log(`you can have driving lisencence `)
// // } else {
// //     const yearsLeft = 18- age ;
// //     console.log(`too young . wait another ${yearsLeft}`)
// // }
// // let century;
// // const birthYear = 2022;
// // if(birthYear <= 2000){
// //     century = 20 ;
// // } else {
// //      century = 21; 
// // }
// // console.log(century);

// // // Type conversion 
// // console.log(String(123),123)
// // //type coercion
// // console.log('i am ' +23 +'years only');
// // console.log('23' - '10'-3)//automatically converted to number
// // let n = '1'+1;// string 11 then 
// // n = n-1;
// // console.log(n);

// // // true false 
// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean('tanvir'));
// // console.log(Boolean({}));
// // console.log(Boolean(''));
// // const money = 0;
// // if(money){
// //     console.log("dont spend it all:)");
// // }else {
// //     console.log('You should get a job.');
// // }
// // // input 
// // const fav=Number(prompt("Enter any number"));
// // console.log(fav);
// // console.log(typeof(fav));
// // if(fav ===  23 ){
// //     console.log('cool ! 23 is amazing');
// // }

// // // Switch case
// // const day = prompt("Enter Day name! ").toLowerCase();
// // switch (day) {  // Added .toLowerCase() to handle case-insensitive input
// //     case 'monday':
// //         console.log("Plan course structure.");
// //         break;
// //     case 'tuesday':
// //         console.log("Prepare theory video.");
// //         break;
// //     case 'wednesday':  // Fixed the typo here
// //         console.log("Write code examples.");
// //         break;
// //     case 'thursday':
// //         console.log("Free");
// //         break;
// //     case 'friday':
// //         console.log("-----------------------.");
// //         break;
// //     case 'saturday':
// //         console.log("=========================");
// //         break;
// //     case 'sunday':
// //         console.log("++++++++++++++++++++++++.");
// //         break;
// //     default:
// //         console.log("Invalid day name!");  // Added default case for invalid input
// // }
// // Ternary conditional operator 
// // const age = 23;
// // age>=18 ? console.log('i like to drink tea'):console.log('i like to drink water');

// //#activating Strict mode 
// 'use strict';

// // let hasDriverLicense = false;
// // let passTest = true; 
// // if (passTest) hasDriverLicense = true;
// // if (hasDriverLicense) console.log('I can drive');


// // const private= 123

// //# Function
// // function logger(){
// //     console.log("I am tanvir");
// // }
// // // calling or Invoke function
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apple,oranges){
// //     console.log(apple,oranges);
// //     const juice =`Juce with ${apple} apple and ${oranges} oranges`;
// //     return juice;
// // }
// // console.log(fruitProcessor(5,0));
// // function calAge1(birthYear){
// //     return  2037 - birthYear;
// // }
// // let age1 =calAge1(2000);
// // console.log(age1);
// // const calAge2 = function (birthYear){
// //     return 2025-birthYear;
// // }
// // const age2 = calAge2(1899);
// // console.log(age1,age2);
// // // arrow function 
// // const birthyear= 2022;
// // const agecalc3 = birthyear=>2037-birthyear;
// // console.log(agecalc3);

// // const retuirement = (birthyear)=>{
// //     const age = 2037 - birthyear;
// //     const retuirement =  65-age;
// //     return retuirement; 
// // }
// // console.log(retuirement(2012));

// // function cutPices(fruit){
// //     return fruit *4;
// // }
// // const fruitProcessors = function (apples, oranges){
// //     const applePieces = cutPices(apples);
// //     const orangePices = cutPices(oranges);
// //     const juice = `Juice with ${applePieces} pices of apple and ${orangePices} pices of orange.`;
// //     return juice;
// // }
// // console.log(fruitProcessors(2,3));


// const dol1 = 44;
// const dol2 = 23;
// const dol3 = 71;
// const koal1 = 65;
// const koal2= 34;
// const koal3 = 27;

// function average(num1,num2,num3){
//     return (num1,num2, num3)/3;
// }
// const avgDolphin = average(dol1,dol2,dol3);
// const avgkoal = average(koal1,koal2,koal3);
// function checkWinner(){
//     if(avgDolphin >= avgkoal *2 ){
//         return `Winner is Dolphin`;
//     }else if(avgkoal >= 2*avgDolphin){
//         return `Winner is Koal;`
//     }else {
//         return `No Winner`;
//     }
// }
// console.log(checkWinner())


//# array 
// const friends = ['tanvir','hasan','Shawon'];
// console.log(friends);
// const years = new Array(1,2,3,4,5);
// console.log(years);
// console.log(years.length , friends.length);
// friends[2] = 'joy';
// console.log(friends);
// const firstName = "arroo";
// const jon= [firstName,"khan",2037-1991,'student',friends];
// console.log(jon);
// console.log(jon.length);
// friends.push("weego");
// console.log(friends);
// console.log(friends.indexOf('hasan'));
// const jonn= [firstName,"khan",2037-1991,'student',friends];
// const jonas = {
//     //key : value,
//     firstName: 'jonas',
//     lastName: 'schemed',
//     age: 2037 - 1999, // This calculates to 38
//     job: 'student',
//     friends: ['Tanvir', 'Hasan', 'Shawon'],
//     address:{
//         street: 'Noapara jesshore ',
//         city: 'jessore',
//     }
// };
// console.log(jonas.firstName);
// console.log(jonas.age);
// console.log(jonas.friends[1]);
// console.log(jonas.address.city);
// console.log(jonas["age"]);
// jonas.age = 25;
// console.log(jonas["age"]);

// // ***add new properties
// jonas.country = "bd";
// console.log(jonas["country"]);

// // ****delete properties 
// delete jonas["job"];
// console.log(jonas);


// // ** iterating over object properties
// for (let i in jonas){
//     console.log(i + ": "+ jonas[i]);
// }
// // ***checking if a property Exists 
// console.log("age" in jonas);
// console.log("gender" in jonas);



// // *******checking peroperty using hanOwnProperty()
// console.log(jonas.hasOwnProperty('firstName'));


// // ****accessing object of object nested object 
// console.log(jonas.address.city);
// console.log(Object.values(jonas));
// console.log(`${jonas.firstName} has ${jonas.friends.length}, and his best friend is called ${jonas.friends[0]}`);


// const firstName = 'jon ';
// const lastName= 'doe';
// const person ={
//     firstName : 'Tanvir',
//     lastName: 'Hasan',
//     fullName: ()=>{
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// console.log(person.fullName());
// // for loop 
// for( let rep = 1 ; rep<= 10;rep++ ){
//     console.log("Tanvir"+rep);
// }
// const jonasArray=[
//     'jonas',
//     'schmedtman',
//     2000,
//     'teacer',
//     ['Tanvir','Hasan','Shawon'],
//     true
// ];
// for(let i=0; i<jonasArray.length ;i++){
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }
// const years=[123,2131,4321,43221,32432];
// const ages= [];
// for (let i =0; i<years.length ; i++){
//     ages.push(2037-years[i]);
// }
// console.log(ages);


// // **** Condition 
// const scoreDolphins=(97+112+81)/3;
// const scorekoalas=(109+95+86)/3;
// console.log(scoreDolphins, scorekoalas);
// if(scoreDolphins>scorekoalas && scoreDolphins>=100){
//     console.log('Dolphins win the trophy 🏆');
// }else if(scorekoalas>scoreDolphins){
//     console.log('Koalas win the trophy 🏆');
// }else if(scoreDolphins==scorekoalas && scoreDolphins>=100 && scorekoalas>=100){
//     console.log('Both win the trophy. ');
// }else{
//     console.log('No one wins the trophy.');
// }


// // ****ternary condition
// const age = 23;
// age>=18?console.log('I like to drink wine '):console.log('I loke to dring Water');

// const drink=age>=18?'wine':'water';
// console.log(drink);

// console.log(`i like to drink ${age>=18?'wine':'water'}`);


// //*** challange code 

// const bill=275;
// const tip = bill>=50 && bill<=300 ? bill+(bill*0.15):bill+(bill*0.20);
// console.log(`The bill was${bill},the tip was ${tip-bill} and total value ${tip}`);
