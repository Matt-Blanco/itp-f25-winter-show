//poster design with matt & cody, 251029.

//poster has to be in 20x30" (2:3).
//canvas:
let ch = 1000;
let cw = (ch * 2) / 3;

let bg_col = 0;

let margin = 100;
let sub_margin = margin/3; 

function setup() {
  createCanvas(cw, ch, WEBGL);
}

function draw() {
  background(bg_col);

  push();
  //cube: 
  const cb_w = width/3; 
  const x = -width/2+margin + cb_w/2; 
  const y = 0; 
  const z = 0; 
  translate(x, y, y); 
//   rotateX(25);
  rotateY(42);
  noFill();
  stroke(255);
  box(width/3, height-margin*2, 100);

  //points: 
  point (random(-50,50), 50,random(-50,50)); 
  pop();

  make_text(); 

  noLoop(); //we don't need the sketch to animate.
}

function make_text(){
    text("ITP | IMA | LowRes", width/3+sub_margin, 
}
