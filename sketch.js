function preload(){
 snowflakeImg= loadImage ("snow5.webp")
 bgImg= loadImage ("snow2.jpg")

}
function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background (bgImg);  
  drawSprites();
  createsnowflake();
}

function createsnowflake(){
  if(frameCount%10===0){
    snowflake=createSprite(random(0,800),0,50,50)
    snowflake.velocityX = -2
    snowflake.velocityY = 4
    snowflake.addImage (snowflakeImg)
    snowflake.scale = 0.1
  }
}