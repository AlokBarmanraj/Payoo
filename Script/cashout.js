
/*
document.getElementById("withdraw-btn").addEventListener("click", function(){
    // 1- get the agent number & validate
    const cashOutNumberInput = document.getElementById("input-agent-number");
    const cashOutNumber = cashOutNumberInput.value;
    console.log(cashOutNumber);
    if(cashOutNumber.length !=11){
        alert('Invalid Number');
        return;
    }

    // 2- get the amount, validate, convert to number
    const cashAmountInput = document.getElementById("amount");
    const cashAmount = cashAmountInput.value;
    console.log(cashAmount);

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
    const cashOutPinInout = document.getElementById("cash-out-pin");
    const pin = cashOutPinInout.value;
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
});
*/
