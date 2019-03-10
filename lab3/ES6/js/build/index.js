'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Note = function () {
  function Note(title) {
    _classCallCheck(this, Note);

    this.title = title;
    this.element = this.createElement(title);
  }

  _createClass(Note, [{
    key: 'createElement',
    value: function createElement(title) {
      var newNote = document.createElement('div');
      newNote.title = title;
      // This property is useful to add, remove and toggle CSS classes on an element.
      // Adds a css class card to the HTML element div
      newNote.classList.add('card');

      var p = document.createElement('p');
      p.innerHTML = title;
      newNote.appendChild(p);

      var notes = document.querySelector('.notes');
      notes.append(newNote);

      // Create new element a in the newly created div
      var a = document.createElement('a');
      a.innerHTML = "Remove";
      a.href = "#";
      // Adds a css class card-remove to the HTML element a
      newNote.classList.add('card-remove');
      newNote.appendChild(a);
      // Remove note
      a.addEventListener('click', this.remove.bind(newNote));

      return newNote;
    }
  }, {
    key: 'add',
    value: function add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector(".notes").appendChild(this.element);
    }
  }, {
    key: 'saveToStorage',
    value: function saveToStorage(text) {
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
  }, {
    key: 'remove',
    value: function remove() {
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element

      this.remove();
    }
  }]);

  return Note;
}();

var App = function () {
  function App() {
    _classCallCheck(this, App);

    console.log("👊🏼 The Constructor!");

    // HINT🤩
    // clicking the button should work
    // pressing the enter key should also work
    this.btnAdd = document.querySelector("#btnAddNote");
    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    // this.loadNotesFromStorage();
  }

  _createClass(App, [{
    key: 'loadNotesFromStorage',
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
  }, {
    key: 'createNote',
    value: function createNote(e) {
      // this function should create a new note by using the Note() class

      // HINT🤩
      var text = document.querySelector("#txtAddNote").value;
      var note = new Note(text);
      Note.add();
      Note.saveToStorage(text);
      this.reset();
    }
  }, {
    key: 'reset',
    value: function reset() {
      // this function should reset the form
      document.querySelector("#txtAddNote").reset();
    }
  }]);

  return App;
}();

var app = new App();

// Create array to save notes in
var saveNotes = [];
// JSON = exchange data to/from a web server
// JSON.parse => Parses data and let's it become a JS-object
// Parses the item you took from localStorage
saveNotes = JSON.parse(localStorage.getItem('notes'));

//# sourceMappingURL=index.js.map