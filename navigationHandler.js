const Navigation = {

	addNavEventListeners() {

		const allListItems = document.querySelectorAll('li');

		allListItems[0].addEventListener('click', (e) =>{
				this.activeListItem(e);
				this.changeScreen('newNoteScreen');
		});
		allListItems[1].addEventListener('click', (e) => {
				this.activeListItem(e);  
				this.changeScreen('noteScreen');
		});
		allListItems[2].addEventListener('click', (e) => {
				this.activeListItem(e);
				this.changeScreen('notebookScreen');
		});
	},

	//	When an "li" is clicked, it becomes "active".
	activeListItem(e) {
		this.allListItems = document.querySelectorAll('li');
		this.allListItems.forEach(function(listItem){
				listItem.removeAttribute('class');
		});
		e.target.setAttribute('class', 'active'); 
	},

	//	The switchcase changes the screen and removes the previous one. 
	changeScreen(screenType){
		if(this.activeScreen) this.activeScreen.removeMe();

		switch(screenType) {
			case 'newNoteScreen':
				this.activeScreen = new NewNoteScreen();
			break;
			case 'noteScreen':
				this.activeScreen = new NoteScreen();
			break;
			case 'notebookScreen':
				this.activeScreen = new NotebookScreen();
			break;
			default:
				this.activeScreen = new Main();
		}
	}
}
