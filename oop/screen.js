//REMOVED ARRAYS
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
        'toDaysDate': new Date(),
        'noteIndex': NotesHandler.currentIndex
        }

        NotesHandler.addNote(newNoteObject);                                   // Pushes the object to the array
    }

    saveNotebook(){
        let notebookObject = {
            'notebookName': notebookName.value,
            'notebookDate': new Date()       // TA BORT                               //  If, in the future, would like to add date to notebooks.
        }
        
        // Pushes the object to the allNotebooksarray.
        NotesHandler.allNotebooks.push(notebookObject);
        localStorage.setItem('allNotebooks', JSON.stringify(notebookObject)); 
        
        //MOVED THIS HERE FROM NOTEBOOKSCREEN
            let notebook = document.createElement('button');
            notebook.setAttribute('id', 'notebookElement');
            notebook.textContent = notebookObject.notebookName;
            section1.appendChild(notebook);
        
    }
    
    removeMe(){
    this.mainWrapper.removeChild(this.mainTwo); //tar bort main där allt ligger
  }
}

