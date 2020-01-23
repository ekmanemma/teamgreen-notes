class NewNoteScreen extends Screen {
	styles = [];

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

		//adding photos for styling
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
		btnForUploadImage.setAttribute('class', 'stylingButton');
		btnForUploadImage.textContent = 'upload image';
		btnForUploadImage.id = 'imageUpload';
		stylingNotes.appendChild(btnForUploadImage);

		btnForUploadImage.addEventListener('change', (e) =>{
			const fileInput = document.getElementById('imageUpload')
			const photo = document.createElement('img');
			photo.id = 'imgtag';
			stylingNotes.appendChild(photo);


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
		
		btnForBold.addEventListener('click', () =>{
			document.execCommand('bold');
		});

		btnForUnderline.addEventListener('click', () =>{
			document.execCommand('underline');
		});

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

		const submitButton = document.createElement('button');
		submitButton.setAttribute('type','submit');
		submitButton.textContent = 'Create New Note';
		form.appendChild(submitButton);
		submitButton.addEventListener('click',(e) => {
			e.preventDefault();
			let inputTextInDiv = document.getElementById('noteContent');
			let imagetag = document.getElementById('imgtag');

			if(imagetag !== null){
				NotesHandler.saveFormToObject(noteHeader.value, inputTextInDiv.innerHTML, this.styles, imgtag.src);
			} else if(imagetag == null) {
				NotesHandler.saveFormToObject(noteHeader.value, inputTextInDiv.innerHTML, this.styles);
			}
			form.reset();
			inputTextInDiv.innerHTML = '';
		});              
	}
}
