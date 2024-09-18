//STEP 1
const library = [
    {
        title:"The Dark Tower I",
        author: "Stephen King",
        status: {
            own: true,
            reading: false,
            read:false,
            }
    },
    {
        title:"The Dark Tower II",
        author: "Stephen King",
        status: {
            own: true,
            reading: false,
            read:false,
            }
    },
    {
        title:"The Dark Tower III",
        author: "Stephen King",
        status: {
            own: true,
            reading: false,
            read:false,
            }
    }
]
console.log("Creating the 3 books");
console.log(library);

//STEP 2 

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log("After changing the book to READ = TRUE:");
console.log(library);


//STEP 3

const { title: firstBook } = library[0];
console.log(firstBook);


//STEP 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
