var playlist = {
  beatles: "let it be",
  beachboys: "fun fun fun",
  jimi: "purple haze",
}

function updatePlaylist(playlist, artist, title){
  return Object.assign({}, artist, title)
}