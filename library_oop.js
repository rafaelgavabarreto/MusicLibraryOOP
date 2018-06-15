/*
This one will be slightly different from the Week 1 in that it will have the following functionality:

A Library has a name and a creator (both strings)
These are the only things required in order to create a music library
A Library has many playlists (starts as an empty array)
Playlist objects can be added to an instance of a library
Each Playlist has a name which is required upon creation
A Playlist also has many tracks
A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds)
 all of which are required when creating a new track
Each Playlist also has an overallRating function which will calculate the rating by averaging
 the rating of its tracks
Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
Once defined, your code should use new to instantiate these functions to create instances of one library
 and then add new tracks and playlists to the library.

*/

class Library {
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }

  addPlaylist(playlist) {
    if (playlist instanceof Playlist) {
      this.playlists.push(playlist)
    }
  }
}

class Playlist {
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

  addTrack(track) {
    if(track instanceof Track) {
      this.tracks.push(track);
    }
  }

  overallRating() {
    let sum = 0;
    this.tracks.forEach((element) => {
      sum += element.rating;
    })
    return sum / this.tracks.length
  }

  totalDuration() {
    let total = 0;
    this.tracks.forEach((element) => {
      total += element.length;
    })
    return total;
  }
}

class Track {
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }
}

//Creating the library
const library = new Library("Library Music", "Rafael");

//Creating two playlists inside the library
const playlist1 = new Playlist("Coding Music");
library.addPlaylist(playlist1);
const playlist2 = new Playlist("Other Playlist");
library.addPlaylist(playlist2);

//Creating and linking the tracks to the playlists
const track1 =  new Track("Code Monkey", 2, 300);
playlist1.addTrack(track1);
const track2 =  new Track("Model View Controller", 3, 200);
playlist1.addTrack(track2);
const track3 =  new Track("Four Thirty-Three", 4, 400);
playlist2.addTrack(track3);

// Show the title (name) the music using the tree
console.log(library.playlists[0].tracks[0].title);
