let data;
console.log("Value of data:",data);
data ={};
console.log('Value of the data is ',data);
data =false;
console.log('Value of the data is ',data);
if(data){
    console.log('value of data is Truethy:');
}else{
    console.log("value of data is False");
}

// if i need to capture the falsy value inside if block
// using logical not
if(!data){
    console.log('inside if using falsy value');
}


