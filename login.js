
//  Gets the users from backend and handles the form.
function handleLogin(e){     
   
    //  Stops the form from submiting(reloding page).
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.open('get','https://jsonplaceholder.typicode.com/users', true);

    //  Listens for the response to load, then calls handleUsersResponse function.
    xhr.addEventListener("load", handleUsersResponse);
    xhr.send();            
}

function handleUsersResponse() {
    
    const emailInput = document.getElementById('emailInputField').value; 
    const passwordInput = document.getElementById('passwordInputForm').value;
    const users = JSON.parse(this.response);
    console.log(users);

    // Checks if the user exists and has a password to match. If so, returns that user.
    const validUser = users.find(function (user){
        return user.email === emailInput && passwordInput === user.address.suite; 
    });

    //  If the the login was successful then validUser now contins the "validuserobject". 
    if(validUser){
        sessionStorage.setItem('testar', JSON.stringify(validUser));
        const modal = document.getElementsByClassName('modal')[0];
        modal.parentElement.removeChild(modal);
        alert('du är inloggad');
        //validLoginCredentials(validUser);
    }
    
    //  If the the login was not successfull this code runs. 
    if(!validUser){
       
        // Checks if the user exists. If so "findIndex" returns something else than -1. 
        const wrongPassword = users.findIndex(function(user){
            const errInvalidUser = document.getElementById('invalidUser');
            errInvalidUser.textContent = '';
            return user.email === emailInput;
        });
        if(wrongPassword !== -1 ){
            const errMSG = document.getElementById('errorMessageSpanPassword');
            const passwordInput = document.getElementById('passwordInputForm');
            errMSG.innerText = 'Password is incorrect';
            passwordInput.setAttribute('style', 'border: 2px solid red');
        } else {
            inValidLoginCredentials();
        }
    }
}

// Runs when a user does not exist.
function inValidLoginCredentials(){
    const errMSGOne = document.getElementById('errorMessageSpanUsername');
    const emailInput = document.getElementById('emailInputField');
    errMSGOne.innerText = '';
    emailInput.setAttribute('style', 'border: 2px solid grey');
    
    const errMSGTwo = document.getElementById('errorMessageSpanPassword');
    const passwordInput = document.getElementById('passwordInputForm');
    errMSGTwo.innerText = '';
    passwordInput.setAttribute('style', 'border: 2px solid grey');

    const errInvalidUser = document.getElementById('invalidUser');
    errInvalidUser.textContent = 'Invalid User, you do not exist :,(';
}

// function validLoginCredentials(validUser){
//     localStorage.setItem('loggedInUser', JSON.stringify(validUser));
//     const modal = document.getElementsByClassName('modal')[0];
//     modal.parentElement.removeChild(modal);
//     alert('du är inloggad');
// }

function liveEmailCheck(){
    const errMSG = document.getElementById('errorMessageSpanUsername');
    const emailInput = document.getElementById('emailInputField');
    errMSG.innerText = '';
    emailInput.setAttribute('style', 'border: 2px solid grey');
    if (!emailInput.value){
        errMSG.innerText = 'Username required';
        emailInput.setAttribute('style', 'border: 2px solid red')
    }
    if (emailInput.value.length >= 40){
        errMSG.innerText = 'Email must be less than 40 characters';
        emailInput.setAttribute('style', 'border: 2px solid red');
    }
    if (!emailInput.value.includes('@')){
        errMSG.innerText = 'Email must have a: @';
        emailInput.setAttribute('style', 'border: 2px solid red');
    }
}

function livePasswordCheck(){
    const errMSG = document.getElementById('errorMessageSpanPassword');
    const passwordInput = document.getElementById('passwordInputForm');
    errMSG.innerText = '';
    const passwordRegex = /\W/g;
    console.log()
    const containsRegex = passwordInput.value.match(passwordRegex);
    if(!containsRegex) {
        errMSG.innerText = 'Password needs contain character';
        passwordInput.setAttribute('style', 'border: 2px solid red');
    }
    passwordInput.setAttribute('style', 'border: 2px solid grey');
    if (passwordInput.value.length <=2 ){
        errMSG.innerText = 'Password needs to be longar than two charachters';
        passwordInput.setAttribute('style', 'border: 2px solid red');
    }
}    

// gjorde så här först.
// //  Fetches the users from backend. WHen loaded, calls the validate function.
// function allUsersArray(){
//     const xhr = new XMLHttpRequest();
//     xhr.open('get','https://jsonplaceholder.typicode.com/users', true);
//     xhr.send();
//     xhr.addEventListener("load", function(){                        
//         const usersObject = JSON.parse(this.response);
//         const userExists = validate(usersObject);      // HÄR VILL JAG inte ha VALIDATE IGENTLIGEN MEN MÅSTE DÅ RETURNA usersObject.???^^
//     });
// }

// //  Validates the users input credentials.
// function validate(userListFromServer){
//     userListFromServer.forEach(function(user){
//         const errMSG = document.getElementById('errorMessageSpan');

//         const emailInput = document.getElementById('emailInputField').value;
//         const passwordInput = document.getElementById('passwordInputForm').value;
//         const usernameFromBackend = user.email;
//         const passwordFromBackend = user.address.suite;
//         if(usernameFromBackend === emailInput && passwordInput === passwordFromBackend){
//             validLoginCredentials();
//             return true;
//         }
        
//     });
//     alert ('fail');
// }



        // // Checks if the user exists but does not have a password to match. If so, that user is informed.
        // users.forEach(function(user){
        //     if(user.email === emailInput && !passwordInput === user.address.suite){
        //         const errMSG = document.getElementById('errorMessageSpanPassword');
        //         const passwordInput = document.getElementById('passwordInputForm');
        //         errMSG.innerText = 'Wrong password';
        //         passwordInput.setAttribute('style', 'border: 2px solid red');   
        //     };
        // });   