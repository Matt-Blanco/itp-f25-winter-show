let img;
let spacing = 4; // <-- adjustable spacing between points
let size = 2;
let bg_col = 0; 
let col = 255; 

function preload() {
  img = loadImage("./NewYorkCity.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
//   background(bg_col);
}

function draw() {
//   background(bg_col); // clear canvas
  convert_to_pixels();
  noLoop(); 
}

function convert_to_pixels() {
  img.loadPixels(); // load image pixels

  for (let y = 0; y < img.height; y += spacing) {
    for (let x = 0; x < img.width; x += spacing) {
      let index = 4 * (y * img.width + x); // get pixel array index
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];

      // check if pixel is not white (or transparent)
      if (!(r > 250 && g > 250 && b > 250)) {
        stroke (col); 
        strokeWeight (size); 
        point(x,y); 
      }
    }
  }
}

function mousePressed(){
    save ('frame.png'); 
}
