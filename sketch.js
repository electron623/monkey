
var monkey , monkey_running
var banana ,bananaImage, enemy, enemyImage
var survivalTime = 0,score;   
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  enemyImage = loadImage("obstacle.png");
 
   
}



function setup() {
 
  monkey = createSprite(80,315,20,20)
   monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1
  
   ground = createSprite(400,350,2000,10);
  ground.velocityX =-4
  ground.x = ground.width /2;
  

  
  bannanaGroup = new Group();
  enemyGroup = new Group();
   score = 0;
}


function draw() {
  background ("lightBlue");
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50)
  
  if(ground.x<0){
     ground.x = ground.width /2;
  }
  
  if(keyDown("q")){
    monkey.velocityY = -20
  }
  monkey.velocityY = monkey.velocityY+2
  monkey.collide(ground);
  
  Banana();
  Enemy();
 if(bannanaGroup.isTouching(monkey)){
   bannanaGroup.destroyEach()
 }
  if(enemyGroup.isTouching(monkey)){
   enemyGroup.destroyEach();
    enemyGroup.setVelocityXEach(0);
    monkey.destroy();
    ground.velocityX = 0;
     bannanaGroup.destroyEach();
    bannanaGroup.setVelocityXEach(0);
    survivalTime = 0
 }
  
  
  
  
drawSprites();
 
  
}
function Banana(){
  if(World.frameCount%200 === 0){
  banana = createSprite(400,200,20,20);
  banana.addImage(bananaImage);
   banana.velocityX = -6
      banana.scale = 0.1
    bannanaGroup.add(banana)
  }
  
    
}
  function Enemy(){
  if(World.frameCount%100 === 0){
 enemy = createSprite(400,315,20,20);
  enemy.addImage(enemyImage);
   enemy.velocityX = -5
      enemy.scale = 0.15
    enemyGroup.add(enemy)
  }
  
    
}
