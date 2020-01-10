class Login {
    constructor(){
        this.initLogin();
    }
    initLogin(){
    //  creates the modals.
    let loginModal = document.createElement('div');
    loginModal.setAttribute('class', 'modal');
    document.body.appendChild(loginModal);

    let loginModalContent = document.createElement('div');
    loginModalContent.setAttribute('class', 'modalContent');
    loginModalContent.setAttribute('style', 'min-height: 300px');
    loginModal.appendChild(loginModalContent);
    
    // creates the contents for the login modal.
    let loginInputForm = document.createElement('form');
    loginInputForm.id = 'usernameInputForm';
    loginModalContent.appendChild(loginInputForm);
    loginInputForm.addEventListener('submit', (e) =>{
        this.handleLogin(e);
    });
    const errorMessageSpanUsername = document.createElement('span');
    errorMessageSpanUsername.setAttribute('class', 'errorMSGAboveInput')
    errorMessageSpanUsername.id = 'errorMessageSpanUsername';
    loginInputForm.appendChild(errorMessageSpanUsername);

    let emailInputField = document.createElement('input');
    emailInputField.id = 'emailInputField';
    emailInputField.setAttribute('placeholder', 'Email...')
    emailInputField.setAttribute('type', 'text', 'name', 'email');
    loginInputForm.appendChild(emailInputField);
    emailInputField.addEventListener('blur', () =>{
        this.liveEmailCheck();
    });      
    emailInputField.addEventListener('keyup', () =>{
        this.liveEmailCheck();
    });      
    

    const errorMessageSpanPassword = document.createElement('span');
    errorMessageSpanPassword.setAttribute('class', 'errorMSGAboveInput')
    errorMessageSpanPassword.id = 'errorMessageSpanPassword';
    loginInputForm.appendChild(errorMessageSpanPassword);

    let password = document.createElement('input');
    password.id = 'passwordInputForm';
    password.setAttribute('placeholder', 'Password...')
    password.setAttribute('type', 'password', 'name', 'password');
    loginInputForm.appendChild(password);
    password.addEventListener('input', () =>{
        this.livePasswordCheck();
    });          
    password.addEventListener('blur', () =>{
        this.livePasswordCheck();
    });   

    const submitLoginFormBTN = document.createElement('button');
    submitLoginFormBTN.id = 'submitLoginFormBTN';
    submitLoginFormBTN.textContent = 'Login';
    loginInputForm.appendChild(submitLoginFormBTN);

    const errMSG = document.createElement('p');
    errMSG.id ='invalidUser';
    loginModalContent.appendChild(errMSG);
    }
    handleLogin(e){     
        console.log('jag körs i hanlde login');
        e.preventDefault();                                         //  Stops the form from submiting(reloding page).
        const xhr = new XMLHttpRequest();
        xhr.open('get','https://jsonplaceholder.typicode.com/users', true);
        xhr.addEventListener("load", () => {
            const emailInput = document.getElementById('emailInputField').value; 
            const passwordInput = document.getElementById('passwordInputForm').value;
            const users = JSON.parse(xhr.response);                    //  HITTAR DEN SVARET BARA FÖR ATT DEN KALLADES PÅ I LOAD FUNKTIONEN? DEN ÄR JU INTE MEDSKICKAD SOM ARGUMENT?
            console.log(users);
            const validUser = users.find(function (user){               // Checks if the user exists and has a password to match. If so, returns that user.
                return user.email === emailInput && passwordInput === user.address.suite; 
            });
            if(validUser){                                              //  If the the login was successful then validUser now contins the "validuserobject". 
                console.log('hejsan');
                sessionStorage.setItem('logedInUser', JSON.stringify(validUser));
                const modal = document.getElementsByClassName('modal')[0];
                modal.parentElement.removeChild(modal);
                this.showLoggedInUser();     
            }
            if(!validUser){                                             //  If the the login was not successfull. 
                const wrongPassword = users.findIndex(function(user){   // Checks if the user exists. If so "findIndex" returns something else than -1. 
                    return user.email === emailInput;
                });
                if(wrongPassword !== -1 ){                              //  If the user was found (not-1).
                    const errMSG = document.getElementById('errorMessageSpanPassword');
                    const passwordInput = document.getElementById('passwordInputForm');
                    errMSG.innerText = 'Password is incorrect';
                    passwordInput.setAttribute('style', 'border: 2px solid red');
                } else {                                               
                    this.inValidLoginCredentials();
                }
            }
        });          //  Listens for the response to load, then calls handleUsersResponse function.
        xhr.send();  
    }
    liveEmailCheck(){
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
    livePasswordCheck(){
        const errMSG = document.getElementById('errorMessageSpanPassword');
        const passwordInput = document.getElementById('passwordInputForm');
        errMSG.innerText = '';
        const passwordRegex = /\W/g;
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
    showLoggedInUser (){          
        const logedInUserObject = JSON.parse(sessionStorage.getItem("logedInUser"));
        if (logedInUserObject !== null) {
            console.log(logedInUserObject);
            const header = document.getElementById('header');
            const emailSpan = document.createElement('h1');
            emailSpan.setAttribute('style', 'float: left; padding: 12px; font-size: 1.2em');
            emailSpan.textContent = logedInUserObject.email;
            header.prepend(emailSpan);
        }
    }
    inValidLoginCredentials(){
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

   
}
