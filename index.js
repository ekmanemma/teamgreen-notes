// Initializes the UI.
function init() {
    //  Creates header.
    let header = document.createElement('header');
    header.id = 'header';
    document.body.appendChild(header);
    let mainApplicationHeader = document.createElement('h1');
    mainApplicationHeader.textContent = 'Note Application 2000';
    header.appendChild(mainApplicationHeader);

    //  Creates the main section.
    let mainWrapper = document.createElement('div');
    mainWrapper.id = 'mainWrapper';
    document.body.appendChild(mainWrapper);
    
    //  Creates the nav.
    let nav = document.createElement('nav');
    nav.id = 'nav';
    mainWrapper.appendChild(nav);

    //  Creates the loginbutton.
    let loginBTN = document.createElement('button');
    loginBTN.id = 'loginBTN';
    loginBTN.textContent = 'Login';
    nav.appendChild(loginBTN);
    loginBTN.addEventListener('click', login);

    //  Creates the list with navigation.     -----------------------------------------Optimize below with for loop. TO DO
    let navList = document.createElement('ul');
    nav.appendChild(navList);
    let listItemOne = document.createElement('li');
    listItemOne.textContent = 'New note';
    navList.appendChild(listItemOne);
    let listItemTwo = document.createElement('li');
    listItemTwo.textContent = 'Notes';
    navList.appendChild(listItemTwo);
    let listItemThree = document.createElement('li');
    listItemThree.textContent = 'Notebooks';
    navList.appendChild(listItemThree);
    addNavEventListeners();

    //  Creates the main.                   ---------------------------------------------Add below to main-class. TO DO
    let mainNotes = document.createElement('main');
    mainNotes.id = 'mainNotes';
    mainWrapper.appendChild(mainNotes);
    let notesHeader = document.createElement('h2');
    notesHeader.textContent = 'Notes';
    mainNotes.appendChild(notesHeader);
    
}

function btnNewNote () {
    createMainContent();
    createNoteForm();
}

function btnNotes (){
    createMainContent();
    displayNote();
}

function btnNotebook(){
    createMainContent();
    initNotebook(); 
}

function addNavEventListeners() {
    const allListItems = document.querySelectorAll('li');
    allListItems[0].addEventListener('click', btnNewNote);
    allListItems[1].addEventListener('click', btnNotes);
    allListItems[2].addEventListener('click', btnNotebook);
}

//  Replaces the current main.
function createMainContent(){
    // removes the previous main
    let main = document.getElementById('mainNotes');
    main.parentElement.removeChild(main);
    
    // adds a new main and h2
    let mainTwo = document.createElement('main');
    mainTwo.id = 'mainNotes';
    mainWrapper.appendChild(mainTwo);
    let notesHeader = document.createElement('h2');
    mainTwo.appendChild(notesHeader);
}

function createNoteForm(){
    notesHeader = document.querySelector('main h2');
    notesHeader.textContent = 'New note';
    let mainNotes = document.getElementById('mainNotes');

    let form = document.createElement('form');
    form.id = 'formNewNote';
    mainNotes.appendChild(form);

    let labelInputHeader = document.createElement('label');
    labelInputHeader.textContent = 'Header';
    form.appendChild(labelInputHeader);

    let inputHeader = document.createElement('input');
    inputHeader.setAttribute('type', 'text', 'name', 'noteHeader');
    inputHeader.id = 'noteHeader';
    form.appendChild(inputHeader);

    let labelTextarea = document.createElement('label');
    labelTextarea.textContent = 'Content';
    form.appendChild(labelTextarea);

    let inputText = document.createElement('textarea');
    inputText.id='noteContent'; 
    inputText.setAttribute('type', 'text', 'name', 'noteContent');
    form.appendChild(inputText);

    let toDay = document.createElement('Date');
    toDay.id = 'toDaysDate';
    toDay.setAttribute('type', 'text', 'name', 'toDaysDate');
    form.prepend(toDay);                                                // Preoritizes this element before other when placing.

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.textContent = 'Create New Note';
    form.appendChild(submitButton);
    form.addEventListener('submit', handleSubmitNote);                      // Adds a submit event to the form.
 
}

function handleSubmitNote(e) {
    e.preventDefault();
    saveFormToObject();
    e.target.reset();
}

// Creates an empty array for noteobjects.
let allNoteObjects = [];

// Function that saves noteform input to object.
function saveFormToObject(){
    // Creates object that saves value from the input.
    let newNoteObject = {
    'noteHeader': this.noteHeader.value,
    'noteContent': this.noteContent.value,
    'toDaysDate': new Date()
    }

    allNoteObjects.push(newNoteObject);                                   // Pushes the object to the array
}

