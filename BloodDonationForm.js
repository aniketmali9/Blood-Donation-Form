const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInput();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInput = () =>{
    const usernameValue = username.ariaValueMax.trim();
    const emailValue = email.ariaValueMax.trim();
    const phoneValue = phone.ariaValueMax.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    } else{
        setSuccess(username);
    }

}

var usercheck = /^[a-zA-Z._]{3,20}$/;
var emailcheck = /^[A-Za-z_0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
var phonecheck = /^[0-9]{10}$/;

if(usercheck.test(username)){
    document.getElementById('usererror').innerHTML = "";
} else{
    document.getElementById('usererror').innerHTML = "Invalid Username";
    return false;
}


