/* Class screen with two methods: one that creates the main content that changes depending on the active screen, 
one method that removes the content when change screen.
*/
class Screen {

	constructor(){
		this.createMainContent();
	}

	//creates the main content
	createMainContent (){
		this.mainWrapper = document.getElementById('mainWrapper');
		this.mainTwo = document.createElement('main');
		this.mainTwo.id = 'mainNotes';
		this.mainWrapper.appendChild(this.mainTwo);
		this.notesHeader = document.createElement('h2');
		this.notesHeader.textContent = this.content;
		this.mainTwo.appendChild(this.notesHeader);
	}

	//When screen is changed, this functions is called and removes the current content
	removeMe(){
		this.mainWrapper.removeChild(this.mainTwo);
  }
}

