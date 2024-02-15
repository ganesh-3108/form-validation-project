var fullname=document.newForm.fullname;
var email=document.newForm.email;
var phone=document.newForm.phone;
var password=document.newForm.password;
var confirmpassword=document.newForm.confirmpassword;


function validation(){
    /*Validating Full name*/
    if(fullname.value.length<5){
        fullname.classList.remove("is-valid");
        fullname.classList.add("is-invalid");
        document.getElementById("name-val").innerText="Name cannot be less than 5 characters";
    }
    else{
        fullname.classList.remove("is-invalid");
        fullname.classList.add("is-valid");
        document.getElementById("name-val").innerText="";
    }

    /*Validating Email*/
    if(email.value.includes('@')){
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        document.getElementById("email-val").innerText="";
    }
    else{
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        document.getElementById("email-val").innerText="Email should include @ in it";
    }
    /* Validating phone number*/

    if(phone.value === "123456789" || phone.value.length<=10){
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
        document.getElementById("phone-val").innerText="Please enter a valid 10-digit number";
    }
    else{
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
        document.getElementById("email-val").innerText="";
    }
    /*Validating Password*/

    if(password.value === "password" || password.value === fullname.value){
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        document.getElementById("password-val").innerText="Password connot be 'password' or same as Fullname";
    }
    else if(password.value.length<8){
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        document.getElementById("password-val").innerText="Password should at least 8 characters";
    }
    else{
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        document.getElementById("password-val").innerText="";
    }
    /*Validating Confirm-Password*/

    if(confirmpassword.value === ""){
        confirmpassword.classList.remove("is-valid");
        confirmpassword.classList.add("is-invalid");
        document.getElementById("confirmpassword-val").innerText="Please confirm your password";
    }
    else if(confirmpassword.value !== password.value){
        confirmpassword.classList.remove("is-valid");
        confirmpassword.classList.add("is-invalid");
        document.getElementById("confirmpassword-val").innerText="Please enter same password to confirm";
    }
    else{
        confirmpassword.classList.remove("is-invalid");
        confirmpassword.classList.add("is-valid");
        document.getElementById("confirmpassword-val").innerText="";
    }
}