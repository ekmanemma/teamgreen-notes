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
    }
    
    removeMe(){
    this.mainWrapper.removeChild(this.mainTwo); //tar bort main där allt ligger
  }
}

