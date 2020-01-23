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
		NotebooksHandler.allNotebooks.forEach(function(book){
			let notebook = document.createElement('button');
			notebook.setAttribute('id', 'notebookElement');
			notebook.textContent = book.notebookName;
			let section1 = document.getElementById('section1');
			section1.appendChild(notebook);
		});
	},
}