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

//(This allows it to be reused to show any collection, like the results from the find or search.)
//Console.log the number of items in the array.
//Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

//Add a function named showCollection. This function :
//Take in an array parameter. 
function showCollection (array){
  console.log(array);
  for(taco of array){
    console.log(`${taco.title} by ${taco.artist} published in ${taco.yearPublished}`);
 }// end loop
}
showCollection(collection);


//object.keys [0]


//console.log('finding artist-------------');

//function findByArtist (artist) {
//  let found = []
//  for(let i in collection){
//    if artist === collection [i]
//    found.push (i)
    
//  } return console.log('albums found found.length, found ');
//  }
//}


//Later on.

//for(let albumofcollection ){
//  if album === artist 
//  array.push
//} // loop

//return artist collection 