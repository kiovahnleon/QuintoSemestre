

float angulo;
float x,y;
float a;
float vel;

void setup(){
size(1300,500);
a=-400;
x=-100;
y=350;
vel=1;
frameRate(60);

}


void draw(){

  background(#66e0ff);
  //Calle
  stroke(0);
  strokeWeight(2);
  fill(#53c653);
  rect(0,350,width,150);//dibujo la calle.
  
  carro();
  pig();
  carro2();
  sun();
  x+=vel;
  a+=vel;
  angulo+=(vel+2);

  
 
  
  
}

void sun(){
  fill(#ffcc00);
ellipse(30, 30, 220, 220);
}

void pig(){
beginShape();
stroke(0);
//pig body
fill(#00cc00);
circle(x+130,y-100,80);
//pig eye
fill(255);
circle(x+150,y-110,20);
//pig pupil
fill(0);
circle(x+150,y-110,5);
//pig ear
fill(#00cc00);
circle(x+110,y-130,20);
//pig mouth
fill(0);
circle(x+150,y-80,20);
endShape();
}

void carro(){
//chasis
  beginShape();
     fill(#996633); //color carro
      vertex(x, y);//1  
      vertex(x, y-80);//2
      vertex(x+35, y-80);//3
      vertex(x+35, y-60);//4
      vertex(x+225, y-60);//5
      vertex(x+225, y-80);//6
      vertex(x+260, y-80);//7
      vertex(x+260, y);//8
      vertex(x, y);//9
  endShape();

   
   //tablas
   line(x, y-60, x+260, y-60);
   line(x, y-40, x+260, y-40);
   line(x, y-20, x+260, y-20);
   
   //pulling line
   line(x+260,y-30,width,y-60);
   
   //Llantas
   //llanta trasera
   pushMatrix();
      translate(x+60, y);
        stroke(0);
        strokeWeight(3);
        fill(#cc6600);
        circle(0,0,70);
        fill(#D7DEDD);
        circle(0,0,5);
        //spokes
        stroke(#331a00);   
        rotate(radians(angulo));
        line(0,0,20,25);
        rotate(radians(angulo + 1));
        line(0,0,20,25);
        rotate(radians(angulo + 2));
        line(0,0,20,25);
        rotate(radians(angulo +3));
        line(0,0,20,25);
        rotate(radians(angulo +4));
        line(0,0,20,25);
   popMatrix();
   
    //llanta delantera
   pushMatrix();
     translate(x+215,y);
        stroke(0);
        strokeWeight(3);
        fill(#cc6600);
        circle(0,0,70);
        fill(#D7DEDD);
        circle(0,0,5);
        //spokes
        stroke(#331a00);   
        rotate(radians(angulo));
        line(0,0,20,25);
        rotate(radians(angulo + 1));
        line(0,0,20,25);
        rotate(radians(angulo + 2));
        line(0,0,20,25);
        rotate(radians(angulo +3));
        line(0,0,20,25);
        rotate(radians(angulo +4));
        line(0,0,20,25);
   popMatrix();

}

void carro2(){
//chasis
  beginShape();
     fill(#996633); //color carro
      vertex(a, y);//1  
      vertex(a, y-80);//2
      vertex(a+35, y-80);//3
      vertex(a+35, y-60);//4
      vertex(a+225, y-60);//5
      vertex(a+225, y-80);//6
      vertex(a+260, y-80);//7
      vertex(a+260, y);//8
      vertex(a, y);//9
  endShape();

   
   //tablas
   line(a, y-60, a+260, y-60);
   line(a, y-40, a+260, y-40);
   line(a, y-20, a+260, y-20);
   
   //pulling line
   line(a+260,y-30,a+300,y-30);
   
   //Llantas
   //llanta trasera
   pushMatrix();
      translate(a+60, y);
        stroke(0);
        strokeWeight(3);
        fill(#cc6600);
        circle(0,0,70);
        fill(#D7DEDD);
        circle(0,0,5);
        //spokes
        stroke(#331a00);   
        rotate(radians(angulo));
        line(0,0,20,25);
        rotate(radians(angulo + 1));
        line(0,0,20,25);
        rotate(radians(angulo + 2));
        line(0,0,20,25);
        rotate(radians(angulo +3));
        line(0,0,20,25);
        rotate(radians(angulo +4));
        line(0,0,20,25);
   popMatrix();
   
    //llanta delantera
   pushMatrix();
     translate(a+215,y);
        stroke(0);
        strokeWeight(3);
        fill(#cc6600);
        circle(0,0,70);
        fill(#D7DEDD);
        circle(0,0,5);
        //spokes
        stroke(#331a00);   
        rotate(radians(angulo));
        line(0,0,20,25);
        rotate(radians(angulo + 1));
        line(0,0,20,25);
        rotate(radians(angulo + 2));
        line(0,0,20,25);
        rotate(radians(angulo +3));
        line(0,0,20,25);
        rotate(radians(angulo +4));
        line(0,0,20,25);
   popMatrix();

}
