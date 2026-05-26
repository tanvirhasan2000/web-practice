/**
* how toget a number from an input field 
    1. create a variable 
    2. right side document.get elementBYId(id);
    3.  .value
    4.  parseFloat()

* 
 */
document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();
//     const addMoney = getInputFieldValueById();
//    console.log(addMoney);

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(cashOutAmount)){
        alert(" Please Enter Only Number ...");
        return ; 
    }

    if(pinNumber=== 1111){
        const balance = getTextFieldValueById('account-balance');
        const totalBalance= addMoney+balance;
        document.getElementById('account-balance').innerText=totalBalance;

        const p = document.createElement('p');
        p.innerText= `Add Money: ${addMoney} Tk.  Total Balance:${totalBalance}Tk.`;
        document.getElementById("transaction-container").appendChild(p);
    }else{
        alert('Invalid Credential. ');
    }


})