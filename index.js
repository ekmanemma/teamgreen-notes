

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
    form.addEventListener('submit', handleForm)
}

function btnNotes (){
    generell();
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
    inputHeader.setAttribute('type', 'text');
    inputHeader.id = 'noteHeader';
    form.appendChild(inputHeader);

    let inputBreak = document.createElement('br');
    form.appendChild(inputBreak);

    let labelTextarea = document.createElement('label');
    labelTextarea.textContent = 'Content';
    form.appendChild(labelTextarea);

    let inputText = document.createElement('textarea');
    inputText.id='noteContent'; 
    inputText.setAttribute('cols', '45');
    inputText.setAttribute('rows', '45');
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

    form.addEventListener('submit',handleForm);
 
}





//EMMAS RADER

function handleSubmit(e) {
    e.preventDefault();

    e.target.reset();
}

let newNoteObject = {
    noteHeader: '',
    contentHeader: ''
}























































































// ÅSAS RADER



































































































// OSCARS RADER


























document.addEventListener('DOMContentLoaded', init);
