// Class for new notes with one method that creates the form and sends the input value to the object for notes
class NewNoteScreen extends Screen {
	styles = [];		//creates an array for styling attributes from form

	constructor(){
			super();
			this.createNoteForm();
	}

	createNoteForm() {
		const notesHeader = document.querySelector('main h2');
		notesHeader.textContent = 'New note';
		const mainNotes = document.getElementById('mainNotes');

		const form = document.createElement('form');
		form.id = 'formNewNote';
		mainNotes.appendChild(form);

		const stylingNotes = document.createElement('div');
		stylingNotes.id = 'stylingNotes';
		form.appendChild(stylingNotes);

		const btnForBold = document.createElement('button');
		btnForBold.textContent = 'B';
		btnForBold.setAttribute('class', 'stylingButton');
		btnForBold.setAttribute('type', 'button');
		stylingNotes.appendChild(btnForBold);

		const btnForUnderline = document.createElement('button');
		btnForUnderline.textContent = 'U';
		btnForUnderline.setAttribute('class', 'stylingButton');
		btnForUnderline.setAttribute('id', 'btnForUnderline');
		btnForUnderline.setAttribute('type', 'button');
		stylingNotes.appendChild(btnForUnderline);

		const btnForSmall = document.createElement('button');
		btnForSmall.textContent = '10px';
		btnForSmall.setAttribute('class', 'stylingButton');
		btnForSmall.setAttribute('type', 'button');
		stylingNotes.appendChild(btnForSmall);

		const btnForBig = document.createElement('button');
		btnForBig.textContent = '24px';
		btnForBig.setAttribute('class', 'stylingButton');
		btnForBig.setAttribute('type', 'button');
		stylingNotes.appendChild(btnForBig);

		const btnForUploadImage = document.createElement('input');
		btnForUploadImage.setAttribute('type', 'file');
		// btnForUploadImage.setAttribute('class', 'stylingButton');
		btnForUploadImage.textContent = 'upload image';
		btnForUploadImage.id = 'imageUpload';
		stylingNotes.appendChild(btnForUploadImage);

		btnForUploadImage.addEventListener('change', () =>{
			const fileInput = document.getElementById('imageUpload')
			const photo = document.createElement('img');
			photo.id = 'imgtag';
			stylingNotes.appendChild(photo);

			// If chosen file matches imgType new fileReader, creates and imgtag to display and sets img.src
			let file = fileInput.files[0];  
			let imgType = /image.*/;

			if (file.type.match(imgType)) {
				let reader = new FileReader();

				reader.onload = function() {
					let imgtag = document.getElementById('imgtag')
					imgtag.src = reader.result;
				} 
				reader.readAsDataURL(file);  

				} else {
					imgTag.src = null;
				}
		})

		const labelInputHeader = document.createElement('label');
		labelInputHeader.textContent = 'Header';
		form.appendChild(labelInputHeader);

		const inputHeader = document.createElement('input');
		inputHeader.setAttribute('type', 'text', 'name', 'noteHeader');
		inputHeader.id = 'noteHeader';
		form.appendChild(inputHeader);

		const labelTextarea = document.createElement('label');
		labelTextarea.textContent = 'Content';
		form.appendChild(labelTextarea);

		const inputText = document.createElement('div');
		inputText.id = 'noteContent';
		inputText.setAttribute('contenteditable', 'true');
		inputText.setAttribute('type', 'text', 'name, noteContent');
		form.appendChild(inputText);

		const toDay = document.createElement('Date');
		toDay.id = 'toDaysDate';
		toDay.setAttribute('type', 'text', 'name', 'toDaysDate');
		form.prepend(toDay);     

		const submitButton = document.createElement('button');
		submitButton.setAttribute('type','submit');
		submitButton.textContent = 'Create New Note';
		form.appendChild(submitButton);
		
		// Using execCommand to add <b> and <u> to the selected text to in the form 
		btnForBold.addEventListener('click', () =>{
			document.execCommand('bold');
		});

		btnForUnderline.addEventListener('click', () =>{
			document.execCommand('underline');
		});

		//pushes the chosen styling to the styles-array and send it to the object when submit
		btnForSmall.addEventListener('click', () =>{
			const divForContent = document.getElementById('noteContent');
			divForContent.style = 'font-size: 10px';
			this.styles.push('tenpx');
		});

		btnForBig.addEventListener('click', () =>{
			const divForContent = document.getElementById('noteContent');
			divForContent.style = 'font-size: 24px';
			this.styles.push('twenty4px');
		});

		//When submit form, all input values as sent to the object
		submitButton.addEventListener('click',(e) => {
			e.preventDefault();
			let inputTextInDiv = document.getElementById('noteContent');
			let imgTag = document.getElementById('imgtag');

			if(imgTag !== null){
				NotesHandler.saveFormToObject(noteHeader.value, inputTextInDiv.innerHTML, this.styles, imgTag.src);
			} else if(imgTag == null) {
				NotesHandler.saveFormToObject(noteHeader.value, inputTextInDiv.innerHTML, this.styles);
			}
			form.reset();
			inputTextInDiv.innerHTML = '';
			imgTag.src = '';
		});              
	}
}
