h1 = document.querySelector('h1');
function changeColor(color,delay){
    
   return new Promise((resolve,reject)=>{
    console.log('inside promise')
        let num = Math.floor(Math.random()*10)+1
        console.log('num=',num);
        if(num>3){
            reject('promise rejected');
        }
        setTimeout(()=>{
        h1.style.color=color;
        h1.innerText=`changed color to ${color} within delay ${delay}ms`
        resolve("color changed!");
    },delay);
    });
    
} 

// --- using async and await--
async function demo(){
    try{
      await changeColor('red',100);
    await changeColor('green',1000);
    await changeColor('blue',1000);
    await changeColor('orange',1000) ;
    }catch(err){
        console.log('error caught');
        console.log(err);
    }
    let a =5;
    console.log('number is :',a);
    console.log('new Number:',a+4);
    
    
}
demo();




// changeColor('red',1000)
// .then(()=>{
//     console.log('red color was completed');
//     return changeColor('orange',1000);
// })
// .then(()=>{
//     console.log('orange Color was completed ');
//     return changeColor('blue',2000);
// })
// .then(()=>{
//     console.log('blue color was changed');
//     return changeColor('green',3000);
// })
// .then(()=>{
//     console.log('changed to green');
// })





// changeColor('red',1000,()=>{
//     changeColor('orange',1000,()=>{
//         changeColor('green',1000,()=>{
//             changeColor('blue',2000,()=>{
//                 changeColor('yellow',1000);
//             });
//         })
//     });
// })

// // call Back nesting 
// // this is called call back hell . 




// this is for understanding call back 

// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }else{
//         failure();
//     }
//     console.log('your Data is saved ');
// }
// saveToDb('tanvir',()=>{
//     console.log('your data1 is saved');
//      saveToDb('hasan',()=>{
//         console.log('success  2 : data 2 saved . ');
//         saveToDb('shawon',()=>{
//             console.log('success 3: data3 is saved . ');
//         },
//         ()=>{
//             console.log('failure3: data 3 notSaved..');
//         }
//     );
//      },
//     ()=>{
//         console.log('failure 2: data2 not saved.. ');
//     }
//     );
// },
// ()=>{
//     console.log('weak connection, data not saved');
// }
// );



// promise object represents the eventual completion (or failure) of an 
// asynchronous operation and its resulting value. 
/* promise is a object ,asyncronous function
 there is two things resolve and reject  
 resolve => success 
 reject =>failure 
  */
// function saveToDb(data){

//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>4){
//             resolve("success: data was saved");
//         }else{
//             reject("failure: week connection... ");
//         }
//     });
    
// }
// saveToDb('tanvir')
// .then(()=>{
//     console.log('promise was resolved');
//     return saveToDb('hasan')
    
// })
// .then(()=>{
//         console.log('data 2 saved');
//         return saveToDb('shawon');
//     })
// .then(()=>{
//     console.log('Data 3 resolved.');
// })
// .catch(()=>{
//     console.log('promise was rejected..');
// })
// let t=saveToDb('tanvir');
// console.log(t);
// function connectToServer(){
//     console.log('connecting to server');
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Connected.");
//         },2000)
//     })
// }
// function getCourses(){
//     console.log('getting Courses....');
//     return new Promise(function (resolve,reject){
//         setTimeout(function(){
//             resolve(['course1','course2','course3']);
//         },2000)
//     })
// }
// connectToServer()
// .then(function(response){
//     console.log(response);
//     return getCourses();
// })
// .then(function(response){
//     console.log(response);
//     console.log('course fetching successfully done.');
// })

// --- promise chaining 
/*  */