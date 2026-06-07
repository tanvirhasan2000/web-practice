// === first check the type , if type is different , they different 
// if type is same checks the value , if value is same -->true, 
// if value is false --> false 
console.log(1==2);
console.log(true === 1);
console.log('using false and 0:',false ===0);
console.log('using null and undefined:',null===undefined);
console.log('using 0 and ""',0==='');
console.log('using[]and ""',[]==='');

// using Double Equal
console.log("Using Double Equal");
console.log('using true and 1:',true == 1);
// does  type convert then compare with same type 
 /* if one vlue is string , another is number , converts string into NUmber then 
 Compare it */
 /* if one is boolean and another is number , convert bool into number, the compare it*/
console.log('using false and 0:',false ==0);
console.log('using true and str 1:',true == '1');
