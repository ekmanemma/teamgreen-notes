class NoteScreen extends Screen {

    constructor(){
        super();
        this.displayNote();

    }

    displayNote(){
        this.notesHeader = document.querySelector('main h2');
        this.notesHeader.textContent = 'Notes';

        // Applies to each object in the array.
         NotesHandler.allNoteObjects.forEach(function(notePad) {
            let mainNotesWrapper = document.getElementById('mainNotes');
            mainNotesWrapper.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap');  //  inline styling is used to not colide with other mains.
    
            let divForWrapperAndButton = document.createElement('div');
            divForWrapperAndButton.setAttribute('class', 'divForWrapperAndButton');
            mainNotesWrapper.appendChild(divForWrapperAndButton);
    
            let notePaper = document.createElement('div');
            notePaper.setAttribute('class', 'notePaper');
            divForWrapperAndButton.appendChild(notePaper);
    
            let noteHeader = document.createElement('h4');
            let headerContent = noteHeader.textContent = notePad.noteHeader; 
    
            let toDaysDate = document.createElement('h6');
            toDaysDate.textContent = notePad.toDaysDate;
        
            let noteContent = document.createElement('span');
            const noteText = noteContent.textContent = notePad.noteContent;
    
            notePaper.appendChild(noteHeader);
            notePaper.appendChild(noteContent);
            notePaper.prepend(toDaysDate);
    
            //  Creates the circles for the paper.
            let circleDivContainerOne = document.createElement('div')
            circleDivContainerOne.setAttribute('class', 'circleDivContainer');
            let circleDivOne = document.createElement('div')
            circleDivOne.setAttribute('class', 'circleDiv');
            let circleDivTwo = document.createElement('div')
            circleDivTwo.setAttribute('class', 'circleDiv');
    
            let circleDivContainerTwo = document.createElement('div')
            circleDivContainerTwo.setAttribute('class', 'circleDivContainer');
            circleDivContainerTwo.setAttribute('style', 'margin-top: 300px');           // Pushes the containers apart.
            let circleDivThree = document.createElement('div')
            circleDivThree.setAttribute('class', 'circleDiv');
            let circleDivFour = document.createElement('div')
            circleDivFour.setAttribute('class', 'circleDiv');
    
            //  Appends the circles to the paper.
            notePaper.appendChild(circleDivContainerOne);
            circleDivContainerOne.appendChild(circleDivOne);
            circleDivContainerOne.appendChild(circleDivTwo);
            notePaper.appendChild(circleDivContainerTwo);
            circleDivContainerTwo.appendChild(circleDivThree);
            circleDivContainerTwo.appendChild(circleDivFour); 
            
            let editButton = document.createElement('button');
            editButton.id = 'editButton';
            editButton.textContent = 'Edit';
            divForWrapperAndButton.appendChild(editButton);
            editButton.addEventListener('click', (e) => {
                NotesHandler.activeListItem(e);
                NotesHandler.changeScreen('newNoteScreen');
                NotesHandler.editNote(e);
                NotesHandler.removeNote(e);
           
            
            }); 
            
            let deleteButton = document.createElement('button');
            deleteButton.id = 'deleteButton';
            deleteButton.textContent = 'Delete note';
            divForWrapperAndButton.appendChild(deleteButton);
            deleteButton.addEventListener('click', (e) => {
                NotesHandler.removeNote(e);
            }); 
        });
    }
    
}