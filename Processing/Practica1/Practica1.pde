void setup(){
  size(500,500);
}

void draw(){
  
  background(0,0,0);
  
  fill(204,102,0);
  stroke(200,0,100);

  triangle(100,100,75,150,125,150);
  circle(400,125,50);
  rect(225,300,50,70,10);
  
  fill(200,300,100);
  
  textSize(15);
  
  text("triangulo",75,170);
  text("rectangulo",225,390);  
  text("circulo",380,170);
}
