class Main {
	constructor(){
		this.init();
		DisplayLogin.showLoggedInUser();
		Navigation.addNavEventListeners();
		NotesHandler.loadNotesFromLS();
		Navigation.changeScreen('noteScreen');
	}    

	// Initializes the UI.
	init() {

		const bodyRef = document.body;

		//  Creates header.
		const header = document.createElement('header');
		header.id = 'header';
		bodyRef.appendChild(header);

		const mainApplicationHeader = document.createElement('h1');
		mainApplicationHeader.textContent = 'Note Application 2000';
		header.appendChild(mainApplicationHeader);

		//  Creates the main section.
		const mainWrapper = document.createElement('div');
		mainWrapper.id = 'mainWrapper';
		bodyRef.appendChild(mainWrapper);
		
		//  Creates the nav.
		const nav = document.createElement('nav');
		nav.id = 'nav';
		mainWrapper.appendChild(nav);

		//  Creates the loginbutton.
		const loginBTN = document.createElement('button');
		loginBTN.id = 'loginBTN';
		loginBTN.textContent = 'Login';
		nav.appendChild(loginBTN);
		loginBTN.addEventListener('click', () =>{
			new Login();
		});

		//  Creates the list with navigation. 
		const navList = document.createElement('ul');
		nav.appendChild(navList);
		const listItemOne = document.createElement('li');
		listItemOne.textContent = 'New note';
		navList.appendChild(listItemOne);

		const listItemTwo = document.createElement('li');
		listItemTwo.textContent = 'Notes';
		listItemTwo.setAttribute('class', 'active');
		navList.appendChild(listItemTwo);
		const listItemThree = document.createElement('li');
		listItemThree.textContent = 'Notebooks';
		navList.appendChild(listItemThree);
	}
}

document.addEventListener('DOMContentLoaded', function(){
	new Main();
});


