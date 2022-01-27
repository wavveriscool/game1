var mario;
var blockback, obstacles;
var PLAY, END;
var Marios
var invisibleGround;



function preload(){
  Marios = loadImage("mario.png");
 blockbacks = loadImage("background.png");
 gumball = loadImage("gumba.png");
}

function setup() {
    createCanvas(400,400);
    blockback = createSprite(200,200);

 blockback.addImage( blockbacks);

 mario = createSprite(200,357);
 mario.scale=0.04;
 mario.addImage("mariostill", Marios);
 
 gumba = createSprite(369,345);
 gumba.addImage(gumball);
 gumba.scale=0.05
 gumba.velocityX=-2
 invisibleGround = createSprite(200,357,400,5);
 invisibleGround.visible = true; 
invisibleGround.debug= false
 

 
 //invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  blockback.velocityX=-4;
}

function draw() {
   background(0);
    
   if(blockback.x<0)
   {
     blockback.x = blockback.width/2;
   }
   if(keyDown("space")&& mario.y >= 100) {
    mario.velocityY = -12;
   
}
if(mario.isTouching(gumba)){
  mario.velocityY=0;
  mario.velocityX=0;
  gumba.velocityX=0;
  gumba.velocityX=0;
  blockback.velocityX= 0 ;
}
mario.velocityY = mario.velocityY+ 0.5;
 
if(keyDown("right_arrow")) {
  mario.velocityX = 1;
}

mario.collide(invisibleGround);
    
    drawSprites();
}
