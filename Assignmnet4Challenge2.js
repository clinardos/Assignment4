// Linardos, Caitlin
// Assignment 4 Challenge 1

let sunFlower1 = {
  //coral
  startX: 100,
  startY: 120,
  size: 0.9,
  petals: 240,
  rotation: 221,
  color: 255,
  color2: 170,
  color3: 130,
};

let sunFlower2 = {
  //light pink
  startX: 43,
  startY: 43,
  size: 0.8,
  petals: 72,
  rotation: 227,
  color: 255,
  color2: 203,
  color3: 190,
};

let sunFlower3 = {
  //ashy purple
  startX: 38,
  startY: 160,
  size: 0.7,
  petals: 120,
  rotation: 193,
  color: 200,
  color2: 145,
  color3: 155,
};

let sunFlower4 = {
  //yellow
  startX: 10,
  startY: 97,
  size: 0.62,
  petals: 80,
  rotation: 23,
  color: 255,
  color2: 200,
  color3: 93,
};
let sunFlower5 = {
  // hot pink
  startX: 120,
  startY: 50,
  size: 0.6,
  petals: 80,
  rotation: 23,
  color: 250,
  color2: 130,
  color3: 160,
};
let sunFlower6 = {
  // green
  startX: 136,
  startY: 10,
  size: 0.45,
  petals: 80,
  rotation: 23,
  color: 140,
  color2: 190,
  color3: 140,
};
let sunFlower7 = {
  // red/deep orange
  startX: 140,
  startY: 166,
  size: 0.55,
  petals: 280,
  rotation: 295,
  color: 210,
  color2: 85,
  color3: 70,
};
let sunFlower8 = {
  // teal
  startX: 95,
  startY: 10,
  size: 0.4,
  petals: 360,
  rotation: 65,
  color: 100,
  color2: 190,
  color3: 190,
};
let sunFlower9 = {
  //White flower with 4 petals
  startX: 10,
  startY: 5,
  size: 0.35,
  petals: 80,
  rotation: 23,
  color: 160,
  color2: 160,
  color3: 220,
};
let sunFlower10 = {
  //White flower with 4 petals
  startX: 90,
  startY: 178,
  size: 0.4,
  petals: 80,
  rotation: 23,
  color: 200,
  color2: 222,
  color3: 200,
};

// This allows the pattern ti be easily changed
let pattern = {
  rows: 2.73,
  columns: 6,
};

function setup() {
  createCanvas(960, 540);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background("wheat");

  // This creates the Columns
  for (let columnsDrawn = 0; columnsDrawn < pattern.columns; columnsDrawn++) {
    sunFlower1.x = sunFlower1.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower2.x = sunFlower2.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower3.x = sunFlower3.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower4.x = sunFlower4.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower5.x = sunFlower5.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower6.x = sunFlower6.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower7.x = sunFlower7.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower8.x = sunFlower8.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower9.x = sunFlower9.startX + (width / pattern.columns) * columnsDrawn;
    sunFlower10.x =
      sunFlower10.startX + (width / pattern.columns) * columnsDrawn;

    // This creates the rows
    for (let rowsDrawn = 0; rowsDrawn < pattern.rows; rowsDrawn++) {
      sunFlower1.y = sunFlower1.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower2.y = sunFlower2.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower3.y = sunFlower3.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower4.y = sunFlower4.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower5.y = sunFlower5.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower6.y = sunFlower6.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower7.y = sunFlower7.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower8.y = sunFlower8.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower9.y = sunFlower9.startY + (height / pattern.rows) * rowsDrawn;
      sunFlower10.y = sunFlower10.startY + (height / pattern.rows) * rowsDrawn;

      // adding sunFlowers to column's and rows
      addSunFlower(sunFlower1);
      addSunFlower(sunFlower2);
      addSunFlower(sunFlower3);
      addSunFlower(sunFlower4);
      addSunFlower(sunFlower5);
      addSunFlower(sunFlower6);
      addSunFlower(sunFlower7);
      addSunFlower(sunFlower8);
      addSunFlower(sunFlower9);
      addSunFlower(sunFlower10);
    }
  }
}

function addSunFlower(sunFlower) {
  push();
  // allows flower to be moved
  translate(sunFlower.x, sunFlower.y);
  // Controls size of flower
  scale(sunFlower.size);

  // This fills the color based on each flower parameters
  fill(sunFlower.color, sunFlower.color2, sunFlower.color3);

  //This creates the petals
  for (let petalsAdded = 0; petalsAdded < sunFlower.petals; petalsAdded++) {
    ellipse(0, 42, 7, 45);
    rotate(sunFlower.rotation);
  }
  push();
  noStroke();

  // Bulb of the flower
  fill("hsla(0,35%,29%,1)");
  ellipse(0, 0, 40);
  pop();
  pop();
}
