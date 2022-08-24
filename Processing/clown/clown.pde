void setup(){
  size(500,500);
}

void draw(){
  background(0,0,0);
  noStroke();
  face();
  hat();
  nose();
  cheeks();
  smile();
  eyes();
}

void face(){
  fill(255,255,255);
  circle(250,250,300);
}

void hat(){
  stroke(255,255,0);
  fill(0,255,0);
  triangle(250,25,175,125,325,125);
}

void eyes(){
  stroke(0,0,0);
  fill(0,0,255);
  quad(170,190, 190,160,220,180,200,210);
  translate(120,0);
  quad(170,190, 190,160,220,180,200,210);
}

void nose(){
  stroke(0,0,0);
  fill(255,255,0);
  circle(250,250,50); 
}

void cheeks(){
  noStroke();
  fill(255,0,0);
  circle(150,300,50);
  circle(350,300,50); 
}

void smile(){
  strokeWeight(3);
  stroke(255,0,0);
  noFill();
  arc(250,300,200,150,0,PI);
}
