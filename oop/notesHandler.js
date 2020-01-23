var NotesHandler = {
	allNoteObjects: [],

	addNote: function(newNoteObject){

    this.allNoteObjects.push(newNoteObject);  
    localStorage.setItem('allNoteObjects', JSON.stringify(this.allNoteObjects)); // Stores array with all objects in local storage
	},
	removeNote: function(e){

		const paperDate = e.target.parentElement.firstElementChild.firstChild.textContent;         // Gets the clicked papers date  
		const indexInArrayToRemove = this.allNoteObjects.findIndex(function(eachObjectinArray){    // Returns the arrayindex of the object with a matching date.
      return paperDate == eachObjectinArray.toDaysDate;
		})
		this.allNoteObjects.splice(indexInArrayToRemove, 1);                                       // Takes away the object from the array.
		localStorage.setItem('allNoteObjects', JSON.stringify(this.allNoteObjects));               // Updates array in local storage.
	
		const removePaper = e.target.parentElement;
		removePaper.parentElement.removeChild(removePaper);
	},
	editNote: function(e){

    const previousHeaderContent = e.target.parentElement.firstChild.children[1].textContent;
    const previousTextContent = e.target.parentElement.firstChild.children[2].textContent;
    const main = document.getElementById('mainNotes');
    main.firstChild.textContent = 'Edit note';
    main.lastChild.lastChild.firstChild.textContent = 'Save';
    document.getElementById('noteHeader').value = previousHeaderContent;
    document.getElementById('noteContent').innerHTML = previousTextContent;
	},
	loadNotesFromLS: function(){

    const objectsInLocalStorage = JSON.parse(localStorage.getItem("allNoteObjects"));
    this.allNoteObjects = objectsInLocalStorage || [];
	},
	saveFormToObject: function(header, content, styles, image){

    let newNoteObject = {
      noteHeader: header,
      noteContent: content,
      toDaysDate: new Date(),
      styles: styles,
      image: image
    }
    this.addNote(newNoteObject);
  },
}