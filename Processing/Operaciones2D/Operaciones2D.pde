int x;
int speed;
int Lrect=100, Rrect=100;

void setup(){
  size(800,800);
  x=250;
  speed=4;
}

void draw(){
  background(50,100,0);
  paddles();
  paddleMovement();
  ball();
}

void paddles(){
  fill(10,75,0);
  stroke(255);
  rect(50,Lrect,150,500);
  rect(600,Rrect,150,500); 
}
  
void ball(){
  fill(255);
  circle(x,350,100);
  x=x+speed;
  
  if(x>550){
    speed=-speed;  
  }
  
  if(x<250){
  speed=-speed;  
  }
}

void paddleMovement(){
 if(keyPressed==true && key == 'w'){
   Lrect -=5;
 }
  if(keyPressed==true && key == 's'){
   Lrect +=5;
 }
  if(keyPressed==true && key == 'o'){
   Rrect -=5;
 }
  if(keyPressed==true && key == 'l'){
   Rrect +=5;
 }
}
