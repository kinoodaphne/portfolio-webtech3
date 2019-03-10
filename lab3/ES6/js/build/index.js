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
      // Adds a css class card to the HTML element div
      newNote.classList.add('card');

      var p = document.createElement('p');
      p.innerHTML = title;
      newNote.appendChild(p);

      // Create new element a in the newly created div
      var a = document.createElement('a');
      a.innerHTML = "Remove";
      a.href = "#";
      // Adds a css class card-remove to the HTML element a
      newNote.classList.add('card-remove');
      newNote.appendChild(a);
      // Remove note
      a.addEventListener('click', this.remove.bind(newNote));

      var notes = document.querySelector('.notes');
      notes.appendChild(newNote);

      return newNote;
    }
  }, {
    key: 'add',
    value: function add() {
      // HINT🤩
      // this function should append the note to the screen somehow
      document.querySelector(".notes").appendChild(this.element);
      console.log("add new card");
    }
  }, {
    key: 'saveToStorage',
    value: function saveToStorage(text) {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify

      // Adds new item to end of array, and returns new length
      console.log(saveNotes);
      saveNotes.appendChild(text);

      // storage.setItem(keyName, keyvalue);
      /* when passed a key name and value, setItem() will
      add that key to the given storage object, or update
      that key's value if it already exists.*/
      // JSON.stringify converts a js-object/value to a JSON string.
      localStorage.setItem('notes', JSON.stringify(saveNotes));
      console.log("saved");
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

    // this.loadNotesFromStorage();
    // clicking button
    this.btnAdd = document.querySelector("#btnAddNote");

    // pressing enter
    this.enterButton = document.querySelector("#txtAddNote");
    var enter = this.btnAdd;
    this.enterButton.addEventListener("keyup", function (event) {
      event.preventDefault();

      if (event.keyCode === 13) {
        enter.click();
        console.lof("confirmed");
      }
    });

    this.btnAdd.addEventListener("click", this.createNote.bind(this));
  }

  _createClass(App, [{
    key: 'loadNotesFromStorage',
    value: function loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice

      var loadNotes = JSON.parse(localStorage.getItem('notes'));

      if (loadNotes !== null) {
        loadNotes.forEach(function (value) {
          var note = new Note(value);
          note.add();
        });
      }
    }
  }, {
    key: 'createNote',
    value: function createNote(e) {
      // this function should create a new note by using the Note() class

      var value = document.querySelector("#txtAddNote").value;
      var note = new Note(value);
      note.saveToStorage(value);
      note.add();
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

// Create array to save notes in


var saveNotes = [];
// JSON = exchange data to/from a web server
// JSON.parse => Parses data and let's it become a JS-object
// Parses the item you took from localStorage
saveNotes = JSON.parse(localStorage.getItem('notes'));

var app = new App();

//# sourceMappingURL=index.js.map