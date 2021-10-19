const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// const command =process.argv[2]; //command-line argument

// if(command=== 'add')
// {
// 	console.log('Adding note!');
// } else if(command==='remove'){
// 	console.log('Removing note!');
// }

//Customize yargs version
yargs.version('1.1.0');

//Create new command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder :{
    	title:{
    		describe: 'Note title',
            demandOption: true,
            type: 'string'
    	},

        body :{
            describe: 'Body of new note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
        // console.log('Title: '+argv.title);
        // console.log('Body: '+argv.body);
    }


    // handler(argv){   //ES6 syntax
    //     notes.addNote(argv.title,argv.body);
    // }



});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder :{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
        //console.log('Removing the note');
    }
});

//Create list command
yargs.command({
    command: 'list',
    describe: 'List your note',
    handler: function(){
        notes.listNotes();
        // console.log('Listing out all note');
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder :{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.getNotes(argv.title);
        // console.log('Reading the note');
    }
});

yargs.parse();

// console.log(yargs.argv);


