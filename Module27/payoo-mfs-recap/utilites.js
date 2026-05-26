


// function getInputFieldValueById(id){
//     console.log('getting vlaue');
//     const c = document.getElementById('input-add-money').value;
//     return c; 

// }
function getInputFieldValueById(id){
    const value= parseFloat(document.getElementById(id).value);
    return value;
}
function getTextFieldValueById(id){
    const value = parseFloat(document.getElementById(id).innerText);
    return value;
}
function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-form').classList.add('hidden');
    // showing this section 
    document.getElementById(id).classList.remove('hidden');
}