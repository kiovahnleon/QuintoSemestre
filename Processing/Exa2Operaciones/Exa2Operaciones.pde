float i=1.0;
float h=1.0;

void setup(){
  size(1280,800);
  rectMode(CENTER);
}

void draw(){
  background(#ffffff);
  fill(#ff6600);
  //translate(i,height/2);
  rotate(i);
  scale(h);
  translate(i,i);
  rect(300,300,150,150);
  i+=0.1;
  h+=0.001;
  
  //print(i);
  print("\n");
  print(h);
}
