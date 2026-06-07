// function hello(){
//     console.log('inside hello Function');
//     console.log('hello');
// }

// function demo(){
//     console.log("Calling Hello Function");
//     hello();
// }
// console.log('calling Demo Function.');
// demo();

function One(){
    return 1;
}
function two(){
    return One()+One();
}
function three(){
    let ans= two()+One();
    console.log(ans);
}
three(); 
