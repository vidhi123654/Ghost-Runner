var tower,towerImg;
var door,doorImg,doorGp;
var climber,climberImg,climberGp;
var ghost,ghostImg1,ghostImg2,invisibleBlock
var invisibleBlockGp;
var gameState="play"
var sound


function preload(){
  
  towerImg=loadImage("tower.png")
  doorImg=loadImage("door.png")
  climberImg=loadImage("climber.png")
  ghostImg1=loadAnimation("ghost-standing.png")
  ghostImg2=loadAnimation("ghost-jumping.png")
  sound=loadSound("spooky.wav")
}

function setup(){
  
  createCanvas(600,600)
   tower=createSprite(300,300)
  tower.addImage(towerImg)
  tower.velocityY=3
  
  doorGp=new Group()
  climberGp=new Group()
  invisibleBlockGp=new Group()
  
  
  ghost=createSprite(300,300)
  ghost.addAnimation("ghostjumping",ghostImg1)
  ghost.scale=0.3
}

function draw(){
  
  if (gameState==="play"){
    
    
  
  
  if(tower.y>400)
  tower.y=300
  
  
  if(keyDown("left")){
    
    ghost.x=ghost.x-3
  }
  
  if(keyDown("right")){
    
    ghost.x=ghost.x+3
  }
  
  if (keyDown("space")){
    
    ghost.velocityY=-5
  }
  ghost.velocityY=ghost.velocityY+0.8 
  
  if(climberGp.isTouching(ghost)){
    ghost.velocityY=0 
    
  }
  
  if (invisibleBlockGp.isTouching(ghost)||ghost.y>600){
    ghost.destroy()
    gameState="end"
  }
  
  
  
  
  spawnDoor();
  drawSprites();
  }    
  
  
  if(gameState==="end"){
    textSize(50)
    fill("white")
    text("GAME OVER",150,300)
    sound.loop()
    
  }
}

function spawnDoor(){
  
  if(frameCount%200===0){
    door=createSprite(random(100,500),-50)
    door.velocityY=3
    door.addImage(doorImg)
    doorGp.add(door)
    door.lifetime=200
    ghost.depth=door.depth+1
    
    
    climber=createSprite(door.x,10)
    climber.velocityY=3
    climber.addImage(climberImg)
    climberGp.add(climber)
    climber.lifetime=200
    invisibleBlock=createSprite(climber.x,15,climber.width,2)
    invisibleBlock.velocityY=3
    invisibleBlockGp.add(invisibleBlock)
    invisibleBlock.debug=true
  }
  
}









