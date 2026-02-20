document.getElementById("withdraw-btn").addEventListener("click", function(){
    // 1- get the agent number & validate
    const cashOutNumber = getValueFormInput("input-agent-number");
     if(cashOutNumber.length !=11){
        alert('Invalid Number');
        return;
    }
    
    // 2- get the amount, validate, convert to number
    const cashAmount = getValueFormInput("amount");

    // 3- get the current Balance, validate, convert to number
    const balanceElement = document.getElementById("currant-balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4-Calculate new Balance
    const newBalance = Number(balance) - Number(cashAmount);
    
    if(newBalance < 0 ){
        alert("Invalid Amount")
        return;
    }
    // 5- get the pin and verify
    const pin = getValueFormInput("cash-out-pin");
        if(pin === "1234"){
        // 5.1- true ::> show an alert > set Balance 
        alert("CashOut Successful👍")
        console.log("newBalance", newBalance);
        balanceElement.innerText = newBalance;
    }
     else{
        // 5.2- false ::> show ERROR alert > return  
        alert("Invalid Pin 👇");
        return;
    }
})