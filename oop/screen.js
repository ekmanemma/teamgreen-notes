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

    saveNotebook(){
        let notebookObject = {
            'notebookName': notebookName.value,
        }
        
        NotesHandler.addNotebook(notebookObject);                  
        
        let notebook = document.createElement('button');
        notebook.setAttribute('id', 'notebookElement');
        notebook.textContent = notebookObject.notebookName;
        section1.appendChild(notebook);
    }
    
    removeMe(){
    this.mainWrapper.removeChild(this.mainTwo); //tar bort main där allt ligger
  }
}

