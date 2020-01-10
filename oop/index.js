//CHANGES
var NotesHandler = {
    allNoteObjects: [],
    allNotebooks: [],
    
    }
                 


class Main {
    constructor(){
        this.init();
        this.addNavEventListeners();
        this.showLoggedInUser();

        //CHANGES
        this.localNotes = JSON.parse(localStorage.getItem('allNoteObjects'));
        NotesHandler.allNoteObjects.push(this.localNotes);                                   // Pushes the object to the array

        this.localNotebooks = JSON.parse(localStorage.getItem('allNotebooks'));
        NotesHandler.allNotebooks.push(this.localNotebooks);                                   // Pushes the object to the array

        console.log(NotesHandler);
        
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
            new Login();
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
    }

    activeListItem (e) {
        this.allListItems = document.querySelectorAll('li');
        this.allListItems.forEach(function(listItem){
            listItem.removeAttribute('class');
        });
        e.target.setAttribute('class', 'active'); 
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


