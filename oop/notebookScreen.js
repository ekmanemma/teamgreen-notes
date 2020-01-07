class NotebookScreen extends Screen {
    
    constructor(){
        super();
        this.initNotebook();
        // this.modalPopupNotebook();
        // this.handleNotebook();
        // this.saveNotebook();
    }

    initNotebook(){
        let notesHeader = document.querySelector('main h2');
        notesHeader.textContent = 'Notebooks'; 
        let localNotebook = JSON.parse(localStorage.getItem('allNotebooks'));
        console.log(localNotebook);

        let mainNotes = document.getElementById('mainNotes');
    
        let divNotebook = document.createElement('div');
        divNotebook.id = 'divNotebook';
        mainNotes.appendChild(divNotebook);
    
        let section1 = document.createElement('section');
        section1.id = 'section1';
        divNotebook.appendChild(section1);

       
    
        let divSeparator = document.createElement('div');
        divSeparator.id= 'separator';
        divNotebook.appendChild(divSeparator);
    
        let section2 = document.createElement('section');
        section2.id = 'section2';
        divNotebook.appendChild(section2);
    
        let buttonCreateNotebook = document.createElement('button');
        buttonCreateNotebook.textContent = 'Create Notebook';
        buttonCreateNotebook.id = 'buttonCreateNotebook';
        section2.appendChild(buttonCreateNotebook);
    
        buttonCreateNotebook.addEventListener('click', (e) => {
            let notebookModal = document.createElement('div');
            notebookModal.setAttribute('class', 'modal');
            document.body.appendChild(notebookModal);
        
            let notebookModalContent = document.createElement('div');
            notebookModalContent.setAttribute('class', 'modalContent');
            notebookModal.appendChild(notebookModalContent);
        
            let notebookForm = document.createElement('form');
            notebookForm.id = 'notebookForm';
            notebookModalContent.appendChild(notebookForm);
        
            let inputNotebookName = document.createElement('input');
            inputNotebookName.id = 'notebookName';
            inputNotebookName.setAttribute('placeholder', 'notebook name...');
            inputNotebookName.setAttribute('type', 'text', 'name', 'notebookName');
            notebookForm.appendChild(inputNotebookName);
        
            let submitBtnNotebook = document.createElement('button');
            submitBtnNotebook.id = 'submitBtnNotebook';
            submitBtnNotebook.setAttribute('type','submit'); 
            submitBtnNotebook.textContent = 'Create';
            notebookForm.appendChild(submitBtnNotebook);

            notebookForm.addEventListener('submit', (e) =>{
                e.preventDefault();
                this.saveNotebook(e);
                this.notebookModal = document.getElementsByClassName('modal')[0];
                document.body.removeChild(this.notebookModal);    
                
            });
            //VET EJ VAR LIGGA
           
           
        });
    
        localNotebook.forEach(function(book){
            let notebook = document.createElement('button');
            notebook.setAttribute('id', 'notebookElement');
            notebook.textContent = book.notebookName;
            section1.appendChild(notebook);
        })
        
    }

    // modalPopupNotebook(){
    //     let notebookModal = document.createElement('div');
    //     notebookModal.setAttribute('class', 'modal');
    //     document.body.appendChild(notebookModal);
    
    //     let notebookModalContent = document.createElement('div');
    //     notebookModalContent.setAttribute('class', 'modalContent');
    //     notebookModal.appendChild(notebookModalContent);
    
    //     let notebookForm = document.createElement('form');
    //     notebookForm.id = 'notebookForm';
    //     notebookModalContent.appendChild(notebookForm);
    
    //     let inputNotebookName = document.createElement('input');
    //     inputNotebookName.id = 'notebookName';
    //     inputNotebookName.setAttribute('placeholder', 'notebook name...');
    //     inputNotebookName.setAttribute('type', 'text', 'name', 'notebookName');
    //     notebookForm.appendChild(inputNotebookName);
    
    //     let submitBtnNotebook = document.createElement('button');
    //     submitBtnNotebook.id = 'submitBtnNotebook';
    //     submitBtnNotebook.setAttribute('type','submit'); 
    //     submitBtnNotebook.textContent = 'Create';
    //     notebookForm.appendChild(submitBtnNotebook);
    
    //     notebookForm.addEventListener('submit', handleNotebook);
    // }
    
    // handleNotebook(e){
    //     e.preventDefault();
    //     saveNotebook();
        
    //     let notebookModal = document.getElementsByClassName('modal')[0];
    //     document.body.removeChild(notebookModal);
    // }
    
    // Creates an empty array for notebookobjects.
    
    // saveNotebook(){
    //     let notebookObject = {
    //         'notebookName': this.notebookName.value,
    //         'notebookDate': new Date()                                      //  If, in the future, would like to add date to notebooks.
    //     }
        
    //     // Pushes the object to the allNotebooksarray.
    //     allNotebooks.push(notebookObject);
    
    //     let notebook = document.createElement('button');
    //     notebook.id = 'notebookElement';
    //     notebook.textContent = notebookObject.notebookName;
    //     section1.appendChild(notebook);
    
    //     // let inputSeconBreak = document.createElement('br');
    //     // form.appendChild(inputSeconBreak); Ifall vi behöver sortera på något sätt i framtida behov.    
    // }

    // removeMe(){
    //     document.body.removeChild(this.element);

    // }
    // removeMe(){
    //     let main = document.getElementById('mainNotes');
    //     main.parentElement.removeChild(main);
        
    //     // adds a new main and h2
    //     let mainTwo = document.createElement('main');
    //     mainTwo.id = 'mainNotes';
    //     mainWrapper.appendChild(mainTwo);
    //     let notesHeader = document.createElement('h2');
    //     mainTwo.appendChild(notesHeader);
    //   }
    
}