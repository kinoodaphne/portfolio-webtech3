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
      // create new note
      var newNote = document.createElement('div');
      // add class .card
      newNote.className = "card";

      // create title in card
      var p = document.createElement('p');
      // give value to p
      p.innerHTML = this.title;

      // create remove button
      var a = document.createElement('a');
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
  }, {
    key: 'add',
    value: function add() {
      // this function should append the note to the screen somehow
      var notes = document.querySelector('.notes');
      notes.appendChild(this.element);
    }
  }, {
    key: 'saveToStorage',
    value: function saveToStorage(text) {
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
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

    // click button
    this.btnAdd = document.querySelector('#btnAddNote');

    // press enter
    document.querySelector('#txtAddNote').addEventListener('keypress', function (e) {
      var keyCode = e.keyCode;
      if (keyCode == 13) {
        document.querySelector('#btnAddNote').click();
        e.preventDefault();
      }
    });

    this.btnAdd.addEventListener("click", this.createNote.bind(this));
    this.loadNotesFromStorage();
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
      // get value from input
      var value = document.querySelector('#txtAddNote').value;

      // create new note; set title
      var newNote = new Note(value);

      // add to .notes
      newNote.add();

      // resets input text field
      this.reset();

      // saves to storage
      newNote.saveToStorage();
    }
  }, {
    key: 'reset',
    value: function reset() {
      // this function should reset the form
      document.querySelector("form").reset();
    }
  }]);

  return App;
}();

var app = new App();

//# sourceMappingURL=index.js.map