

function init() {
    let header = document.createElement('header');
    header.id = 'header';
    document.body.appendChild(header);

    let mainWrapper = document.createElement('div');
    mainWrapper.id = 'mainWrapper';
    document.body.appendChild(mainWrapper);

    let mainApplicationHeader = document.createElement('h1');
    mainApplicationHeader.textContent = 'Note Application 2000';
    header.appendChild(mainApplicationHeader);

    
    let nav = document.createElement('nav');
    nav.id = 'nav';
    mainWrapper.appendChild(nav);

    let loginBTN = document.createElement('button');
    loginBTN.id = 'loginBTN';
    loginBTN.textContent = 'Login';
    nav.appendChild(loginBTN);
    loginBTN.addEventListener('click', login);

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

    let mainNotes = document.createElement('main');
    mainNotes.id = 'mainNotes';
    mainWrapper.appendChild(mainNotes);

    let notesHeader = document.createElement('h2');
    notesHeader.textContent = 'Notes';
    mainNotes.appendChild(notesHeader);
    addNavEventListeners();
}



function btnNewNote () {
    generell();
    createForm();
    // form.addEventListener('submit' Submit')
}

function btnNotes (){
    generell();
    notesHeader = document.querySelector('main h2');
    notesHeader.textContent = 'Notes';
    displayNote();
}

function btnNotebook(){
    generell();
    initNotebook(); 
}



function addNavEventListeners() {
    const allListItems = document.querySelectorAll('li');
    allListItems[0].addEventListener('click', btnNewNote);
    allListItems[1].addEventListener('click', btnNotes);
    allListItems[2].addEventListener('click', btnNotebook); //added event for third button

}

function generell(){
    // removes the previous main
    let main = document.getElementById('mainNotes');
    main.parentElement.removeChild(main);
    
    // adds a new main
    let mainTwo = document.createElement('main');
    mainTwo.id = 'mainNotes';


    mainWrapper.appendChild(mainTwo);
    let notesHeader = document.createElement('h2');
    mainTwo.appendChild(notesHeader);
    
}

function createForm(){
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

    let inputBreak = document.createElement('br');
    form.appendChild(inputBreak);

    let labelTextarea = document.createElement('label');
    labelTextarea.textContent = 'Content';
    form.appendChild(labelTextarea);

    let inputText = document.createElement('textarea');
    inputText.id='noteContent'; 
    inputText.setAttribute('type', 'text', 'name', 'noteContent');
    form.appendChild(inputText);

    // let inputSeconBreak = document.createElement('br');
    // form.appendChild(inputSeconBreak); Ifall vi behöver sortera på något sätt i framtida behov.

    let toDay = document.createElement('Date');
    toDay.id = 'toDaysDate';
    toDay.setAttribute('type', 'text', 'name', 'toDaysDate');
    form.prepend(toDay);

    let submitBreak = document.createElement('br');
    form.appendChild(submitBreak);

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.textContent='Create New Note';
    form.appendChild(submitButton);

    form.addEventListener('submit', handleSubmit);
 
}


//EMMAS RADER OBS! var tvungen att sätta name på båda input

function handleSubmit(e) {

    // Stop the form from submitting since we’re handling that with AJAX.
    e.preventDefault();

    //calls function where form value is saved in an object
    saveFormToObject();

    //reset the form fields
    e.target.reset();
}


//creates an empty array
let allNoteObjects = [];

//function that saves form input to object
function saveFormToObject(){

    //object that saves the value of the input
    let newNoteObject = {
        'noteHeader': this.noteHeader.value,
        'noteContent': this.noteContent.value,
        'toDaysDate': new Date()
    }
    //pushes the object to the array
    allNoteObjects.push(newNoteObject);

    console.log(allNoteObjects);
    console.log(newNoteObject);
   

    //funkar att logga this.noteHeader men om man bara skriver ut this så är det window
    console.log(this.noteHeader.value);
    console.log(this.noteContent.value);
    console.log(this.noteHeader, this.noteContent);

}

// EMMAS RADER
//this should have 2 sections, one for adding a note and one for displaying notebooks

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

    buttonCreateNotebook.addEventListener('click', modalPopup);

}



function modalPopup(){

    let notebookModal = document.createElement('div');
    notebookModal.setAttribute('class', 'modal');
    document.body.appendChild(notebookModal);
    notebookModal.style.display = 'block';

    let notebookModalContent = document.createElement('div');
    notebookModalContent.setAttribute('class', 'modalContent');
    notebookModal.appendChild(notebookModalContent);

    let inputNotebook = document.createElement('form');
    inputNotebook.id = 'inputNotebook';
    notebookModalContent.appendChild(inputNotebook);

    let inputNotebookName = document.createElement('input');
    inputNotebookName.id = 'notebookName';
    inputNotebookName.setAttribute('placeholder', 'notebook name...')
    inputNotebookName.setAttribute('type', 'text', 'name', 'notebookName');
    inputNotebook.appendChild(inputNotebookName);

    let submitBtnNotebook = document.createElement('button');
    submitBtnNotebook.id = 'submitBtnNotebook';
    submitBtnNotebook.setAttribute('type','submit'); // not needed
    submitBtnNotebook.textContent = 'Create';
    inputNotebook.appendChild(submitBtnNotebook);

    submitBtnNotebook.addEventListener('click', handleNotebook);
    
}

