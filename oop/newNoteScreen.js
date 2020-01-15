class NewNoteScreen extends Screen {
    styles = [];

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

        //adding element for styling
        this.stylingNotes = document.createElement('div');
        this.stylingNotes.id = 'stylingNotes';
        this.form.appendChild(this.stylingNotes);

        this.btnForBold = document.createElement('button');
        this.btnForBold.textContent = 'B';
        this.btnForBold.setAttribute('class', 'stylingButton');
        this.btnForBold.setAttribute('type', 'button');

        this.stylingNotes.appendChild(this.btnForBold);

        this.btnForUnderline = document.createElement('button');
        this.btnForUnderline.textContent = 'U';
        this.btnForUnderline.setAttribute('class', 'stylingButton');
        this.btnForUnderline.setAttribute('id', 'btnForUnderline');
        this.btnForUnderline.setAttribute('type', 'button');
        this.stylingNotes.appendChild(this.btnForUnderline);

        this.btnForSmall = document.createElement('button');
        this.btnForSmall.textContent = '10px';
        this.btnForSmall.setAttribute('class', 'stylingButton');
        this.btnForSmall.setAttribute('id', 'btnForSmall');
        this.btnForSmall.setAttribute('type', 'button');
        this.stylingNotes.appendChild(this.btnForSmall);

        this.btnForBig = document.createElement('button');
        this.btnForBig.textContent = '24px';
        this.btnForBig.setAttribute('class', 'stylingButton');
        this.btnForBig.setAttribute('id', 'btnForBig');
        this.btnForBig.setAttribute('type', 'button');
        this.stylingNotes.appendChild(this.btnForBig);
    
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
    
        // this.inputText = document.createElement('textarea');
        // this.inputText.id = 'noteContent'; 
        // this.inputText.setAttribute('type', 'text', 'name', 'noteContent');
        // this.form.appendChild(this.inputText);

        this.inputText = document.createElement('div');
        this.inputText.id = 'noteContent';
        this.inputText.setAttribute('contenteditable', 'true');
        this.inputText.setAttribute('type', 'text', 'name, noteContent');
        this.form.appendChild(this.inputText);
    
        this.toDay = document.createElement('Date');
        this.toDay.id = 'toDaysDate';
        this.toDay.setAttribute('type', 'text', 'name', 'toDaysDate');
        this.form.prepend(this.toDay);     
        
        //adding event on styling buttons, changes styling
        this.btnForBold.addEventListener('click', () =>{
            document.execCommand('bold');
        });

        this.btnForUnderline.addEventListener('click', () =>{
            document.execCommand('underline');

        });

        this.btnForSmall.addEventListener('click', () =>{
            this.contentText = document.getElementById('noteContent');
            this.contentText.style = 'font-size: 10px';
            this.styles.push('tenpx');
            
        });

        this.btnForBig.addEventListener('click', () =>{
            this.contentText = document.getElementById('noteContent');
            this.contentText.style = 'font-size: 24px';
            this.styles.push('twenty4px');
        });
    
        this.submitButton = document.createElement('button');
        this.submitButton.setAttribute('type','submit');
        this.submitButton.textContent = 'Create New Note';
        this.form.appendChild(this.submitButton);
        this.submitButton.addEventListener('click',(e) => {
            e.preventDefault();
            let inputTextInDiv = document.getElementById('noteContent');

            NotesHandler.saveFormToObject(noteHeader.value, inputTextInDiv.innerHTML, this.styles);
            this.form.reset();
            inputTextInDiv.innerHTML = '';
        });              
    }
}
