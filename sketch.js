//Utilize las flechas para mover al triangulo
let angulo = 0;
let x = 0;
let y = 0;
let velocidadX = 0
let velocidadY = 0;
let velocidadDeGiro = 0;

function setup() {
  createCanvas(600, 800);
  frameRate(2);
}

function draw() {
  background(47, 83, 34);
  noStroke();
  push(); 
  // figuras negras 1
  fill(random(255), random(255), random(255));
  quad(59, 280, 220, 122, 500, 800, 193, 800);
  rect(0, 750, 600, 800);
  rect(86, 654, 180, 200);
  
  // quad grises
  fill(random(255), random(255), random(255));
  quad(35, 356, 599, 20, 470, 384, 24, 609);
  quad(75, 672, 144, 508, 144, 619, 154, 633);
  
  // triangulo medio blanco
/*fill("#F1E8E8")
triangle(166, 309, 155, 527, 317, 390)*/
  
  // quad azul
  fill(random(255), random(255), random(255));
  quad(93, 683, 71, 750, 500, 746, 517, 436);
  
  // triangulo negro
  fill(random(255), random(255), random(255));
  triangle(59, 283, 198, 760, 176, 168);
  
  // figuras amarillas
  fill(random(255), random(255), random(255));
  triangle(32, 740, 164, 581, 90, 392);
  quad(196, 641, 204, 743, 500, 749, 385, 554);
  triangle(148, 263, 222, 145, 76, 164);
  triangle(295, 32, 313, 385, 379, 150);
  
  // figuras anaranjadas
  fill(random(255), random(255), random(255));
  quad(90, 392, 117, 459, 190, 300, 133, 292);
  triangle(133, 292, 208, 134, 314, 387);
  triangle(44, 749, 192, 748, 167, 646);
  triangle(400, 55, 312, 390, 355, 365);
  
  // triangulos grises
  fill(random(255), random(255), random(255));
  triangle(43, 749, 191, 749, 200, 800);
  triangle(205, 748, 498, 749, 200, 800);
  pop();
  
  push();
  //mover el triangulo
  if(keyIsPressed){
     if(keyCode== LEFT_ARROW){
    velocidadX= -5;
    velocidadDeGiro = -0.1;
   }else if(keyCode == RIGHT_ARROW){
    velocidadX = 5;
    velocidadDeGiro = 0.1;
  }
  else{
    velocidadX = 0;
    velocidadDeGiro = 0;
  }
  x += velocidadX;
  }
  if(keyIsPressed){
    if(keyCode == UP_ARROW){
    velocidadY= -5;
  } else if(keyCode == DOWN_ARROW){
    velocidadY = 5;
  } else{
    velocidadY = 0;
  }
    y += velocidadY
  }
  //actualizar la posición de rotación del triangulo

  y += velocidadY;
  angulo += velocidadDeGiro
  if(angulo > TWO_PI){
    angulo -= TWO_PI;
  }
  //Cambiar la dirección si llega al limite del cuadro.
  if(x + 317 > width){
    x = width - 317;
    velocidadX = -velocidadX;
  }
  if(x + 155 < 0){
    x = -155;
    velocidadX = -velocidadX;
  }
  if(y + 527 > height){
    y = height - 527;
    velocidadY = -velocidadY;
  }
  if(y + 309 < 0){
    y = -309;
    velocidadY = -velocidadY;
  }
    
  pop();
  push();
  frameRate(20);
  translate(x + 241, y + 418);
  rotate(angulo);
  fill("#F1F1F1");
  triangle(-75, -109, -86, 109, 75, 0);
  pop();
}