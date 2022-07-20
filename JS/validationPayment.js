const validation = () => {
    const name = document.querySelector("#name").value; 
    const email = document.querySelector("#email").value; 
    const city = document.querySelector("#city").value; 
    const address = document.querySelector("#address").value;
    const errormsg = document.querySelector(".error"); 
    const condition = document.querySelector(".term-condition-checkbox");

    if(name.length == 0){
        errormsg.innerHTML = "*Name is required*";
        return;
    }
    else if(email.indexOf("@") == -1){
        errormsg.innerHTML = "*Please enter valid email*";
        return;
    }
    else if(city.length < 4){
        errormsg.innerHTML = "*Please enter valid city*";
        return;
    }
    else if(address.length < 6){
        errormsg.innerHTML = "*Please enter valid address*";
        return;
    }
    else if(!(condition.checked)){
        errormsg.innerHTML = "*Please accept the terms and condition*";
        return;
    }

    alert("Payment Successful!");
    location.replace("../HTML/home.html");

}

function visaValidate(evt){

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if(ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
            return false;
        }
        return true;
}

const validate = () => {
    const button = document.querySelector(".checkout-button");
    button.addEventListener("click", validation);
}

validate();