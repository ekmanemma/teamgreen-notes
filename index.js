

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
    notesHeader = document.querySelector('main h2');
    notesHeader.textContent = 'New note';
}

function btnNotes (){
    generell();
    notesHeader = document.querySelector('main h2');
    notesHeader.textContent = 'Notes';
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


document.addEventListener('DOMContentLoaded', init);



let mainNotes = document.createElement('main');
mainNotes.id = 'mainNotes';