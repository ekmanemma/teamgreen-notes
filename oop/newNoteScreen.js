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
        this.btnForSmall.textContent = '14px';
        this.btnForSmall.setAttribute('class', 'stylingButton');
        this.btnForSmall.setAttribute('id', 'btnForSmall');
        this.btnForSmall.setAttribute('type', 'button');
        this.stylingNotes.appendChild(this.btnForSmall);

        this.btnForBig = document.createElement('button');
        this.btnForBig.textContent = '22px';
        this.btnForBig.setAttribute('class', 'stylingButton');
        this.btnForBig.setAttribute('id', 'btnForBig');
        this.btnForBig.setAttribute('type', 'button');
        this.stylingNotes.appendChild(this.btnForBig);

        

        // this.btnForBold.addEventListener('click', (e) =>{
        //     this.contentSpan = document.getElementsByTagName('span');
        //     this.contentSpan.style = 'color: green';
        // })

    
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
        this.inputText.id = 'noteContent'; 
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

        this.btnForBold.addEventListener('click', (e) =>{
            // this.contentSpan = document.getElementsByTagName('span');
            // this.contentSpan.style = 'color: green';
            this.contentText = document.getElementById('noteContent');
            this.contentText.style = 'font-weight: bold';
        });

        this.btnForUnderline.addEventListener('click', (e) =>{
            // this.contentSpan = document.getElementsByTagName('span');
            // this.contentSpan.style = 'color: green';
            this.contentText = document.getElementById('noteContent');
            this.contentText.style = 'text-decoration: underline';
        });

        this.btnForSmall.addEventListener('click', (e) =>{
            // this.contentSpan = document.getElementsByTagName('span');
            // this.contentSpan.style = 'color: green';
            this.contentText = document.getElementById('noteContent');
            this.contentText.style = 'font-size: 14px';
        });

        this.btnForBig.addEventListener('click', (e) =>{
            // this.contentSpan = document.getElementsByTagName('span');
            // this.contentSpan.style = 'color: green';
            this.contentText = document.getElementById('noteContent');
            this.contentText.style = 'font-size: 22px';
        });

        

            
        
     
    }
}
