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
