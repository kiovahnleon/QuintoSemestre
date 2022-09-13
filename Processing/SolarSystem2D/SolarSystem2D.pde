float r, ex, ey;

void setup(){
  size(800,800);
  ex=140;
  ey=0;
  frameRate(60);
}

void draw(){
  background(0);
  pushMatrix();
  translate(width/2,height/2);
  rotate(radians(r));
  
  //sun
  fill(#FBFF39);
  ellipse(0,0,100,100);
  //fill(0);
  //line(-40,-40,80,80);

  rotate(radians(r));
  //mercury
  fill(#CBCBCB);
  ellipse(70,20,10,10);
  
  rotate(radians(r));
  //venus
  fill(#DFA70E);
  ellipse(80,50,10,10);

  rotate(radians(r));
  //earth
  fill(#3C51CE);
  ellipse(ex,ey,20,20);
  
  rotate(radians(r));
  //mars
  fill(#E71212);
  ellipse(200,100,23,23);  
  
  rotate(radians(r));
  //jupiter
  fill(#FA7900);
  ellipse(120,230,40,40);
  
  rotate(radians(r));
  //saturn
  fill(#FFDF12);
  ellipse(260,150,30,30);
  
  rotate(radians(r));
  //uranus
  fill(#D2E1E2);
  ellipse(290,180,20,20);
  
  rotate(radians(r));
  //neptune
  fill(#2BD1D9);
  ellipse(210,320,30,30);

  popMatrix();
  r+=0.2;
  
  text("Kiovahn Leon",650,600);
}
