// structure: document.getElementById('id').addEventListener('click',fun)

// setp -1 set event handler
document.getElementById('button-login').addEventListener('click',function(event){
    // step -2 prevent default behaviour (preventing reloading browser)
    event.preventDefault();
    // setp -3 get the phone number  and the pin number 
    const phoneNumber= document.getElementById('phone-number').value;
    console.log(phoneNumber);
    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

    // step-4: validate phone and pin 

    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('you are logged in ');
        // step -5: allow users to use the website 
        window.location.href='/Web practice/Module27/home.html';
    }else{
        alert('Wrong phone number or pin');
    }
})

