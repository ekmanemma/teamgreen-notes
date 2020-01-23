class Screen {

	constructor(){
		this.createMainContent();
	}

	createMainContent (){
		this.mainWrapper = document.getElementById('mainWrapper');
		this.mainTwo = document.createElement('main');
		this.mainTwo.id = 'mainNotes';
		this.mainWrapper.appendChild(this.mainTwo);
		this.notesHeader = document.createElement('h2');
		this.notesHeader.textContent = this.content;
		this.mainTwo.appendChild(this.notesHeader);
	}
	removeMe(){
		this.mainWrapper.removeChild(this.mainTwo);
  }
}

