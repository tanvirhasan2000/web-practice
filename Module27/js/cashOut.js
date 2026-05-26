document.getElementById('btn-cashout-money').addEventListener('click',function(e){
    e.preventDefault();
    const cashOutAmount =document.getElementById('input-cashout-money').value;
    const pin = document.getElementById('input-cashout-pin-number').value;
    if(pin ==='1234'){
        const currentBalance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(currentBalance);
        const cashNumber = parseFloat(cashOutAmount);
        const sum = balanceNumber - cashNumber;
        document.getElementById('account-balance').innerText= sum;
    }else{
        alert('Invalid Credintials');
    }
})
   
