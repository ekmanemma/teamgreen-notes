var NotebooksHandler = {
	allNotebooks: [],

	addNotebook: function(notebookObject){

    this.allNotebooks.push(notebookObject);  
		localStorage.setItem('allNotebooks', JSON.stringify(this.allNotebooks)); // Stores array with all objects in local storage
		
		let notebook = document.createElement('button');
		notebook.setAttribute('id', 'notebookElement');
		notebook.textContent = notebookObject.notebookName;
		let section1 = document.getElementById('section1');
		section1.appendChild(notebook);
	},
	createNotebookObject: function(){
		let notebookObject = {
			notebookName: notebookName.value,
		}
		NotebooksHandler.addNotebook(notebookObject);                  
	},
	loadNotebooksFromLS: function(){

		let notebooksInLocalStorage = JSON.parse(localStorage.getItem("allNotebooks"));
		
		if(notebooksInLocalStorage){
			this.allNotebooks = notebooksInLocalStorage;
		} else {
			this.allNotebooks = [];
		}
	},
	displayNotebooks: function(){
		console.log(this.allNotebooks);
		NotebooksHandler.allNotebooks.forEach(function(book){
			let notebook = document.createElement('button');
			notebook.setAttribute('id', 'notebookElement');
			notebook.textContent = book.notebookName;
			let section1 = document.getElementById('section1');
			section1.appendChild(notebook);
		});
	},
}
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
				NotebooksHandler.createNotebookObject(e);
				this.notebookModal = document.getElementsByClassName('modal')[0];
				document.body.removeChild(this.notebookModal);
			});                   
		});      
	}    
}