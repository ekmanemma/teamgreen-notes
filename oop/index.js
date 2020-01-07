class Main {
    constructor(){
        this.init();
        this.addNavEventListeners();
        this.showLoggedInUser();
    }    

// // Initializes the UI.
 init() {
    let bodyRef = document.body;

    //  Creates header.
    this.header = document.createElement('header');
    this.header.id = 'header';
    bodyRef.appendChild(this.header);

    this.mainApplicationHeader = document.createElement('h1');
    this.mainApplicationHeader.textContent = 'Note Application 2000';
    this.header.appendChild(this.mainApplicationHeader);

    //  Creates the main section.
    this.mainWrapper = document.createElement('div');
    this.mainWrapper.id = 'mainWrapper';
    bodyRef.appendChild(this.mainWrapper);

    
    
    //  Creates the nav.
    this.nav = document.createElement('nav');
    this.nav.id = 'nav';
    this.mainWrapper.appendChild(this.nav);

    //  Creates the loginbutton.
    this.loginBTN = document.createElement('button');
    this.loginBTN.id = 'loginBTN';
    this.loginBTN.textContent = 'Login';
    this.nav.appendChild(this.loginBTN);
    loginBTN.addEventListener('click', () =>{
    
        //  creates the modals.
    let loginModal = document.createElement('div');
    loginModal.setAttribute('class', 'modal');
    document.body.appendChild(loginModal);
    loginModal.style.display = 'block';                     // Behöver vi denna?(emma?)

    let loginModalContent = document.createElement('div');
    loginModalContent.setAttribute('class', 'modalContent');
    loginModalContent.setAttribute('style', 'min-height: 300px');
    loginModal.appendChild(loginModalContent);
    
    // creates the contents for the login modal.
    let loginInputForm = document.createElement('form');
    loginInputForm.id = 'usernameInputForm';
    loginModalContent.appendChild(loginInputForm);
    loginInputForm.addEventListener('submit', (e) =>{
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
                sessionStorage.setItem('logedInUser', JSON.stringify(validUser));
                const modal = document.getElementsByClassName('modal')[0];
                modal.parentElement.removeChild(modal);
                this.showLoggedInUser();

        
            }
        });          //  Listens for the response to load, then calls handleUsersResponse function.
        xhr.send();  
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
    });      
    emailInputField.addEventListener('keyup', () =>{
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
    });          
    password.addEventListener('blur', () =>{
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
    });   

    let submitLoginFormBTN = document.createElement('button');
    submitLoginFormBTN.id = 'submitLoginFormBTN';
    submitLoginFormBTN.textContent = 'Login';
    loginInputForm.appendChild(submitLoginFormBTN);

    const errMSG = document.createElement('p');
    errMSG.id ='invalidUser';
    loginModalContent.appendChild(errMSG);


    });

    //  Creates the list with navigation.     -----------------------------------------Optimize below with for loop. TO DO
    this.navList = document.createElement('ul');
    this.nav.appendChild(this.navList);
    this.listItemOne = document.createElement('li');
    this.listItemOne.textContent = 'New note';
    this.navList.appendChild(this.listItemOne);

    this.listItemTwo = document.createElement('li');
    this.listItemTwo.textContent = 'Notes';
    this.listItemTwo.setAttribute('class', 'active');
    this.navList.appendChild(this.listItemTwo);
    this.listItemThree = document.createElement('li');
    this.listItemThree.textContent = 'Notebooks';
    this.navList.appendChild(this.listItemThree);
   

    
}

addNavEventListeners () {

    //GÖR LOOP

    // for(let i = 0; i < allListItems.length; i++){
    //     listItem.addEventListener('click', (e) =>{
    //         this.activeListItem(e);
    //          this.changeScreen('notes' + [i])
    //     })}

    // this.allListItems.forEach(function (listitem){
    //     listItem.addEventListener('click', (e) => {
    //         this.activeListItem(e);
    //         this.changeScreen('notes' +[i]);
    //     })
    // })
        
    this.allListItems = document.querySelectorAll('li');
 
    this.allListItems[0].addEventListener('click', (e) =>{
        this.activeListItem(e);
        // this.createMainContent();
        this.changeScreen('newNoteScreen');
    });
    this.allListItems[1].addEventListener('click', (e) => {
        this.activeListItem(e);  
        // this.createMainContent();
        this.changeScreen('noteScreen');
    });
    this.allListItems[2].addEventListener('click', (e) => {
        this.activeListItem(e);
        // this.createMainContent();
        this.changeScreen('notebookScreen');
    });
}

activeListItem (e) {
    this.allListItems = document.querySelectorAll('li');
    this.allListItems.forEach(function(listItem){
        listItem.removeAttribute('class');
    });
    e.target.setAttribute('class', 'active'); 
}

showLoggedInUser (){           //  OBS DENNNA MÅSTE KALLAS PÅ TIDIGT(TYP I INIT DÅ DOMEN LADDATS!)
    const logedInUserObject = JSON.parse(sessionStorage.getItem("logedInUser"));
   
    if (logedInUserObject !== null) {
        console.log(logedInUserObject);
        const header = document.getElementById('header');
        console.log(header);
        const emailSpan = document.createElement('h1');
        emailSpan.setAttribute('style', 'float: left; padding: 12px; font-size: 1.2em');
        emailSpan.textContent = logedInUserObject.email;
        header.prepend(emailSpan);
    }
}

changeScreen(screenType){
    if(this.activeScreen) this.activeScreen.removeMe();

    switch(screenType) {
      case 'newNoteScreen':
        this.activeScreen = new NewNoteScreen();
        break;
      case 'noteScreen':
        this.activeScreen = new NoteScreen();
        break;
        case 'notebookScreen':
        this.activeScreen = new NotebookScreen();
        break;
      default:
        this.activeScreen = new Main();
    }
}
}

document.addEventListener('DOMContentLoaded', function(){
    new Main();
});


