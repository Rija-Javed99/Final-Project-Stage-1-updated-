var bg, bgimg;


function preload(){
bgimg=loadImage("images/bg3.jpg")
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(width/2,height/2,width,400);
  bg.addImage("ground",bgimg);
  bg.scale= 0.6
  bg.velocityX = -3 ;
 
}

function draw() {
 background(0);
  
 if (bg.x < 0){
  bg.x = width/2
}

  drawSprites();
 
}

