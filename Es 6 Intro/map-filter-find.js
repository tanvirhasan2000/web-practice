const students=[
    {id:1, name:'tanvir',marks:60},
    {id:2, name:'hasan',marks:70},
    {id:3, name:'shawon',marks:40},
    {id:4, name:'abdul',marks:20},
]
const name = students.map(student=>student.name);
const goodStudent = students.filter(s=>s.marks>=40);
const goodStudent1 = students.find(s=>s.marks>=40);
console.log('Good Students:',goodStudent);
console.log('First Good Student:',goodStudent1);
console.log('All the name of the Students',name);