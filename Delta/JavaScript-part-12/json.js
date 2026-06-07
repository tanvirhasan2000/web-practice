let json='{"fact":"The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.","length":101}';
console.log(json);
let validRes=JSON.parse(json);
console.log(validRes.fact);

let student ={
    name:'Tanvir',
    marks:40
}
let jsStudent= JSON.stringify(student);
console.log();
console.log();
console.log(jsStudent);