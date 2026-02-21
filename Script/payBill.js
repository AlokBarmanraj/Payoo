document.getElementById("pay-bill-btn").addEventListener("click", function(){
    // 1- get the select pay option
    const addBillSection = getValueFormInput("add-bill-section");
    if(addBillSection === "Pay Option"){
        alert("Please Pay Option");
        return;
    }

    // 2- get the biller account number
    const billerAccountNumber = getValueFormInput("input-biller-number");
    if(billerAccountNumber.length !=11){
        alert("Invalid Biller Number");
        return;
    };

    // 3- Pay amount
    const payAmount = getValueFormInput("input-amount-pay");

    const payCurrentBalance = getBalance();

    // 4- account new balance add
    const newAddBalance = payCurrentBalance - Number(payAmount);

    // 5- Invalid pin set
    const payPassword = getValueFormInput("input-pay-bill-password");
    if(payPassword === "1234"){
        // 5.1- true ::> show an alert > set Balance
        alert(`Bill Pay Successful ${payAmount} Taka from 
            ${billerAccountNumber} 
            at ${new Date()}`);
        setBalance (newAddBalance)


        // 1- history container ka niya asbo
        const history = document.getElementById("history-section");

        // 2- new div create korbo
        const newHistory = document.createElement("div");

        // 3- new div innerHtml add korbo
        newHistory .innerHTML=` 
            <div class=" mt-5 p-5 bg-base-100">
            Bill Pay Successful ${payAmount} Taka from 
            ${billerAccountNumber} 
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