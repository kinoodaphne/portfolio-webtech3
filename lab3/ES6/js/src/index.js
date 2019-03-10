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

    let p = document.createElement('p');
    p.innerHTML = title;
    newNote.appendChild(p);

    let notes = document.querySelector('.notes');
    notes.append(newNote);
    
  // Create new element a in the newly created div
  let a = document.createElement('a');
  a.innerHTML = "Remove";
  a.href = "#";
  // Adds a css class card-remove to the HTML element a
  newNote.classList.add('card-remove');
  newNote.appendChild(a);
  // Remove note
  a.addEventListener('click', this.remove.bind(newNote));

    return newNote;
  }
  
  add(){
    // HINT🤩
    // this function should append the note to the screen somehow
    document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(text){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
    
    // Adds new item to end of array, and returns new length
    saveNotes.push(text);

    // storage.setItem(keyName, keyvalue);
    /* when passed a key name and value, setItem() will
    add that key to the given storage object, or update
    that key's value if it already exists.*/
    // JSON.stringify converts a js-object/value to a JSON string.
    localStorage.setItem('notes', JSON.stringify(saveNotes));
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
    Note.saveToStorage(text);
    this.reset();
    
  }
  
  reset(){
    // this function should reset the form
    document.querySelector("#txtAddNote").reset();
  }
  
}

let app = new App();

// Create array to save notes in
let saveNotes = [];
// JSON = exchange data to/from a web server
// JSON.parse => Parses data and let's it become a JS-object
// Parses the item you took from localStorage
saveNotes = JSON.parse(localStorage.getItem('notes'));