const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event)=>{
    // event.preventDefault();

    validateForm();
});


function validateForm(){
    if(usernameInput.value.trim() == ''){
         setError(usernameInput, 'Username can not be empty');
     }else if(usernameInput.value.trim() != "admin"){
        setError(usernameInput, 'Invalid Username');
    }else{
        setSuccess(usernameInput);
    }

    if(passwordInput.value.trim() ==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim() != 12345){
        setError(passwordInput, 'Invalid Password');
    }else{
        setSuccess(passwordInput);
    }

    if(usernameInput.value == "admin" && passwordInput.value == 12345){
        window.location.href="http://127.0.0.1:5500/main.html";
    }else{
        alert("Login Failed");

    }
    


function setError(element,errorMessage){
     const parent = element.parentElement;
     if(parent.classList.contains('success')){
        parent.classList.remove('success');
     }
     parent.classList.add('error');
     const paragraph = parent.querySelector('p');
     paragraph.textContent = errorMessage;
}


function setSuccess(element){
     const parent = element.parentElement;
     if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}
}





















