//poster design with matt & cody, 251029.

//poster has to be in 20x30" (2:3).
//canvas:
let ch = 1000;
let cw = (ch * 2) / 3;

let bg_col = 0;

let margin = 100;
let sub_margin = margin / 3;

let people = [];

let x, y, z, box_x, box_y, box_z; //declare everything globally.

function setup() {
  createCanvas(cw, ch, WEBGL);
}

function draw() {
  background(bg_col);

  push();
  //cube:
  cb_w = width / 3;
  box_x = -width / 2 + margin + cb_w / 2;
  box_y = 0;
  box_z = 0;

  box_w = width / 3;
  box_h = height - margin * 2;
  box_d = 100;

  make_cuboid(box_x, box_y, box_z, box_w, box_h, box_d);

  //make random points at base:
  for (let i = 0; i < 400; i++) {
    let px = random(-box_w / 2, box_w / 2);
    let py = box_h / 2;
    let pz = random(random(-box_d/2, box_d/2));
    people.push(new Person(px, py, pz));
  }

  for (let person of people) {
    person.display();
  }

  //   for (let i = 0; i < 400; i++) {

  //     let itp_point = x + box_w / 2;

  //     line(px, py, pz, itp_point, width / 3, itp_point);

  //     let px3 = random(-box_w / 2, box_w / 2);
  //     let py3 = 100;
  //     let pz3 = random(random(-box_d, box_d));

  //     line(itp_point, width / 3, itp_point, px3, py3, pz3);
  //   }

  pop();

  noLoop(); // static composition
}

function make_cuboid(x, y, z, w, h, d) {
  noFill();
  strokeWeight(1);
  translate(x, y, z);
  rotateY(42);
  noFill();
  stroke(255);

  box(w, h, d);
}

let st_weight = 0.5;
let st_col = 255;

const itp_point = {
  x: box_x + 50,
  z: box_z + 50,
};

const inc = 200; 

class Person {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.home_x = x;
    this.home_y = y;
    this.home_z = z;

    this.ny_x = random(box_x-box_w/2, box_x+box_w/2);
    this.ny_y = y;
    this.ny_z = random(box_z - box_w / 2, box_z + box_w / 2);
  }
  display() {
    strokeWeight(st_weight);
    stroke(st_col);

    point(this.x, this.y, this.z); //display people as is.

    //go to itp:
    line(this.x, this.y, this.z, itp_point.x, this.y-inc, itp_point.z);
  }
}

function make_text() {
  // text("ITP | IMA | LowRes", width/3+sub_margin,
}
