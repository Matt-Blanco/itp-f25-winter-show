//poster design with matt & cody, 251029.

//poster has to be in 20x30" (2:3).
//canvas:
let ch = 1000;
let cw = (ch * 2) / 3;

let bg_col = 0;

let margin = 100;
let sub_margin = margin / 3;

let worldData

function preload() {
  worldData = loadTable('../../data/stuData.csv', 'csv', 'header');
}
let people = [];

let x, y, z, box_x, box_y, box_z; //declare everything globally.

function setup() {
  createCanvas(cw, ch, WEBGL);
  console.log(worldData)
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
  for (let i = 0; i < worldData.getRows().length; i++) {
    let px = map(Number(worldData.getRow(i).obj.world_longitude), 0, 90, -box_w / 2 , box_w / 2 ) //random(-box_w / 2, box_w / 2);
    let py = box_h / 2;
    let pz = map(Number(worldData.getRow(i).obj.world_latitude), -180, 180, box_d / 2, box_d)//random(random(-box_d, box_d));

    strokeWeight(0.5);
    stroke(255);
    point(px, py, pz);

    let itp_point = x + box_w / 2;

    line(px, py, pz, itp_point, width / 3, itp_point);

    // let px3 = random(-box_w / 2, box_w / 2);
    // let py3 = box_h / 2;
    // let pz3 = random(random(-box_d, box_d));

    // line(itp_point, width / 3, itp_point, px3, py3, pz3);
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

class Person {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.home_x = x;
    this.home_y = y;
    this.home_z = z;

    this.ny_x = x;
    this.ny_y = y;
    this.ny_z = y;
  }
  display() {
    strokeWeight(st_weight);
    stroke(st_col);

    point(this.x, this.y, this.z); //display people as is.
  }
}

function make_text() {
  // text("ITP | IMA | LowRes", width/3+sub_margin,
}
