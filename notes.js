const chalk = require('chalk');
const fs = require('fs');

const addNote = function(title,body){
    const notes = loadNotes();

    //JS filter function
    // const duplicateNotes = notes.filter(function(note){  
    //     return note.title === title;
    // });

    const duplicateNote = notes.find(function(note){  
        return note.title === title;
    });

    debugger;

    if(!duplicateNote)
    {
     	notes.push({    //push in array
        title: title,
        body: body
   		});
   		saveNotes(notes);
   		console.log(chalk.bgGreen.bold('New note added!'));
    } else {
    	console.log(chalk.bgRed.bold('Note title already taken!'));
    }

    
    // console.log(notes);
};

const removeNote = function(title){
    const notes = loadNotes();

    //JS filter function
    const notesToKeep = notes.filter(function(note){  
        return note.title !== title;
    });

    if(notes.length!==notesToKeep.length)
    {
    	console.log(chalk.bgGreen.bold('Note removed!'));
    	saveNotes(notesToKeep);
    } else
   	{
        console.log(chalk.bgRed.bold('No Note found!'));
   	}

    

    // console.log(notes);
};

const listNotes = () =>{
    const notes = loadNotes();

    console.log(chalk.inverse('Your Notes'));

    notes.forEach((note) => {
    	console.log(note.title);
    })
};

const getNotes = function(title) {
	const notes = loadNotes();

	const Note = notes.find(function(note){  
        return note.title === title;
    });

    if(!Note)
    {
   		console.log(chalk.bgRed.bold('Note not found with this title!'));
    } else {
    	console.log(chalk.bgYellow.bold(Note.title));
    	console.log(Note.body);
    }
};

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes =function(){

  try{
       const dataBuffer = fs.readFileSync('notes.json');
	   const dataJSON=dataBuffer.toString();
	   return JSON.parse(dataJSON);
  } catch(e){
       return [];
  }

   
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	listNotes: listNotes
};