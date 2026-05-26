  const numbers = [2,3,4,5];
//   const double =[];
//   for(const num of numbers){
//     const result = num*2;
//     double.push(result);
//   }
//   console.log(double);
// // প্রত্যেকটা উপাদানের উপর কিছু করে কিছু রিটার্ণ দিবে 
const doubleIt = x=>x*2;
const doubled = numbers.map(doubleIt);
const fiveTimers = numbers.map(num=>num*5);
console.log(doubled,fiveTimers);