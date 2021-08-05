let lib = ['Iron-Man','Captain-America','New Coding','JS Documentation']
let showAllbooks = () => {
    lib.forEach(i => console.log(i));
    return;
}

let addBook = (x) => {
    lib.push(x);
    lib.forEach(i => console.log(i));
    return lib;
}

const EventEmmitter = require('events');
const eventEmmitter = new EventEmmitter;

const readline = require('readline');
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
    let fun = () => {
        console.log('Select an option:')
        console.log('Press "1" to Show all books');
        console.log('Press "2" to Add a new book');
        console.log('Press "3" to Quit');
        console.log('');
        readline1.question('', function (i) {
        if (i == 1) {
            showAllbooks();
            fun();
        }
        else if (i == 2) {
            readline1.question('Write a Name of Book To Add: ', function (book) {
                addBook(book);
                fun();
            })
        }
        else if (i == 3) {
            readline1.close();
        }
        else {
            console.log('You have selected an invalid entry so please press 1, 2 or 3');
            fun();
        }
    })
}
eventEmmitter.on('options', (showOption) => {
    fun();
});
eventEmmitter.emit('options')

