const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var backgroundImg
var engine,world
var snowflakes=[]
function preload() {
  backgroundImg=loadImage ("snow2.jpg")
}
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  Engine.update (engine)
  if (frameCount%10===0) {
    snowflakes.push(new snow(random(10,750),10,10))
  }
  for (var i=0;i<snowflakes.length;i++) {
    snowflakes [i].display ()
  }
  drawSprites();
}

