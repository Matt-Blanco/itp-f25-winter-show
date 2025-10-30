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

function setup() {
  createCanvas(cw, ch, WEBGL);
  console.log(worldData)
}

function draw() {
  background(bg_col);

  push();
  //cube:
  const cb_w = width / 3;
  const x = -width / 2 + margin + cb_w / 2;
  const y = 0;
  const z = 0;
  translate(x, y, z);
  rotateY(42);
  noFill();
  stroke(255);

  const box_w = width / 3;
  const box_h = height - margin * 2;
  const box_d = 100;
  box(box_w, box_h, box_d);

  noFill();
  strokeWeight(1);

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

  pop();

  noLoop(); // static composition
}

function make_text() {
  // text("ITP | IMA | LowRes", width/3+sub_margin,
}

//   for (let i = 0; i < 400; i++) {
//     // random point at bottom face
//     let px = random(-box_w / 2, box_w / 2);
//     let py = bottomY;
//     let pz = random(-box_d / 2, box_d / 2);

//     // define control points that curve upward toward center
//     let cx1 = px * random(0.1, 1);
//     let cy1 = py * 0.3; // lift first control point upward
//     let cz1 = pz * random(-1,1);

//     let cx2 = px;
//     let cy2 = box_h/3; // control near the middle/top
//     let cz2 = pz;

//     stroke(255, 150); // soft lines
//     bezier(
//       px,
//       py,
//       pz, // start point
//       cx1,
//       cy1,
//       cz1, // control 1
//       cx2,
//       cy2,
//       cz2, // control 2
//       center.x,
//       center.y,
//       center.z // end (center)
//     );
//   }
