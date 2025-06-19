const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmedPassword = document.getElementById('confirmedPassword');


// show error outline
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid
function isValidEmail(input){
    const re =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input, 'Email is not valid')
    }

}

// Check Required 
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

// Check input Length 
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

// Get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check password confirmation
function passwordConfirmation(password, confirmedPassword){
    if(password.value === confirmedPassword.value){
        showSuccess(confirmedPassword)
    }else{
        showError(confirmedPassword, 'Passwords are not matched')
    }
}


form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, confirmedPassword])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    isValidEmail(email)
    passwordConfirmation(password, confirmedPassword)

})




