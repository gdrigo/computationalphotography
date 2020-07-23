var img;

function preload() {
  img = loadImage('https://i.ibb.co/bFcVPdL/20200721192907-IMG-3151.jpg');
}
function setup() {
  createCanvas(img.width, img.height);
  pixelDensity(1);
  image(img, 0, 0, img.width, img.height);

}

function draw(){
        image(img, 0, 0, img.width, img.height);
        
        loadPixels();
        for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              var index = (x + y * width)*4;
              var r = pixels[index+0];
              var g = pixels[index+1];
              var b = pixels[index+2];
              var a = pixels[index+3];     
              
              pixels[index+0] = 255 - r;
              pixels[index+1] = g;
              pixels[index+2] = b;
        }
      }
      updatePixels();
    }