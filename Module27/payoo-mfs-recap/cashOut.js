document.getElementById('btn-cashout-money').addEventListener('click',function(e){
    e.preventDefault();
    const cashOutAmount=getInputFieldValueById('input-cashout-money');
    const pinNumber = getInputFieldValueById('input-cashout-pin-number');

    if(isNaN(cashOutAmount)){
        alert(" Please Enter Only Number ...");
        return ; 
    }

    if(pinNumber === 1111){
        const balance= getTextFieldValueById('account-balance');
        if(cashOutAmount>balance){
            alert('Cashout amount is greater than the balance');
            return; 
        }
        const totalBalance= balance- cashOutAmount;
        document.getElementById('account-balance').innerText=totalBalance;
         const p = document.createElement('p');
        p.innerText= `WithDraw: ${cashOutAmount} Tk.  Total Balance:${totalBalance}Tk.`;
        document.getElementById("transaction-container").appendChild(p);
    }else{
        alert('Invalid Credintial');
    }
})