function initNotebook(){
    let notesHeader = document.querySelector('main h2');
    notesHeader.textContent = 'Notebooks'; 

    let mainNotes = document.getElementById('mainNotes');

    let divNotebook = document.createElement('div');
    divNotebook.id = 'divNotebook';
    mainNotes.appendChild(divNotebook);

    let section1 = document.createElement('section');
    section1.id = 'section1';
    divNotebook.appendChild(section1);

    let divSeparator = document.createElement('div');
    divSeparator.id= 'separator';
    divNotebook.appendChild(divSeparator);

    let section2 = document.createElement('section');
    section2.id = 'section2';
    divNotebook.appendChild(section2);

    let buttonCreateNotebook = document.createElement('button');
    buttonCreateNotebook.textContent = 'Create Notebook';
    buttonCreateNotebook.id = 'buttonCreateNotebook';
    section2.appendChild(buttonCreateNotebook);

    buttonCreateNotebook.addEventListener('click', modalPopupNotebook);
}
// Creates popup modal with a form for adding a new notebook.
function modalPopupNotebook(){
    let notebookModal = document.createElement('div');
    notebookModal.setAttribute('class', 'modal');
    document.body.appendChild(notebookModal);

    let notebookModalContent = document.createElement('div');
    notebookModalContent.setAttribute('class', 'modalContent');
    notebookModal.appendChild(notebookModalContent);

    let notebookForm = document.createElement('form');
    notebookForm.id = 'notebookForm';
    notebookModalContent.appendChild(notebookForm);

    let inputNotebookName = document.createElement('input');
    inputNotebookName.id = 'notebookName';
    inputNotebookName.setAttribute('placeholder', 'notebook name...');
    inputNotebookName.setAttribute('type', 'text', 'name', 'notebookName');
    notebookForm.appendChild(inputNotebookName);

    let submitBtnNotebook = document.createElement('button');
    submitBtnNotebook.id = 'submitBtnNotebook';
    submitBtnNotebook.setAttribute('type','submit'); 
    submitBtnNotebook.textContent = 'Create';
    notebookForm.appendChild(submitBtnNotebook);

    notebookForm.addEventListener('submit', handleNotebook);
}

function handleNotebook(e){
    e.preventDefault();
    saveNotebook();
    
    let notebookModal = document.getElementsByClassName('modal')[0];
    document.body.removeChild(notebookModal);
}

// Creates an empty array for notebookobjects.
let allNotebooks = [];

function saveNotebook(){
    let notebookObject = {
        'notebookName': this.notebookName.value,
        'notebookDate': new Date()                                      //  If, in the future, would like to add date to notebooks.
    }
    
    // Pushes the object to the allNotebooksarray.
    allNotebooks.push(notebookObject);

    let notebook = document.createElement('button');
    notebook.id = 'notebookElement';
    notebook.textContent = notebookObject.notebookName;
    section1.appendChild(notebook);

    // let inputSeconBreak = document.createElement('br');
    // form.appendChild(inputSeconBreak); Ifall vi behöver sortera på något sätt i framtida behov.    
}

function login(){
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
    loginInputForm.addEventListener('submit', validateUsers);

    const errorMessageSpanUsername = document.createElement('span');
    errorMessageSpanUsername.id = 'errorMessageSpanUsername';
    loginInputForm.appendChild(errorMessageSpanUsername);

    let userNameInputField = document.createElement('input');
    userNameInputField.id = 'userNameInputField';
    userNameInputField.setAttribute('placeholder', 'username...')
    userNameInputField.setAttribute('type', 'text', 'name', 'username');
    loginInputForm.appendChild(userNameInputField);
    userNameInputField.addEventListener('input', liveEmailCheck);       // byt namn sen när jag vet vad den gör...
    

    const errorMessageSpanPassword = document.createElement('span');
    errorMessageSpanPassword.id = 'errorMessageSpanPassword';
    loginInputForm.appendChild(errorMessageSpanPassword);

    let password = document.createElement('input');
    password.id = 'passwordInputForm';
    password.setAttribute('placeholder', 'password...')
    password.setAttribute('type', 'password', 'name', 'password');
    loginInputForm.appendChild(password);
    password.addEventListener('input', livePasswordCheck);           // byt namn sen när jag vet vad den gör...

    let submitLoginFormBTN = document.createElement('button');
    submitLoginFormBTN.id = 'submitLoginFormBTN';
    submitLoginFormBTN.textContent = 'Login';
    loginInputForm.appendChild(submitLoginFormBTN);
}

