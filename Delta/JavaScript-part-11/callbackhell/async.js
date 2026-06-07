// async function greet(){
    
//     return 'hello';
// }
// greet()
// .then(()=>{
//     console.log('promise resolved.');
// })
// .catch(()=>{
//     console.log("promise rejected...");
// })
// let hello =async ()=()=>{
//     return 5 ; 
// }





//// await function 
function getNum(){
    
   return new Promise((resolve,reject)=>{
    console.log('inside promise..')
    setTimeout(()=>{
    let num = Math.floor(Math.random()*10)+1
        console.log(num);
        resolve();
    },2000)
   })
}
async function demo(){
    console.log('inside demo..');
    getNum();
    getNum();

    console.log('using await..');
    await getNum();
    await getNum();
    await getNum();
} 
demo();