float i=0;
float h=0;

void setup(){
  size(300,300);
  rectMode(CENTER);
  colorMode(HSB,100);
  h=random(100);
  background(h,50,h);
}

void draw(){
  fill(h,50,50);
  rect(width/2,height/2,width, height);
  stroke(#ffffff);
  fill(h*0.5,50,50);
  text("Kiovahn Leon",200,270);
  if(i>350){
    i=-i;
  }
  translate(i+10,height/2);
  rotate(i);
  rect(0,0,150,150);
  i=i+1;
}
