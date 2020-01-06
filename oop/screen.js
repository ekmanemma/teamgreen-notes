let allNoteObjects = [];
let allNotebooks = [];

class Screen {

    constructor(){
        this.createMainContent();
        
    }

    createMainContent (){
        this.mainWrapper = document.getElementById('mainWrapper');
        this.mainTwo = document.createElement('main');
        this.mainTwo.id = 'mainNotes';
        this.mainWrapper.appendChild(this.mainTwo);
        this.notesHeader = document.createElement('h2');
        this.notesHeader.textContent = this.content;
        this.mainTwo.appendChild(this.notesHeader);
    }

    saveFormToObject(){

        // Creates object that saves value from the input.
        let newNoteObject = {
        'noteHeader': noteHeader.value,
        'noteContent': noteContent.value,
        'toDaysDate': new Date()
        }

        allNoteObjects.push(newNoteObject);                                   // Pushes the object to the array
        localStorage.setItem('allNoteObjects', JSON.stringify(allNoteObjects)); // Stores array with all objects in local storage
    }

    saveNotebook(){
        let notebookObject = {
            'notebookName': notebookName.value,
            'notebookDate': new Date()                                      //  If, in the future, would like to add date to notebooks.
        }
        
        // Pushes the object to the allNotebooksarray.
        allNotebooks.push(notebookObject);
        localStorage.setItem('allNotebooks', JSON.stringify(allNotebooks));

    
        // localNotebook.foreach(function(book){
        //     let notebook = document.createElement('button');
        //     notebook.setAttribute('class', 'notebookElement');
        //     notebook.textContent = book.notebookName;
        //     section1.appendChild(notebook);
        // })

    
        // let inputSeconBreak = document.createElement('br');
        // form.appendChild(inputSeconBreak); Ifall vi behöver sortera på något sätt i framtida behov.    
    }
    
    removeMe(){
    this.mainWrapper.removeChild(this.mainTwo); //tar bort main där allt ligger
  }
}


    // login = () => {
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
    //     // submitLoginFormBTN.addEventListener('click', btNewNote)
    // }

    // addNavEventListeners () {
    //     const allListItems = document.querySelectorAll('li');
    //     allListItems[0].addEventListener('click', () =>{
    //         this.activeListItem();
    //         // this.createMainContent();
    //         this.changeScreen('newNoteScreen');

    //         // this.createNoteForm();
    //     });
    //     allListItems[1].addEventListener('click', () => {
    //         this.activeListItem();  
    //         // this.createMainContent();
    //         this.changeScreen('noteScreen');
    //     });
    //     allListItems[2].addEventListener('click', () => {
    //         this.activeListItem();
    //         // this.createMainContent();
    //         this.changeScreen('notebookScreen');

    //     });
    // }

    // activeListItem () {
    //     const allListItems = document.querySelectorAll('li');
    //     allListItems.forEach(function(listItem){
    //         listItem.removeAttribute('class');
    //     });
    //     // e.target.setAttribute('class', 'active');
    // }
    

    
    // createMainContent (){
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
  
    // removeMe(){
    //     document.body.removeChild(this.main);
    //   }

    // changeScreen(screenType){
    //     if(this.activeScreen) this.activeScreen.removeMe();
    
    //     switch(screenType) {
    //       case 'newNoteScreen':
    //         this.activeScreen = new NewNoteScreen();
    //         break;
    //       case 'noteScreen':
    //         this.activeScreen = new NoteScreen();
    //         break;
    //         case 'notebookScreen':
    //         this.activeScreen = new NotebookScreen();
    //         break;
    //       default:
    //         this.activeScreen = new Screen();
    //     }
    // }



    


// document.addEventListener('DOMContentLoaded', function(){
//     new Screen();
// });