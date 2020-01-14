//CHANGES
var NotesHandler = {
    currentIndex: -1,
    allNoteObjects: [],
    allNotebooks: [],

    addNote: function(newNoteObject){
        this.allNoteObjects.push(newNoteObject);  
        localStorage.setItem('allNoteObjects', JSON.stringify(this.allNoteObjects)); // Stores array with all objects in local storage
        this.currentIndex++;
        localStorage.setItem('currentIndex', this.currentIndex); // Stores array with all objects in local storage

    },
    removeNote: function(e){
        this.allNoteObjects.splice(e.target.parentElement, 1);        // Takes away the object from the array.
        localStorage.setItem('allNoteObjects', JSON.stringify(this.allNoteObjects)); // Stores array with all objects in local storage

        // for future function to delete the right note from LS
        let currentIndexLS = JSON.parse(localStorage.getItem("currentIndex"));

        let removePaper = e.target.parentElement;
        removePaper.parentElement.removeChild(removePaper);

    },
    editNote: function(e){
        const previousHeaderContent = e.target.parentElement.firstChild.children[1].textContent;
        const previousTextContent = e.target.parentElement.firstChild.children[2].textContent;
        const main = document.getElementById('mainNotes');
        main.firstChild.textContent = 'Edit note';
        main.lastChild.lastChild.firstChild.textContent = 'Save';
        document.getElementById('noteHeader').value = previousHeaderContent;
        document.getElementById('noteContent').value = previousTextContent;
    },
    loadNotesFromLS: function(){
        let objectsInLocalStorage = JSON.parse(localStorage.getItem("allNoteObjects"));
        this.allNoteObjects = objectsInLocalStorage || [];
    },
    addNotebook: function(notebookObject){
        this.allNotebooks.push(notebookObject);  
        localStorage.setItem('allNotebooks', JSON.stringify(this.allNotebooks)); // Stores array with all objects in local storage
        // this.currentIndex++;
        // localStorage.setItem('currentIndex', this.currentIndex); // Stores array with all objects in local storage
    },
    loadNotebooksFromLS: function(){

        let notebooksInLocalStorage = JSON.parse(localStorage.getItem("allNotebooks"));
        
        if(notebooksInLocalStorage){
            this.allNotebooks = notebooksInLocalStorage;
        } else {
            this.allNotebooks = [];
        }
    },
    saveFormToObject: function(header, content, styles){

        // Creates object that saves value from the input.
        let newNoteObject = {
            noteHeader: header,
            noteContent: content,
            toDaysDate: new Date(),
            noteIndex: this.currentIndex,
            styles: styles
        }
        this.addNote(newNoteObject);                                   // Pushes the object to the array
    },
    addNavEventListeners: function () {

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
            this.changeScreen('newNoteScreen');
        });
        this.allListItems[1].addEventListener('click', (e) => {
            this.activeListItem(e);  
            this.changeScreen('noteScreen');
        });
        this.allListItems[2].addEventListener('click', (e) => {
            this.activeListItem(e);
            this.changeScreen('notebookScreen');
        });
    },
    activeListItem: function (e) {
        this.allListItems = document.querySelectorAll('li');
        this.allListItems.forEach(function(listItem){
            listItem.removeAttribute('class');
        });
        e.target.setAttribute('class', 'active'); 
    },
    saveFormToObject: function(header, content, styles){

        // Creates object that saves value from the input.
        let newNoteObject = {
            noteHeader: header,
            noteContent: content,
            toDaysDate: new Date(),
            noteIndex: this.currentIndex,
            styles: styles
        }
        this.addNote(newNoteObject);                                   // Pushes the object to the array
    },
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

class Main {
    constructor(){
        this.init();
        this.showLoggedInUser();
        NotesHandler.addNavEventListeners();
        NotesHandler.loadNotesFromLS();
        NotesHandler.loadNotebooksFromLS();
        NotesHandler.changeScreen('noteScreen');
    }    

    // Initializes the UI.
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
            new Login();
        });

        //  Creates the list with navigation. 
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
}

document.addEventListener('DOMContentLoaded', function(){
    new Main();
});


