document.getElementById("login-btn").addEventListener("click", function(){

    //1- get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    //2- get the pin input
    const passwordInput = document.getElementById("input-password");
    const validPassword = passwordInput.value;
    console.log(validPassword);

    //3- match mobile number and pin
    if(contactNumber === "01234567890" && validPassword === "1234"){

        //3.1 true::> alert > homepage
        alert("Login Success")
        window.location.assign('/home.html')
    }
    else{
        //3.2 false::> alert > return
        alert("Login Failed")
        return;
    }
});