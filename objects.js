var playlist = {
  beatles: "let it be",
  beachboys: "fun fun fun",
  jimi: "purple haze",
}

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, artistName, songTitle)
}