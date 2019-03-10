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
    p.className = "card-remove";
    // add link
    p.setAttribute = ("href", "#");
    p.innerHTML = "Remove";

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
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
  } 
}

class App {
  constructor() {
    console.log("👊🏼 The Constructor!");
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    // this.btnAdd = ???
    // this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
  }
   
  createNote(e){
    // this function should create a new note by using the Note() class
    
    // HINT🤩
    // note.add();
    // note.saveToStorage();
    // this.reset();
  }
  
  reset(){
    // this function should reset the form 
  }
  
}

let app = new App();