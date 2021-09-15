console.log('***** Music Collection *****')

let collection = []

function addToCollection( albumTitle, albumArtist, albumYearPublished){
  let album = { title: albumTitle, artist: albumArtist, yearPublished: albumYearPublished}
  collection.push(album);
  return collection
}

addToCollection('Light Chasers', 'Cloud Cult', '2010');
console.log(collection);

addToCollection('IN LIFE', 'Stray Kids', '2020');
console.log(collection);

addToCollection('Future Nostalgia','Dua Lipa','2020');
console.log(collection);

addToCollection('NO EASY', 'Stray Kids', '2021');
console.log(collection)

addToCollection('Danger Days', "My Chemical Romance", '2010');
console.log(collection);

addToCollection('Moana Soundtrack', 'Disney', '2016');
console.log(collection);

