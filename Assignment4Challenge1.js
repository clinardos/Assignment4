// Linardos, Caitlin 
// Assignment 4 Challenge 1


function setup() {
  createCanvas(400, 400);
noLoop()

}

function draw() {
  background ("wheat")

  // First Sunflower
    addSunFlower (114,114,1.7, "darkolivegreen");
  // Second Sunflower
    addSunFlower (310,80,1.2, "gold");
   // Third Sunflower
    addSunFlower (80,305,1.2, "firebrick");
  // Fourth Sunflower
    addSunFlower (280,280,1.8, "orange");
}

// function that creates sunflower
function addSunFlower(x,y,size,color) {
  push()
  translate (x,y)
  scale (size)
  
  push()
  noStroke()
    fill ("hsla(0,35%,29%,1)")
  ellipse (0,0,40)
  pop()
  fill (color)
  for (let petalsAdded = 0; petalsAdded <120; petalsAdded++){ rotate (140)
   ellipse (0,42,7,45) }
 pop()
}
