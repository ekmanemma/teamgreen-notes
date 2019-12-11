

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
}

document.addEventListener('DOMContentLoaded', init);



