// Machine id -> Input Value
function getValueFormInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}


// machine -> Balance
function getBalance (){
    const balanceElement = document.getElementById("currant-balance");
    const balance = balanceElement.innerText;
    console.log("currant-balance", Number(balance));
    return Number(balance)
}


// machine value -> set balance
function setBalance (value){
    const balanceElement = document.getElementById("currant-balance");
     balanceElement.innerText = value;
}



// machine id > hide all > show id
function getShowOnly (id){
    const latestPayment = document.getElementById("latest-payment");
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cash-out");
    const TransferMoney = document.getElementById("transfer-money")
    const transactionsHistory = document.getElementById("transactions-history");


    // all button hide kore dao
    latestPayment.classList.add("hidden");
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    TransferMoney.classList.add("hidden");
    transactionsHistory.classList.add("hidden");


    // show kore dao id wala element
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}