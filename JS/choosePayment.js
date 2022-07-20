const buttonVisa = document.querySelector('.button-visa'); 
const buttonPaypal = document.querySelector('.button-paypal');
const displayVisa = document.querySelector('.visa-payment');
const displayPaypal = document.querySelector('.paypal-payment');

buttonVisa.addEventListener("click", (e)=>{

    displayPaypal.style.display = "none";
    displayVisa.style.display = "block";

});

buttonPaypal.addEventListener("click", (e)=>{

    displayVisa.style.display = "none";
    displayPaypal.style.display = "block";
    

});