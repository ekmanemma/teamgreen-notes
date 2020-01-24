const NotesHandler = {
	allNoteObjects: [],

  /**
   * @desc: Pushes object to array and updates localstorage.
   * @param newNoteObject from saveFormToObject.
   */
	addNote(newNoteObject){
    this.allNoteObjects.push(newNoteObject);  
    localStorage.setItem('allNoteObjects', JSON.stringify(this.allNoteObjects));
  },
	removeNote(e){
		const paperDate = e.target.parentElement.firstElementChild.firstChild.textContent;        
		const indexInArrayToRemove = this.allNoteObjects.findIndex(function(eachObjectinArray){    
      return paperDate == eachObjectinArray.toDaysDate;
		})
		this.allNoteObjects.splice(indexInArrayToRemove, 1);                                       
		localStorage.setItem('allNoteObjects', JSON.stringify(this.allNoteObjects));             
	
		const removePaper = e.target.parentElement;
		removePaper.parentElement.removeChild(removePaper);
	},
	editNote(e){
    const previousHeaderContent = e.target.parentElement.firstChild.children[1].textContent;
    const previousTextContent = e.target.parentElement.firstChild.children[2].textContent;
    const main = document.getElementById('mainNotes');
    main.firstChild.textContent = 'Edit note';
    main.lastChild.lastChild.firstChild.textContent = 'Save';
    document.getElementById('noteHeader').value = previousHeaderContent;
    document.getElementById('noteContent').innerHTML = previousTextContent;
	},
	loadNotesFromLS(){
    const objectsInLocalStorage = JSON.parse(localStorage.getItem("allNoteObjects"));
    this.allNoteObjects = objectsInLocalStorage || [];
  },
  
  /**
   * @desk: saves the form imput to a new object.
   * @parameters from newNote input.
   */
	saveFormToObject(header, content, styles, image){

    const newNoteObject = {
      noteHeader: header,
      noteContent: content,
      toDaysDate: new Date(),
      styles: styles,
      image: image
    }
    this.addNote(newNoteObject);
  },
}