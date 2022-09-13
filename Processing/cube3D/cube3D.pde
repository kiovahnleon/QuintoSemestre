float a;
PImage img;

void setup(){
  size(640,360,P3D);
  frameRate(60);
  img = loadImage("winPeng.png");
}

void draw(){
  background(126);
  a+=0.03;
  
  if(a>TWO_PI){
  a=0.0;
  }
  
  translate(width/2,height/2);
  rotateX(a);
  rotateY(a);
  fill(255);
  box(160);
  
  imageMode(CENTER);
  
  //Cara 1
  pushMatrix();
  translate(0,0,81);
  img.resize(160,160);
  image(img,0,0);
  popMatrix();
  
  //Cara 2
  pushMatrix();
  rotateX(radians(90));
  translate(0,0,81);
  img.resize(160,160);
  image(img,0,0);
  popMatrix();
  
  //Cara 3
  pushMatrix();
  rotateX(radians(-90));
  translate(0,0,81);
  img.resize(160,160);
  image(img,0,0);
  popMatrix();
  
  //Cara 4
  pushMatrix();
  rotateY(radians(90));
  translate(0,0,81);
  img.resize(160,160);
  image(img,0,0);
  popMatrix();
  
  //Cara 5
  pushMatrix();
  rotateY(radians(-90));
  translate(0,0,81);
  img.resize(160,160);
  image(img,0,0);
  popMatrix();
  
  //Cara 6
  pushMatrix();
  translate(0,0,-81);
  img.resize(160,160);
  image(img,0,0);
  popMatrix();
}
