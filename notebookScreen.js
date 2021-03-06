//Class for notebook screen with one motehod that initiates the notebook content, and sends the information to the object for notebookshandler.
class NotebookScreen extends Screen {
	
	constructor(){
		super();
		this.initNotebook();
		NotebooksHandler.loadNotebooksFromLS(); 	
		NotebooksHandler.displayNotebooks();				
	}
	initNotebook(){
		let notesHeader = document.querySelector('main h2');
		notesHeader.textContent = 'Notebooks'; 

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

		buttonCreateNotebook.addEventListener('click', () => {
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
				NotebooksHandler.createNotebookObject(e);
				this.notebookModal = document.getElementsByClassName('modal')[0];
				document.body.removeChild(this.notebookModal);
			});                   
		});      
	}    
}