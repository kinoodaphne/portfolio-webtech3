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
  
  saveToStorage(text){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
    this.remove();
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // click button
    this.btnAdd = document.querySelector('#btnAddNote');

    // press enter
    document.querySelector('#txtAddNote').addEventListener('keypress', (e) => {
      let keyCode = e.keyCode;
      if (keyCode == 13) {
        document.querySelector('#btnAddNote').click();
        e.preventDefault();
      }
    });

    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
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