// 'use strict';
function calAge(birthYear){
    const age=2037-birthYear;
    function printAge(){
        const output=`You are${age},born in${birthYear}`;
        console.log(output);
        if(birthYear>=1981 && birthYear<=1996){
            var millenial = true;
            const firstName='steven';
            const str=`Oh, and Your are a millenial,${firstName}`;
            console.log(str);
            
            function add(a,b){
                return a+b;
            }
        }
        console.log(millenial);
       console.log(add(2,3));
    }
    printAge();
    return age;
}
const firstName='jonas';
calAge(1991);
