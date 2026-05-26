const num =[1,2,3,30,4,5,6,7,8,9,10];
let finalVal= num.reduce((res,el)=>(res+el));
console.log(finalVal);
let maximum = num.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
})
console.log('Maximum Number:',maximum);