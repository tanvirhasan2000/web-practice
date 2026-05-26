function handleOnclick(){
    const handlerStatus = document.getElementById('handle-status');
    handlerStatus.innerText = "handled By Tanvir";         
}

// option 2
document.getElementById('event-listener').addEventListener('click',function(){
            const handlerStatus= document.getElementById('handle-status');
            handlerStatus.innerText ="Text updated by add Event Listener Button.";
        })

// option 2 another 
document.getElementById('btn-update').addEventListener('click',function(){
   const inputField =document.getElementById('input-text');
    const inputText = inputField.value;
    const p = document.getElementById('input-text-display');
    p.innerText = inputText; 
    inputField.value = ' '; 
    }) 