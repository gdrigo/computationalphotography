//IGOR

let albumCover;
let songDurations= [287,131,235,272,301,268,219,292,283,293,262,263,329,242,336,727];
let maxSongLength = 727; //will be used to set the dimensions of the image anc determine the height of each song's column
let colHeight = Math.floor(maxSongLength/songDurations.length)+1; //height of each song's column on the image

function preload() {
  albumCover = loadImage('assets/covers/tpab.jpg');
}

function setup() {
  createCanvas(maxSongLength, maxSongLength);
  pixelDensity(1);

  image(albumCover, 0, 0, maxSongLength, maxSongLength);
  loadPixels();

  noLoop(); //only calls draw() once (prevents the same regions from repeatedly getting colored)
}

function draw() {

  //iterates through list of song durations blurring the designated portions of each row
  for (var songNum = 0; songNum<songDurations.length; songNum++) {
    noiseAfterSong(songNum, songDurations[songNum]);
  }

  updatePixels();
}

//generates noise/static visual towards the end of the song/row
function noiseAfterSong(songNum, songDuration) {
  for (var currX = songDuration; currX < width; currX++) { 
    for (var currY = songNum*colHeight; currY < (songNum*colHeight)+colHeight; currY++) { 
      var currIndex = (currX + currY * width) * 4;

      var r = pixels[currIndex + 0];
      var g = pixels[currIndex + 1];
      var b = pixels[currIndex + 2];
      var a = pixels[currIndex + 3];
      
      //adds static
      var col= random(255);
      pixels[currIndex+0] = col+20;
      pixels[currIndex+1] = col;
      pixels[currIndex+2] = col+20;
      pixels[currIndex+3] = 200; 
    }

  }
}



