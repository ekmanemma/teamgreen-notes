
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
    const usernameInput = document.getElementById('userNameInputField').value;
    const passwordInput = document.getElementById('passwordInputForm').value;
    const users = JSON.parse(this.response);
    console.log(users);

    // Checks if the user exists and has a password to match. If so, returns that user.
    const possibleUser = users.find(function (user){
        return user.email === usernameInput && passwordInput === user.address.suite; 
    });

    //  If the the login was successful then possibleUser now contins the "validuserobject". 
    if(possibleUser){
        validLoginCredentials();
        localStorage.setItem('loggedInUser', JSON.stringify(possibleUser));
    }
    //  If the the login was not successfull this code runs. 
    if(!possibleUser){
        // Checks if the user exists. If so, the wrong password was entered. Else returns -1.
        const wrongPassword = users.findIndex(function(user){
            const errInvalidUser = document.getElementById('invalidUser');
            errInvalidUser.textContent = '';
            return user.email === usernameInput;
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

function inValidLoginCredentials(){
    const errMSGOne = document.getElementById('errorMessageSpanUsername');
    const usernameInput = document.getElementById('userNameInputField');
    errMSGOne.innerText = '';
    usernameInput.setAttribute('style', 'border: 2px solid grey');
    
    const errMSGTwo = document.getElementById('errorMessageSpanPassword');
    const passwordInput = document.getElementById('passwordInputForm');
    errMSGTwo.innerText = '';
    passwordInput.setAttribute('style', 'border: 2px solid grey');

    const errInvalidUser = document.getElementById('invalidUser');
    errInvalidUser.textContent = 'Invalid User, you do not exist :,(';
}
function validLoginCredentials(){
    const modal = document.getElementsByClassName('modal')[0];
    modal.parentElement.removeChild(modal);
    alert('du är inloggad');
}

function liveEmailCheck(){
    const errMSG = document.getElementById('errorMessageSpanUsername');
    const usernameInput = document.getElementById('userNameInputField');
    errMSG.innerText = '';
    usernameInput.setAttribute('style', 'border: 2px solid grey');
    if (!usernameInput.value){
        errMSG.innerText = 'Username required';
        usernameInput.setAttribute('style', 'border: 2px solid red')
    }
    if (usernameInput.value.length >= 40){
        errMSG.innerText = 'Email must be less than 40 characters';
        usernameInput.setAttribute('style', 'border: 2px solid red');
    }
    if (!usernameInput.value.includes('@')){
        errMSG.innerText = 'Email must have a: @';
        usernameInput.setAttribute('style', 'border: 2px solid red');
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

//         const usernameInput = document.getElementById('userNameInputField').value;
//         const passwordInput = document.getElementById('passwordInputForm').value;
//         const usernameFromBackend = user.email;
//         const passwordFromBackend = user.address.suite;
//         if(usernameFromBackend === usernameInput && passwordInput === passwordFromBackend){
//             validLoginCredentials();
//             return true;
//         }
        
//     });
//     alert ('fail');
// }



        // // Checks if the user exists but does not have a password to match. If so, that user is informed.
        // users.forEach(function(user){
        //     if(user.email === usernameInput && !passwordInput === user.address.suite){
        //         const errMSG = document.getElementById('errorMessageSpanPassword');
        //         const passwordInput = document.getElementById('passwordInputForm');
        //         errMSG.innerText = 'Wrong password';
        //         passwordInput.setAttribute('style', 'border: 2px solid red');   
        //     };
        // });   












