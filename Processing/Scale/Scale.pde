float i = 0.0;
float h = 0.0;

void setup() {
  size(640, 360);
  noStroke();
  ellipseMode(CENTER);
  frameRate(30);
}

void draw() {
  
  background(0,199,190);
  
  i += 0.04;
  h = sin(i)*2;
  
  //translate(width/2, height/2);
  translate(320, 180);
  scale(h); 
  fill(255,204,0);
  ellipse(0, 0, 50, 50); 
  
  translate(0, 75);
  fill(255,159,10);
  scale(h);
  ellipse(0, 0, 50, 50);    
  
  translate(75, 0);
  fill(255,159,10);
  scale(h);
  ellipse(0, 0, 50, 50);  
  
  print("\n");
  print(h);
}
