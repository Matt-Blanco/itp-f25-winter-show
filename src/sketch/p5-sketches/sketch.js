//poster design with matt & cody, 251029.

//poster has to be in 20x30" (2:3).
//canvas: 
let ch = 1000;
let cw = ch*2/3;


let bg_col = 0;

let margin = 100; 

function setup() {
  createCanvas(cw, ch, WEBGL);
}

function draw() {
  background(bg_col);

  push(); 
  translate (0,0);
  rotateY (45); 
  noFill(); 
  stroke (255); 
  box (100,100, 100); 
  pop(); 

  noLoop(); //we don't need the sketch to animate. 
}
