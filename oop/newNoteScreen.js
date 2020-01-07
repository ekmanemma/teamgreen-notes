class NewNoteScreen extends Screen {
    
    constructor(){
        super();
        this.createNoteForm();
    }

    createNoteForm() {
        this.notesHeader = document.querySelector('main h2');
        this.notesHeader.textContent = 'New note';
        this.mainNotes = document.getElementById('mainNotes');
    
        this.form = document.createElement('form');
        this.form.id = 'formNewNote';
        this.mainNotes.appendChild(this.form);
    
        this.labelInputHeader = document.createElement('label');
        this.labelInputHeader.textContent = 'Header';
        this.form.appendChild(this.labelInputHeader);
    
        this.inputHeader = document.createElement('input');
        this.inputHeader.setAttribute('type', 'text', 'name', 'noteHeader');
        this.inputHeader.id = 'noteHeader';
        this.form.appendChild(this.inputHeader);
    
        this.labelTextarea = document.createElement('label');
        this.labelTextarea.textContent = 'Content';
        this.form.appendChild(this.labelTextarea);
    
        this.inputText = document.createElement('textarea');
        this.inputText.id='noteContent'; 
        this.inputText.setAttribute('type', 'text', 'name', 'noteContent');
        this.form.appendChild(this.inputText);
    
        this.toDay = document.createElement('Date');
        this.toDay.id = 'toDaysDate';
        this.toDay.setAttribute('type', 'text', 'name', 'toDaysDate');
        this.form.prepend(this.toDay);                                                // Preoritizes this element before other when placing.
    
        this.submitButton = document.createElement('button');
        this.submitButton.setAttribute('type','submit');
        this.submitButton.textContent = 'Create New Note';
        this.form.appendChild(this.submitButton);
        this.form.addEventListener('submit',(e) => {
            e.preventDefault();
            this.saveFormToObject();
            this.form.reset();
        });                      
     
    }
}
