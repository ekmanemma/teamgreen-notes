

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





function addNavEventListeners() {
    const allListItems = document.querySelectorAll('li');
    allListItems[0].addEventListener('click', btnNewNote);
    allListItems[1].addEventListener('click', btnNotes);
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

    let submitBreak = document.createElement('br');
    form.appendChild(submitBreak);

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.textContent='Create New Note';
    form.appendChild(submitButton);

    // form.addEventListener('submit',function(e){
    //     e.preventDefault();
    //     e.target.reset();
    // });

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

//funkade ej med contentnamnet så fick ändra
// let newNoteObject = {
//     noteHeader: '',
//     contentHeader: ''
// }

//creates an empty array
let allNoteObjects = [];

//function that saves form input to object
function saveFormToObject(){

    //object that saves the value of the input
    let newNoteObject = {
        'noteHeader': this.noteHeader.value,
        'noteContent': this.noteContent.value
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






















































































// ÅSAS RADER



































































































// OSCARS RADER


function displayNote(){
    allNoteObjects.forEach(function(notePad) {
        let mainNotesWrapper = document.getElementById('mainNotes');
        mainNotesWrapper.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap');
        let noteDivWrapper = document.createElement('div');
        noteDivWrapper.setAttribute('class', 'noteDivWrapper');
        
        let noteHeader = document.createElement('h4');
        noteHeader.textContent = notePad.noteHeader;
    
        let noteContent = document.createElement('span');
        noteContent.textContent = notePad.noteContent;



        mainNotesWrapper.appendChild(noteDivWrapper);
        noteDivWrapper.appendChild(noteHeader);
        noteDivWrapper.appendChild(noteContent);


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
    });

}





























document.addEventListener('DOMContentLoaded', init);
