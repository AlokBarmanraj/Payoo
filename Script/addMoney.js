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
    }

    // 3- Add Amount
    const addAmount = getValueFormInput ("input-amount");
    const CurrantBalance = getBalance();
    // 4- New balance Add 
    const newAddBalance = CurrantBalance + Number(addAmount);
    
    // 5- Invalid pin set
    const password = getValueFormInput("input-add-money-password");
    if(password === "1234"){
        alert("Add Money Successful")
        setBalance (newAddBalance)
    }
    else{
        alert("Invalid Password");
        return;
    }

})