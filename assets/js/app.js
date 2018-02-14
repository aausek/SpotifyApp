window.onload = launch();

const songs = ["Filthy", "Deer In Headlights", "All Night"];

function displaySongs() {
    const song = this.song.attr("data-name");
    const queryURL = "https://api.spotify.com/v1/search?q=" + song + "&type=track&market=US&limit=10&offset=5";

    
}