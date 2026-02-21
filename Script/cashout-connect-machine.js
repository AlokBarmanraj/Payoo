document.getElementById("withdraw-btn").addEventListener("click", function(){
    // 1- get the agent number & validate
    const cashOutNumber = getValueFormInput("input-agent-number");
     if(cashOutNumber.length !=11){
        alert('Invalid Number');
        return;
    }
    
    // 2- get the amount, validate, convert to number
    const cashAmount = getValueFormInput("amount");

    //! 3- get the current Balance, validate, convert to number
    // const balanceElement = document.getElementById("currant-balance");
    // const balance = balanceElement.innerText;
    // console.log(balance);

    // Or 
    const CurrantBalance = getBalance();

    // 4-Calculate new Balance
    const newBalance = CurrantBalance - Number(cashAmount);
    
    if(newBalance < 0 ){
        alert("Invalid Amount")
        return;
    }
    // 5- get the password and verify
    const password = getValueFormInput("cash-out-pin");
        if(password === "1234"){
        // 5.1- true ::> show an alert > set Balance 
        alert(`Cash Out ${cashAmount} Taka Successful to 
            ${cashOutNumber} 
            at ${new Date()}👍`)
        setBalance (newBalance);


        // 1- history container ka niya asbo
        const history = document.getElementById("history-section");

        // 2- new div create korbo
        const newHistory = document.createElement("div");

        // 3- new div innerHtml add korbo
        newHistory .innerHTML=` 
            <div class=" mt-5 p-5 bg-base-100">
            Cash Out ${cashAmount} Taka Successful to 
            ${cashOutNumber} 
            at ${new Date()}
            </div>
            `;

        // 4- history container new div append korbo
        history.append(newHistory);
    }
     else{
        // 5.2- false ::> show ERROR alert > return  
        alert("Invalid Password 👇");
        return;
    }
});