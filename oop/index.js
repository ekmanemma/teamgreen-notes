class Main {
    constructor(){
        this.init();
        this.addNavEventListeners();
        // this.saveFormToObject();
        //this.activeListItem();
        // this.allNoteObjects = allNoteObjects;
        // this.allNoteBooks = allNoteBooks;
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
    // loginBTN.addEventListener('click', login);

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

    //  Creates the main.                   ---------------------------------------------Add below to main-class. TO DO
    // this.mainNotes = document.createElement('main');
    // this.mainNotes.id = 'mainNotes';
    // this.mainWrapper.appendChild(this.mainNotes);
    // this.notesHeader = document.createElement('h2');
    // this.notesHeader.textContent = 'Notes';
    // this.mainNotes.appendChild(this.notesHeader);
   
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



// createMainContent (){
//     // removes the previous main
//     this.main = document.getElementById('mainNotes');
//     this.main.parentElement.removeChild(this.main);
    
//     // adds a new main and h2
//     this.mainTwo = document.createElement('main');
//     this.mainTwo.id = 'mainNotes';
//     this.mainWrapper.appendChild(mainTwo);
//     this.notesHeader = document.createElement('h2');
//     this.mainTwo.appendChild(this.notesHeader);
// }


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


// function activeListItem(e){
//     const allListItems = document.querySelectorAll('li');
//     allListItems.forEach(function(listItem){
//         listItem.removeAttribute('class');
//     });
//     e.target.setAttribute('class', 'active');
// }

// function btnNewNote(e) {
//     activeListItem(e);
//     createMainContent();
//     createNoteForm();
// }

// function btnNotes (e){
//     activeListItem(e);  
//     createMainContent();
//     displayNote();
// }

// function btnNotebook(e){
//     activeListItem(e);
//     createMainContent();
//     initNotebook(); 
// }

// function addNavEventListeners() {
//     const allListItems = document.querySelectorAll('li');
//     allListItems[0].addEventListener('click', btnNewNote);
//     allListItems[1].addEventListener('click', btnNotes);
//     allListItems[2].addEventListener('click', btnNotebook);
// }

// //  Replaces the current main.
// function createMainContent(){
//     // removes the previous main
//     let main = document.getElementById('mainNotes');
//     main.parentElement.removeChild(main);
    
//     // adds a new main and h2
//     let mainTwo = document.createElement('main');
//     mainTwo.id = 'mainNotes';
//     mainWrapper.appendChild(mainTwo);
//     let notesHeader = document.createElement('h2');
//     mainTwo.appendChild(notesHeader);
// }

// function createNoteForm(){
//     notesHeader = document.querySelector('main h2');
//     notesHeader.textContent = 'New note';
//     let mainNotes = document.getElementById('mainNotes');

//     let form = document.createElement('form');
//     form.id = 'formNewNote';
//     mainNotes.appendChild(form);

//     let labelInputHeader = document.createElement('label');
//     labelInputHeader.textContent = 'Header';
//     form.appendChild(labelInputHeader);

//     let inputHeader = document.createElement('input');
//     inputHeader.setAttribute('type', 'text', 'name', 'noteHeader');
//     inputHeader.id = 'noteHeader';
//     form.appendChild(inputHeader);

//     let labelTextarea = document.createElement('label');
//     labelTextarea.textContent = 'Content';
//     form.appendChild(labelTextarea);

//     let inputText = document.createElement('textarea');
//     inputText.id='noteContent'; 
//     inputText.setAttribute('type', 'text', 'name', 'noteContent');
//     form.appendChild(inputText);

//     let toDay = document.createElement('Date');
//     toDay.id = 'toDaysDate';
//     toDay.setAttribute('type', 'text', 'name', 'toDaysDate');
//     form.prepend(toDay);                                                // Preoritizes this element before other when placing.

//     let submitButton = document.createElement('button');
//     submitButton.setAttribute('type','submit');
//     submitButton.textContent = 'Create New Note';
//     form.appendChild(submitButton);
//     form.addEventListener('submit', handleSubmitNote);                      // Adds a submit event to the form.
 
// }

// function handleSubmitNote(e) {
//     e.preventDefault();
//     saveFormToObject();
//     e.target.reset();
// }

// // Creates an empty array for noteobjects.
// let allNoteObjects = [];

// // Function that saves noteform input to object.
// function saveFormToObject(){
//     // Creates object that saves value from the input.
//     let newNoteObject = {
//     'noteHeader': this.noteHeader.value,
//     'noteContent': this.noteContent.value,
//     'toDaysDate': new Date()
//     }

//     allNoteObjects.push(newNoteObject);                                   // Pushes the object to the array
//     console.log(allNoteObjects);


// //     localStorage.setItem('allNoteObjects', JSON.stringify(allNoteObjects)); // Stores array with all objects in local storage
    
// // var localObjects = localStorage.getItem('allNoteObjects');


    
// }

// function initNotebook(){
//     let notesHeader = document.querySelector('main h2');
//     notesHeader.textContent = 'Notebooks'; 

//     let mainNotes = document.getElementById('mainNotes');

//     let divNotebook = document.createElement('div');
//     divNotebook.id = 'divNotebook';
//     mainNotes.appendChild(divNotebook);

//     let section1 = document.createElement('section');
//     section1.id = 'section1';
//     divNotebook.appendChild(section1);

//     let divSeparator = document.createElement('div');
//     divSeparator.id= 'separator';
//     divNotebook.appendChild(divSeparator);

//     let section2 = document.createElement('section');
//     section2.id = 'section2';
//     divNotebook.appendChild(section2);

//     let buttonCreateNotebook = document.createElement('button');
//     buttonCreateNotebook.textContent = 'Create Notebook';
//     buttonCreateNotebook.id = 'buttonCreateNotebook';
//     section2.appendChild(buttonCreateNotebook);

//     buttonCreateNotebook.addEventListener('click', modalPopupNotebook);
// }
// // Creates popup modal with a form for adding a new notebook.
// function modalPopupNotebook(){
//     let notebookModal = document.createElement('div');
//     notebookModal.setAttribute('class', 'modal');
//     document.body.appendChild(notebookModal);

//     let notebookModalContent = document.createElement('div');
//     notebookModalContent.setAttribute('class', 'modalContent');
//     notebookModal.appendChild(notebookModalContent);

//     let notebookForm = document.createElement('form');
//     notebookForm.id = 'notebookForm';
//     notebookModalContent.appendChild(notebookForm);

//     let inputNotebookName = document.createElement('input');
//     inputNotebookName.id = 'notebookName';
//     inputNotebookName.setAttribute('placeholder', 'notebook name...');
//     inputNotebookName.setAttribute('type', 'text', 'name', 'notebookName');
//     notebookForm.appendChild(inputNotebookName);

//     let submitBtnNotebook = document.createElement('button');
//     submitBtnNotebook.id = 'submitBtnNotebook';
//     submitBtnNotebook.setAttribute('type','submit'); 
//     submitBtnNotebook.textContent = 'Create';
//     notebookForm.appendChild(submitBtnNotebook);

//     notebookForm.addEventListener('submit', handleNotebook);
// }

// function handleNotebook(e){
//     e.preventDefault();
//     saveNotebook();
    
//     let notebookModal = document.getElementsByClassName('modal')[0];
//     document.body.removeChild(notebookModal);
// }

// // Creates an empty array for notebookobjects.
// let allNotebooks = [];

// function saveNotebook(){
//     let notebookObject = {
//         'notebookName': this.notebookName.value,
//         'notebookDate': new Date()                                      //  If, in the future, would like to add date to notebooks.
//     }
    
//     // Pushes the object to the allNotebooksarray.
//     allNotebooks.push(notebookObject);

//     let notebook = document.createElement('button');
//     notebook.id = 'notebookElement';
//     notebook.textContent = notebookObject.notebookName;
//     section1.appendChild(notebook);

    

//     // let inputSeconBreak = document.createElement('br');
//     // form.appendChild(inputSeconBreak); Ifall vi behöver sortera på något sätt i framtida behov.    
// }

// function login(){
//     //  creates the modals.
//     let loginModal = document.createElement('div');
//     loginModal.setAttribute('class', 'modal');
//     document.body.appendChild(loginModal);
//     loginModal.style.display = 'block';

//     let loginModalContent = document.createElement('div');
//     loginModalContent.setAttribute('class', 'modalContent');
//     loginModal.appendChild(loginModalContent);
    

//     // creates the contents for the login modal.
//     let loginInputForm = document.createElement('form');
//     loginInputForm.id = 'usernameInputForm';
//     loginModalContent.appendChild(loginInputForm);

//     let userNameInputField = document.createElement('input');
//     userNameInputField.id = 'userNameInputField';
//     userNameInputField.setAttribute('placeholder', 'username...')
//     userNameInputField.setAttribute('type', 'text', 'name', 'username');
//     loginInputForm.appendChild(userNameInputField);

//     let password = document.createElement('input');
//     password.id = 'passwordInputForm';
//     password.setAttribute('placeholder', 'password...')
//     password.setAttribute('type', 'password', 'name', 'password');
//     loginInputForm.appendChild(password);

//     let submitLoginFormBTN = document.createElement('button');
//     submitLoginFormBTN.id = 'submitLoginFormBTN';
//     submitLoginFormBTN.textContent = 'Login';
//     loginInputForm.appendChild(submitLoginFormBTN);
//     submitLoginFormBTN.addEventListener('click', )
// }

// // function saveLocal(){
// //     for(let i = 0; i < allNoteObjects.length; i++){
// //         localStorage.setItem('allNoteObjects', JSON.stringify([allNoteObjects[i]])); // Stores array with all objects in local storage

// //     }
// // }

// // function loadLocal(){
// //     for(let i = 0; i < allNoteObjects.length; i++){
// //         let localObject = JSON.parse(localStorage.getItem('allNoteObjects'));
// //         console.log(localObject[i]);
// //     }
// // }

// function displayNote(){
//     let notesHeader = document.querySelector('main h2');
//     notesHeader.textContent = 'Notes';

//     // var localObjects = localStorage.getItem('allNoteObjects');

//     // allNoteObjects = JSON.parse(localObjects); //var test is now re-loaded!

//     // var noteHeader = newNoteObject['noteHeader'];
//     // var noteCOnten = newNoteObject['noteContent'];
  

    
//     // Applies to each object in the array.
//     allNoteObjects.forEach(function(notepad) {
//         localStorage.setItem('allNotes', JSON.stringify(notepad));
//         let localNotepad = JSON.parse(localStorage.getItem('allNotes'));
//         let noteHead = localNotepad['noteHeader'];
//         console.log(localNotepad);

//         let mainNotesWrapper = document.getElementById('mainNotes');
//         mainNotesWrapper.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap');  //  inline styling is used to not colide with other mains.

//         let divForWrapperAndButton = document.createElement('div');
//         divForWrapperAndButton.setAttribute('class', 'divForWrapper AndButton');
//         mainNotesWrapper.appendChild(divForWrapperAndButton);

//         let notePaper = document.createElement('div');
//         notePaper.setAttribute('class', 'notePaper');
//         divForWrapperAndButton.appendChild(notePaper);

//         let noteHeader = document.createElement('h4');
//         noteHeader.textContent = noteHead; // ÄNDRA TILLBAKA TILL notepad.noteHeader

//         let toDaysDate = document.createElement('h6');
//         toDaysDate.textContent = notepad.toDaysDate;
    
//         let noteContent = document.createElement('span');
//         noteContent.textContent = notepad.noteContent;

//         notePaper.appendChild(noteHeader);
//         notePaper.appendChild(noteContent);
//         notePaper.prepend(toDaysDate);

//         //  Creates the circles for the paper.
//         let circleDivContainerOne = document.createElement('div')
//         circleDivContainerOne.setAttribute('class', 'circleDivContainer');
//         let circleDivOne = document.createElement('div')
//         circleDivOne.setAttribute('class', 'circleDiv');
//         let circleDivTwo = document.createElement('div')
//         circleDivTwo.setAttribute('class', 'circleDiv');

//         let circleDivContainerTwo = document.createElement('div')
//         circleDivContainerTwo.setAttribute('class', 'circleDivContainer');
//         circleDivContainerTwo.setAttribute('style', 'margin-top: 300px');           // Pushes the containers apart.
//         let circleDivThree = document.createElement('div')
//         circleDivThree.setAttribute('class', 'circleDiv');
//         let circleDivFour = document.createElement('div')
//         circleDivFour.setAttribute('class', 'circleDiv');

//         //  Appends the circles to the paper.
//         notePaper.appendChild(circleDivContainerOne);
//         circleDivContainerOne.appendChild(circleDivOne);
//         circleDivContainerOne.appendChild(circleDivTwo);
//         notePaper.appendChild(circleDivContainerTwo);
//         circleDivContainerTwo.appendChild(circleDivThree);
//         circleDivContainerTwo.appendChild(circleDivFour);  
        
//         let deleteButton = document.createElement('button');
//         deleteButton.id = 'deleteButton';
//         deleteButton.textContent = 'Delete note';

//         divForWrapperAndButton.appendChild(deleteButton);
//         deleteButton.addEventListener('click', deleteNote); 

//         // let allNoteObjectsLocal = JSON.parse(localStorage.getItem('allNoteObjects'));
//         // console.log(allNoteObjects);
//         // JSON.parse(localStorage.getItem('allNoteObjects'));

       
//     });
// }



// function deleteNote(e){
//     allNoteObjects.splice(e.target.parentElement, 1);   
//     localStorage.clear();            // Takes away the object from the array.
//     // localStorage.removeItem(allNoteObjects[0]);                     //IN PROGRESS
//     let removePaper = e.target.parentElement;
//     removePaper.parentElement.removeChild(removePaper);             // Takes away the paper connected to the BTN.
// }

// // let localObjects = JSON.parse(localStorage.getItem('allNoteObjects'));
//     // console.log(localObjects);
// document.addEventListener('DOMContentLoaded', init);
