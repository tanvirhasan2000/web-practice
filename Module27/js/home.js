// add money to the account 
// step-1: add event handler to the add money button insidethe form

/*
    step-1; add event handler 
        prevent page reload 
    step -2: get money to  be addeded to the account balance 
        get the pin number 
    step-3 : verify the pin Number 
*/


document.getElementById('btn-add-money').addEventListener('click',function(e){
    // prevent page reload after form submit 
    e.preventDefault();
    // step 2: get money to be added to the account 
    const addMoneyInput = document.getElementById('input-add-money').value;
    // get the pin number 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    // verify the pin number 
    if(pinNumberInput==='1234'){
        console.log('adding money to account ');
        // step-4: get the current balance 
        const balance= document.getElementById('account-balance').innerText;
        console.log(balance);
        // step -5: add addMoneyInput with balance 
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const totalBalanve =balanceNumber+addMoneyNumber;
        // updadte the balance in the ui/dom 
        document.getElementById('account-balance').innerText=totalBalanve;
        
    }else{
        console.log('pin not correct'); 
    }
    
});