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