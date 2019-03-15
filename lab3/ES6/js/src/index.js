class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    // create new note
    let newNote = document.createElement('div');
    // add class .card
    newNote.className = "card";

    // create title in card
    let p = document.createElement('p');
    // give value to p
    p.innerHTML = this.title;

    // create remove button
    let a = document.createElement('a');
    // add class .card-remove
    a.className = "card-remove";
    // add link
    a.setAttribute = ("href", "#");
    a.innerHTML = "Remove";

    // btn remove this card
    a.addEventListener('click', this.remove.bind(newNote));

    // add title and button to note
    newNote.appendChild(p);
    newNote.appendChild(a);

    return newNote;
  }
  
  add(){
    // this function should append the note to the screen somehow
    let notes = document.querySelector('.notes');
    notes.appendChild(this.element);
  }
  
  saveToStorage(){
    
    let savedNotes = localStorage.getItem("savedNotes");

        /**
         * check if there are already notes in storage.
         * if there are no notes; make a new array
         */
        let savedNotesArray;

        if( savedNotes == null ) 
        {
            savedNotesArray = [];
        }
      
        /**
         * if there are already notes in the array;
         * parse them
         */
        else 
        {
            savedNotesArray = JSON.parse( savedNotes );
        }
    
    // add the note to the storage/array
    savedNotesArray.push( this.title );
    
    // parse note and set the item in storage
    localStorage.setItem("savedNotes", JSON.stringify( savedNotesArray ));
    
  }
  
  remove(){
    let savedNotes = JSON.parse(localStorage.getItem('savedNotes'));
      
    // add class to removing note
    let note = this; 
    note.className='card fadeOut animated';
    setTimeout( () => 
      {note.parentNode.removeChild(note);}
      , 1000);
    
    let index = savedNotes.indexOf(this.firstChild.innerHTML);
    
    // adds/removes items to/from an array, and returns the removed item. 
    savedNotes.splice(index,1);
    
    // update storage
    localStorage.setItem('savedNotes', JSON.stringify(savedNotes));

    console.log("Removed note");
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // click button
    this.btnAdd = document.querySelector('#btnAddNote');

    // press enter
    document.querySelector('#txtAddNote').addEventListener('keypress', (e) => {
      if (e.keyCode == 13) {
        document.querySelector('#btnAddNote').click();
        e.preventDefault();
      }
    });

    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
     
    // take notes from storage and parse them  to be readable
    let savedNotes = JSON.parse( localStorage.getItem("savedNotes") );

    /**
     * check if there are notes in the storage.
     * if there are notes in storage; show them on screen
     * by "creating" a new note with the value in it
     *  */  
    
    if( savedNotes.length > 0 ) {
        for( let i = 0; i < savedNotes.length; i++ ) {
            let noteFromStorage = new Note( savedNotes[i] );
            noteFromStorage.add();
        };
    }
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    // get value from input
    let value = document.querySelector('#txtAddNote').value;

    // create new note; set title
    let newNote = new Note(value);

    // add to .notes
    newNote.add();
    
    // resets input text field
    this.reset();

    // saves to storage
    newNote.saveToStorage();
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("form").reset();
  }
}

let app = new App();