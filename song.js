function Song(songName, artistName, writeName, movieName, releasedYear) {
    this.songName = songName;
    this.artistName = artistName;
    this.writeName = writeName;
    this.movieName = movieName;
    this.releasedYear = releasedYear;
    this.yearsCompleted = function (year) {
        return year - releasedYear;
    }
}

var song1 = new Song("Namo Namo", "Amit trivedi", "Anitabh bhatacharya", "Kedarnath", 2019);
var song2 = new Song("Sojugada", "Ananya bhat", "Gani Mysore", "Shiva Ratri", 2018);
var song3 = new Song("Nooru Nooru", "Saindhavi", "Raghu dixit", "Kote", 2011);

console.log(song1);
console.log(song1.yearsCompleted(2023));
console.log(song2);