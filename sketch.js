var myImage;

function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
}

function draw() {
  background(52, 73, 94);
  
  ellipse(width/2, height/2,270, 270);

// centramento orologio	
  translate(width/2, height/2);
  
  // seconds
  clockHand(second(), 60,20, 120, [52, 152, 219]);
  
  // minutes
  clockHand(minute(), 60, 20, 90, [46, 204, 113]);
  
  // hours
  if (hour() > 12) {
    var hour12 = hour() - 12;
  } else {
    var hour12 = hour();
  }
  clockHand(hour12, 12, 20, 60, [155, 89, 182])

    
}

function clockHand(timeValue, range, size, radius, color) {
  push();
  var angle = map(timeValue, 0, range, -90, 270);
  
  noFill();
  noStroke();
  strokeWeight(size);
  stroke(color);
  line(0,0,radius*cos(angle),radius*sin(angle));
  pop();
}