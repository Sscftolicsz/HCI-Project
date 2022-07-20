function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "1px";
    var text;
    if(name.length == ""){
        text = "*Name is Required*";
        error_message.innerHTML = text;
        return false;
    }
    if(name.length < 3){
        text = "*Please Enter valid Name*";
        error_message.innerHTML = text;
        return false;
    }
    if(email.length == ""){
        text = "*Email is Required*";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
        text = "*Please Enter valid Email*";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length == ""){
        text = "*Message is Required*";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 10){
        text = "*Please Enter More Than 10 Characters*";
        error_message.innerHTML = text;
        return false;
    }
    alert('Form Submitted Successfully!')
    return true;
}