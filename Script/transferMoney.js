document.getElementById("transfer-money-btn").addEventListener("click", function(){
    // 1- get the user account number
    const transferMoneyNumber = getValueFormInput("input-user-number");
     if(transferMoneyNumber.length !=11){
        alert('Invalid Number');
        return;
    };

    // 2- get the amount & convert number
    const transferAmount = getValueFormInput("user-amount");

    // 3- get the current Balance, validate, convert to number
    const transferCurrentBalance = getBalance();

    // 4- Calculate pay new Balance
    const payNewBalance = transferCurrentBalance - Number(transferAmount);
    if(payNewBalance < 0){
        alert("Invalid Amount");
        return;
    };

    // 5- get the password $ verify
    const userPassword = getValueFormInput("transfer-pin");
    if(userPassword === "1234"){
        // 5.1- true ::> show an alert > set Balance
        alert(`Transfer ${transferAmount} Taka Successful to 
            ${transferMoneyNumber} 
            at ${new Date()}`);
        setBalance (payNewBalance);


        // 1- history container ka niya asbo
        const history = document.getElementById("history-section");

        // 2- new div create korbo
        const newHistory = document.createElement("div");

        // 3- new div innerHtml add korbo
        newHistory .innerHTML=` 
            <div class=" mt-5 p-5 bg-base-100">
            Transfer ${transferAmount} Taka Successful to User Account Number 
            ${transferMoneyNumber} 
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
})