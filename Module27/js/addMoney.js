/*
 1. add event listener to the add money button form submit 
 * make sure to prevent so that page doesn't reloads 
 2. get the amount of money wants to add 
    * also get the pin number provided 
 3. verify the pin Number . for wrong pin number ==> failed to add 
  * right pin number add the number to account balance 
 4. get the curent balance 
 5. add money to be added with the current balance 
 6. display / show the updated money . 

*/
document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();
    const amount = document.getElementById('input-add-money').value;
    const pin = document.getElementById('input-pin-number').value;
    if(pin==='1234'){
        const balance = document.getElementById('account-balance').innerText;
        const numBalance = parseFloat(balance);
        const numAmount = parseFloat(amount);
        const sum = numAmount+numBalance;
        document.getElementById('account-balance').innerText = sum;

    }else{

    }
})