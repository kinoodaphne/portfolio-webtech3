class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
    newNote.title = title;
    // This property is useful to add, remove and toggle CSS classes on an element.
    // Adds a css class card to the HTML element div
    newNote.classList.add('card');

    // Create new element a in the newly created div
    let a = document.createElement('a');
    a.innerHTML = "Remove";
    a.href = "#";
    // Adds a css class card-remove to the HTML element a
    newNote.classList.add('card-remove');
    newNote.appendChild(a);
    // Remove note
    a.addEventListener('click', this.remove.bind(newNote));

    let p = document.createElement('p');
    p.innerHTML = title;
    newNote.appendChild(p);
    
    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
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
  
    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
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
    let text = document.querySelector("#txtAddNote").value;
    let note = new Note(text);
    Note.add();
    // note.saveToStorage();
    this.reset();
    
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("#txtAddNote").reset();
  }
  
}

let app = new App();