function displayNote(){
    let notesHeader = document.querySelector('main h2');
    notesHeader.textContent = 'Notes';

    // Applies to each object in the array.
    allNoteObjects.forEach(function(notePad) {
        let mainNotesWrapper = document.getElementById('mainNotes');
        mainNotesWrapper.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap');  //  inline styling is used to not colide with other mains.

        let divForWrapperAndButton = document.createElement('div');
        divForWrapperAndButton.setAttribute('class', 'divForWrapperAndButton');
        mainNotesWrapper.appendChild(divForWrapperAndButton);

        let notePaper = document.createElement('div');
        notePaper.setAttribute('class', 'notePaper');
        divForWrapperAndButton.appendChild(notePaper);

        let noteHeader = document.createElement('h4');
        noteHeader.textContent = notePad.noteHeader;

        let toDaysDate = document.createElement('h6');
        toDaysDate.textContent = notePad.toDaysDate;
    
        let noteContent = document.createElement('span');
        noteContent.textContent = notePad.noteContent;

        notePaper.appendChild(noteHeader);
        notePaper.appendChild(noteContent);
        notePaper.prepend(toDaysDate);

        //  Creates the circles for the paper.
        let circleDivContainerOne = document.createElement('div')
        circleDivContainerOne.setAttribute('class', 'circleDivContainer');
        let circleDivOne = document.createElement('div')
        circleDivOne.setAttribute('class', 'circleDiv');
        let circleDivTwo = document.createElement('div')
        circleDivTwo.setAttribute('class', 'circleDiv');

        let circleDivContainerTwo = document.createElement('div')
        circleDivContainerTwo.setAttribute('class', 'circleDivContainer');
        circleDivContainerTwo.setAttribute('style', 'margin-top: 300px');           // Pushes the containers apart.
        let circleDivThree = document.createElement('div')
        circleDivThree.setAttribute('class', 'circleDiv');
        let circleDivFour = document.createElement('div')
        circleDivFour.setAttribute('class', 'circleDiv');

        //  Appends the circles to the paper.
        notePaper.appendChild(circleDivContainerOne);
        circleDivContainerOne.appendChild(circleDivOne);
        circleDivContainerOne.appendChild(circleDivTwo);
        notePaper.appendChild(circleDivContainerTwo);
        circleDivContainerTwo.appendChild(circleDivThree);
        circleDivContainerTwo.appendChild(circleDivFour);  
        
        let deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
        deleteButton.textContent = 'Delete note';

        divForWrapperAndButton.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteNote); 
    });
}

function deleteNote(e){
    allNoteObjects.splice(e.target.parentElement, 1);               // Takes away the object from the array.

    let removePaper = e.target.parentElement;
    removePaper.parentElement.removeChild(removePaper);             // Takes away the paper connected to the BTN.
}

function validateUsers(e){     
    e.preventDefault();  
    allUsersArray();
                            // HÄR VILL JAG KALLA PÅ VALIDATE IGENTLIGEN MEN MÅSTE DÅ RETURNA usersObject.???
}

//  Fetches the users from backend. WHen loaded, calls the validate function.
function allUsersArray(){
    const xhr = new XMLHttpRequest();
    xhr.open('get','https://jsonplaceholder.typicode.com/users', true);
    xhr.send();
    xhr.addEventListener("load", function(){                        
        const usersObject = JSON.parse(this.response);
        validate(usersObject);      // HÄR VILL JAG inte ha VALIDATE IGENTLIGEN MEN MÅSTE DÅ RETURNA usersObject.???^^
    });
}

//  Validates the users input credentials.
function validate(_usersObject){
    console.log(_usersObject);
    _usersObject.forEach(function(user){
        const errMSG = document.getElementById('errorMessageSpan');
        const usernameInput = document.getElementById('userNameInputField').value;
        const passwordInput = document.getElementById('passwordInputForm').value;
        const usernameFromBackend = user.email;
        const passwordFromBackend = user.address.suite;
        if(usernameFromBackend === usernameInput && passwordInput === passwordFromBackend){
            validLoginCredentials();
            return true;
        }
        
    });


    // const passwordInput = document.getElementById('passwordInputForm');
    // if (passwordInput.value =='' || passwordInput.value == null){
     
    //     errMSG.innerText = 'Password required';
    // }
    alert('fail');
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
    if (usernameInput.value =='' || usernameInput.value == null){
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
    passwordInput.setAttribute('style', 'border: 2px solid grey');
    if (passwordInput.value.length <=2 ){
        errMSG.innerText = 'Password needs to be longar than two charachters';
        passwordInput.setAttribute('style', 'border: 2px solid red');
    }
}    













































document.addEventListener('DOMContentLoaded', init, false);
