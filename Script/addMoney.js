document.getElementById("add-money-btn").addEventListener("click", function(){
    // 1- get the select Bank
    const bankAccount = getValueFormInput("add-bank-account");
    if(bankAccount === "Add a Bank"){
        alert("Please Add a Bank");
        return;
    }

    // 2- get the Current Bank Number
    const bankNumber =getValueFormInput("input-account-number");
    if(bankNumber.length !=11){
        alert("Invalid Bank Number");
        return;
    };

    // 3- Add Amount
    const addAmount = getValueFormInput ("input-amount");
    const CurrantBalance = getBalance();
    // 4- New balance Add 
    const newAddBalance = CurrantBalance + Number(addAmount);
    
    // 5- Invalid pin set
    const password = getValueFormInput("input-add-money-password");
    if(password === "1234"){
        // 5.1- true ::> show an alert > set Balance
        alert(`Add Money Successful ${addAmount} Taka from 
            ${bankAccount} 
            at ${new Date()}`);
        setBalance (newAddBalance)


        // 1- history container ka niya asbo
        const history = document.getElementById("history-section");

        // 2- new div create korbo
        const newHistory = document.createElement("div");

        // 3- new div innerHtml add korbo
        newHistory .innerHTML=` 
            <div class=" mt-5 p-5 bg-base-100">
            Add Money Successful ${addAmount} Taka from 
            ${bankAccount}
            Bank Account Number ${bankNumber} 
            at ${new Date()} 
            </div>
            `;

        // 4- history container new div append korbo
        history.append(newHistory);
    }
    else{
        // 5.2- false ::> show ERROR alert > return
        alert("Invalid Password");
        return;
    }

});