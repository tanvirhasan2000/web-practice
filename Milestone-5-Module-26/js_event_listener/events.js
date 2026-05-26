console.log('this is dom ');
// option 1 directly set on the html element 
// <button onClick="console.log(29)">Another Button </button>
// Option 2: add onclick function on the html Element 
// <button onClick="makeRed()">Make Red</button> 

function makeRed(){
            
    document.body.style.backgroundColor='red';
 }
 //Option 3 
const purpleButton = document.getElementById('purple');
purpleButton.addEventListener('click', function makepurple(){
    document.body.style.backgroundColor='purple';
});
// option 3 another 
   const makeBlueButton = document.getElementById('make-blue');
 makeBlueButton.addEventListener('click', makeBlue);

function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// option 4 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 : another 
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor ='green';
});

