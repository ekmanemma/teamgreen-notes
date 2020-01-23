class NoteScreen extends Screen {

	constructor(){
		super();
		this.displayNote();
	}

	displayNote(){
		const notesHeader = document.querySelector('main h2');
		notesHeader.textContent = 'Notes';

		// Applies to each object in the array.
		NotesHandler.allNoteObjects.forEach(function(notePad) {
			const mainNotesWrapper = document.getElementById('mainNotes');
			mainNotesWrapper.setAttribute('style', 'display: flex; flex-direction: row; flex-wrap: wrap');  //  inline styling is used to not colide with other mains.

			const divForWrapperAndButton = document.createElement('div');
			divForWrapperAndButton.setAttribute('class', 'divForWrapperAndButton');
			mainNotesWrapper.appendChild(divForWrapperAndButton);

			const notePaper = document.createElement('div');
			notePaper.setAttribute('class', 'notePaper');
			divForWrapperAndButton.appendChild(notePaper);

			const noteHeader = document.createElement('h4');
			noteHeader.textContent = notePad.noteHeader; 

			const toDaysDate = document.createElement('h6');
			toDaysDate.textContent = notePad.toDaysDate;
	
			const noteContent = document.createElement('span');
			noteContent.innerHTML = notePad.noteContent;

			notePad.styles.forEach(function(style){
				noteContent.className = style;
			})

			// SISTA FIX
			const imageTag = document.createElement('img');
			imageTag.setAttribute('src', notePad.image);
			imageTag.setAttribute('alt', 'myImage');
			noteContent.prepend(imageTag);
		

			notePaper.appendChild(noteHeader);
			notePaper.appendChild(noteContent);
			notePaper.prepend(toDaysDate);

			//  Creates the circles for the paper.
			const circleDivContainerOne = document.createElement('div')
			circleDivContainerOne.setAttribute('class', 'circleDivContainer');
			const circleDivOne = document.createElement('div')
			circleDivOne.setAttribute('class', 'circleDiv');
			const circleDivTwo = document.createElement('div')
			circleDivTwo.setAttribute('class', 'circleDiv');

			const circleDivContainerTwo = document.createElement('div')
			circleDivContainerTwo.setAttribute('class', 'circleDivContainer');
			circleDivContainerTwo.setAttribute('style', 'margin-top: 300px');           // Pushes the containers apart.
			const circleDivThree = document.createElement('div')
			circleDivThree.setAttribute('class', 'circleDiv');
			const circleDivFour = document.createElement('div')
			circleDivFour.setAttribute('class', 'circleDiv');

			//  Appends the circles to the paper.
			notePaper.appendChild(circleDivContainerOne);
			circleDivContainerOne.appendChild(circleDivOne);
			circleDivContainerOne.appendChild(circleDivTwo);
			notePaper.appendChild(circleDivContainerTwo);
			circleDivContainerTwo.appendChild(circleDivThree);
			circleDivContainerTwo.appendChild(circleDivFour);  

			const editButton = document.createElement('button');
			editButton.id = 'editButton';
			editButton.textContent = 'Edit';
			divForWrapperAndButton.appendChild(editButton);
			editButton.addEventListener('click', (e) => {
				Navigation.activeListItem(e);
				Navigation.changeScreen('newNoteScreen');
				NotesHandler.editNote(e);
				NotesHandler.removeNote(e);
			}); 
				
			const deleteButton = document.createElement('button');
			deleteButton.id = 'deleteButton';
			deleteButton.textContent = 'Delete note';
			divForWrapperAndButton.appendChild(deleteButton);
			deleteButton.addEventListener('click', (e) => {
				NotesHandler.removeNote(e);
			}); 

			const checkboxForDone = document.createElement('input');
			checkboxForDone.id = 'checkbox';
			checkboxForDone.setAttribute('type', 'checkbox');
			checkboxForDone.textContent = 'This note is DONE';
			divForWrapperAndButton.appendChild(checkboxForDone);

			const textForCheckbox = document.createElement('label');
			textForCheckbox.id = 'textForCheckbox';
			textForCheckbox.setAttribute('for', 'checkbox');
			textForCheckbox.textContent = 'This note is DONE';
			divForWrapperAndButton.appendChild(textForCheckbox);

			checkboxForDone.addEventListener('change', (e) =>{
		
				if(e.target.checked){
					e.target.parentElement.firstChild.style = 'background-color: mediumaquamarine';
				} else {
					e.target.parentElement.firstChild.style = '';
				}               
			});
		});
	}  
}