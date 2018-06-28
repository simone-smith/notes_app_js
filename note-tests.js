function testNoteText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.returnNoteText() === "My favourite language is JavaScript");
};

testNoteText();

function testNoteId() {
  var note = new Note("text", 5);
  assert.isTrue(note.returnNoteId() === 5);
};

testNoteId();

function testNoteListText() {
  var noteList = new NoteList();
  noteList.addNote("My favourite language is JavaScript");
  noteList.addNote("My favourite language is Ruby");
  assert.isTrue(noteList.noteArray[0]['text'] === "My favourite language is JavaScript" );
  assert.isTrue(noteList.noteArray[1]['text'] === "My favourite language is Ruby" );
};

testNoteListText();

function testNoteListId() {
  var noteList = new NoteList();
  noteList.addNote("text one");
  noteList.addNote("text two");
  assert.isTrue(noteList.noteArray[0]['id'] === 0);
  assert.isTrue(noteList.noteArray[1]['id'] === 1);
}

testNoteListId();

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote("First note which is more than 20 characters");
  noteList.addNote("Second note");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML().includes(`<ul><li><div><a href="#notes/0">First note which is </a></div></li><li><div><a href="#notes/1">Second note</a></div></li></ul>`));
};

testNoteListView();

function testInstatiateNoteController() {
  function NoteListDouble() {};

  NoteListDouble.prototype = {
    addNote: function() {}
  };

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);
  assert.isTrue(noteController)
};

testInstatiateNoteController();

function testNoteControllerHTML() {
  function NoteListDouble() {};

  NoteListDouble.prototype = {
    addNote: function() {}
  };

  var noteListDouble = new NoteListDouble();

  function NoteListViewDouble(noteListDouble) {};

  NoteListViewDouble.prototype = {
    returnHTML: function() {
      return "<ul><li><div>Favourite drink: coke</div></li></ul>";
    }
  };

  var element = {innerHTML: "hello"}
  var noteListViewDouble = new NoteListViewDouble(noteListDouble);
  var noteController = new NoteController(noteListViewDouble, element);
  noteController.getHTML()
  assert.isTrue(element.innerHTML === "<ul><li><div>Favourite drink: coke</div></li></ul>")
};

testNoteControllerHTML();

function testSingleNoteView() {

  function NoteDouble(text){
    this.text = text;
  };

  NoteDouble.prototype = {
    returnNoteText: function() {
      return this.text;
    }
  };

  var noteDouble = new NoteDouble("Notey McNoteFace")
  var singleNoteView = new SingleNoteView(noteDouble);
  assert.isTrue(singleNoteView.returnHTML().includes("<div>Notey McNoteFace</div>"));
};

testSingleNoteView()
