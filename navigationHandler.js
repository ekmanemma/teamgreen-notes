var Navigation = {
	addNavEventListeners: function () {

			//GÖR LOOP

			// for(let i = 0; i < allListItems.length; i++){
			//     listItem.addEventListener('click', (e) =>{
			//         this.activeListItem(e);
			//          this.changeScreen('notes' + [i])
			//     })}

			// this.allListItems.forEach(function (listitem){
			//     listItem.addEventListener('click', (e) => {
			//         this.activeListItem(e);
			//         this.changeScreen('notes' +[i]);
			//     })
			// })
					
			const allListItems = document.querySelectorAll('li'); 

			// allListItems.forEach(function(listItem){
			// 	listItem.addEventListener('click', (e) =>{
			// 		this.activeListItem(e);
			// 		this.changeScreen('notes', [i]);
			// 	})
			// })
	
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
	activeListItem: function (e) {
			this.allListItems = document.querySelectorAll('li');
			this.allListItems.forEach(function(listItem){
					listItem.removeAttribute('class');
			});
			e.target.setAttribute('class', 'active'); 
	},
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