// function modalClose(){
//     let notebookModal = document.querySelector('.modal');
//     notebookModal.style.display = 'none';

// }

function handleNotebook(e){

        // let notebookModalContent = document.querySelector('.modalContent')
        // notebookModalContent.style.display = 'none';
        
        saveNotebook();
        document.querySelector('.modal').style.display = 'none';
       
       e.preventDefault();
}

let allNotebooks = [];

function saveNotebook(){
    
    let notebookObject = {
        'notebookName': this.notebookName.value,
        'notebookDate': new Date()
        
    }
    
    //pushes the object to the array
    allNotebooks.push(notebookObject);

    console.log(allNotebooks);
    console.log(notebookObject);


    let notebook = document.createElement('button');
    notebook.id = 'notebookElement';
    notebook.textContent = notebookObject.notebookName;
    section1.appendChild(notebook);
}





























function login(){
    //  creates the modals.
    let loginModal = document.createElement('div');
    loginModal.setAttribute('class', 'modal');
    document.body.appendChild(loginModal);
    loginModal.style.display = 'block';

    let loginModalContent = document.createElement('div');
    loginModalContent.setAttribute('class', 'modalContent');
    loginModal.appendChild(loginModalContent);
    

    // creates the contents for the login modal.
    let loginInputForm = document.createElement('form');
    loginInputForm.id = 'usernameInputForm';
    loginModalContent.appendChild(loginInputForm);

    let userNameInputField = document.createElement('input');
    userNameInputField.id = 'userNameInputField';
    userNameInputField.setAttribute('placeholder', 'username...')
    userNameInputField.setAttribute('type', 'text', 'name', 'username');
    loginInputForm.appendChild(userNameInputField);

    let password = document.createElement('input');
    password.id = 'passwordInputForm';
    password.setAttribute('placeholder', 'password...')
    password.setAttribute('type', 'password', 'name', 'password');
    loginInputForm.appendChild(password);

    let submitLoginFormBTN = document.createElement('button');
    submitLoginFormBTN.id = 'submitLoginFormBTN';
    submitLoginFormBTN.textContent = 'Login';
    loginInputForm.appendChild(submitLoginFormBTN);
    submitLoginFormBTN.addEventListener('click', )

    
}



































































// OSCARS RADER


function displayNote(){
    allNoteObjects.forEach(function(notePad) {
        let mainNotesWrapper = document.getElementById('mainNotes');
        mainNotesWrapper.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap');

        let divForWrapperAndButton = document.createElement('div');
        divForWrapperAndButton.setAttribute('class', 'divForWrapperAndButton');
        mainNotesWrapper.appendChild(divForWrapperAndButton);

        let noteDivWrapper = document.createElement('div');
        noteDivWrapper.setAttribute('class', 'noteDivWrapper');
        divForWrapperAndButton.appendChild(noteDivWrapper);


        
        let noteHeader = document.createElement('h4');
        noteHeader.textContent = notePad.noteHeader;

        let toDaysDate = document.createElement('h6');
        toDaysDate.textContent = notePad.toDaysDate;
    
        let noteContent = document.createElement('span');
        noteContent.textContent = notePad.noteContent;



        // mainNotesWrapper.appendChild(noteDivWrapper);
        noteDivWrapper.appendChild(noteHeader);
        noteDivWrapper.appendChild(noteContent);
        noteDivWrapper.prepend(toDaysDate);


        //  Creates the circles for the paper.
        let circleDivContainerOne = document.createElement('div')
        circleDivContainerOne.setAttribute('class', 'circleDivContainer');
        //circleDivContainerOne.setAttribute('style', 'margin-bottom: 15%');
        let circleDivOne = document.createElement('div')
        circleDivOne.setAttribute('class', 'circleDiv');
        let circleDivTwo = document.createElement('div')
        circleDivTwo.setAttribute('class', 'circleDiv');


        let circleDivContainerTwo = document.createElement('div')
        circleDivContainerTwo.setAttribute('class', 'circleDivContainer');
        circleDivContainerTwo.setAttribute('style', 'margin-top: 300px');
        let circleDivThree = document.createElement('div')
        circleDivThree.setAttribute('class', 'circleDiv');
        let circleDivFour = document.createElement('div')
        circleDivFour.setAttribute('class', 'circleDiv');



        //  Appends the circles to the paper.
        noteDivWrapper.appendChild(circleDivContainerOne);
        circleDivContainerOne.appendChild(circleDivOne);
        circleDivContainerOne.appendChild(circleDivTwo);


        noteDivWrapper.appendChild(circleDivContainerTwo);
        circleDivContainerTwo.appendChild(circleDivThree);
        circleDivContainerTwo.appendChild(circleDivFour);  
        

        let deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
        deleteButton.textContent = 'Delete note';
        // let noteSection = document.getElementsByClassName('noteDivWrapper');

        divForWrapperAndButton.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteNote); //adds event when clicking the delete button
    });
}

//deletes an object in the array
function deleteNote(e){
    console.log('deleted');
    allNoteObjects.splice(e.target.parentElement, 1); //takes away the latest object with button
    console.log(allNoteObjects); 
    console.log(e.parentElement);
    
    let removePaper = e.target.parentElement;
    removePaper.parentElement.removeChild(removePaper);
}






























document.addEventListener('DOMContentLoaded', init);
