console.log('***** Music Collection *****')

console.log('-----------Section 1--------------------------');
//Create a variable collection that starts as an empty array.
let collection = []

// Add a function named addToCollection. This function should:
//Take in the album's title, artist, yearPublished as input parameters
function addToCollection( albumTitle, albumArtist, albumYearPublished){
  let album = { title: albumTitle, artist: albumArtist, yearPublished: albumYearPublished};
  //Create a new object having the above properties
  collection.push(album); //Add the new object to the end of the collection array
  return album; //Return the newly created object
} //end function

console.log('-------Section 2 ---------add albums -------------');

//Test the addToCollection function:


//Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//Console.log each album as added using the returned value.

console.log(addToCollection('Light Chasers', 'Cloud Cult', '2010'));
console.log(addToCollection('IN LIFE', 'Stray Kids', '2020'));
console.log(addToCollection('Future Nostalgia','Dua Lipa','2020'));
console.log(addToCollection('NO EASY', 'Stray Kids', '2021'));
console.log(addToCollection('Danger Days', "My Chemical Romance", '2010'));
console.log(addToCollection('Moana Soundtrack', 'Disney', '2016'));

//After all are added, console.log the collection array.

console.log('---------------Print Collection Array----------------');

console.log(collection);

for (let i = 0; i < collection.length; i++){
  console.log(collection[i]);  
} //end loop

console.log('-------------Section 3 ------ showCollection-----');


//Add a function named showCollection. This function :
//Take in an array parameter. 
function showCollection (array){
  console.log(array);
  //Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.
  //(This allows it to be reused to show any collection, like the results from the find or search.)
  for(let album of array){ 
    console.log(`${album.title} by ${album.artist} published in ${album.yearPublished}`);
    //Console.log the number of items in the array.
 }// end loop
}
showCollection(collection);

console.log('---------findByArtist-----LAST REQUIRED SECTION----');


//Loop through the collection and add any objects with a matching artist to the array.
//Return the array with the matching results. If no results are found, return an empty array


//Add a function named findByArtist. This function should:
//Take in artist (a string) parameter
function findByArtist (artist){
  let foundArtist = [];  //Create an array to hold any results, empty to start
  for (let album of collection) {
    if (artist === album.artist){
    foundArtist.push (collection[0]);
    console.log (`albums found by artist: ${foundArtist.length}`)
    console.log(foundArtist[0]);
    } // artist === album
  } //album in collection
}// findByArtist Funciton

findByArtist('Cloud Cult');
console.log(foundArtist());

//Test the findByArtist function. 
//Make sure to test with an artist you know is in the collection, 
//as well as an artist you know is not in your collection. 
//Check that for artists with multiple matches, all are found.


