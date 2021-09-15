console.log('***** Music Collection *****')

let collection = []

let album = {
  title: 'Light Chasers',
  artist: 'Cloud Cult',
  yearPublished: '2010'
}

function addToCollection( title, artist, yearPublished){
  let album = { [title:] [artist:] [yearPublished:]}
  collection.push(album);
  return collection
}

addToCollection('Light Chasers', 'Cloud Cult', '2010');