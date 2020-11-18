var wall1,wall2,wall3
var b1,b2,b3
var g2,g2,g3
var ba,bb,bc,bd
var sound1
var i=0
function preload(){
ba=loadImage("airsoft.jpg")
bb=loadImage("ak-47.jpg")
bc=loadImage("pistol_LI.jpg")
bd=loadImage("bullet.jpg")
sound1=loadSound("gun-gunshot-01.mp3")

}
function setup() {
  createCanvas(1000,400);
  wall1=createSprite(950, 50, 10, 50);
  wall2=createSprite(950, 150, 10, 50);
  wall3=createSprite(950, 250, 10, 50);

  b1=createSprite(80,35,10,10)
  b1.addImage("bullet",bd)
  b1.scale=0.05

  g1=createSprite(80,50,10,10)
  g1.addImage("air",ba)
  g1.scale=0.2
  g2=createSprite(80,150,10,10)
  g2.addImage("ak-47",bb)
  g2.scale=0.05
  g3=createSprite(80,260,10,10)
  g3.addImage("pistol",bc)
  g3.scale=0.5
  
}

function draw() {
  background(0);

  text("Press a",200,50)
  text("Press b",200,150)
  text("Press c",200,250)
  
  b1.collide(wall1)
  b1.collide(wall2)
  b1.collide(wall3)
  
  if(i===0&&keyWentDown("a")){
    b1.x=80
    b1.y=35
    sound1.play()
    b1.velocityX=50
    i=1
  } 

  if(i===1){
    fill("white")
    text("Speed = 324 m/s",300,320)
    text("Damage done = 10",300,340)
    text("Gun rating: Efficient",300,360)
  }
  
  if(i===1&&keyWentDown("b")){
    b1.x=80
    b1.y=150-15
    sound1.play()
    b1.velocityX=60
    wall1.shapeColor="darkgreen"
    i=2
  }

  if(i===2){
    fill("white")
    text("Speed = 402 m/s",300,320)
    text("Damage done = 40",300,340)
    text("Gun rating: Lethal",300,360)
  }
  
  if(i===2&&keyWentDown("c")){
    b1.x=80
    b1.y=235
    sound1.play()
    b1.velocityX=30
    wall2.shapeColor="red"
    i=3
  }

  if(i===3){
    fill("white")
    text("Speed = 256 m/s",300,320)
    text("Damage done = 6",300,340)
    text("Gun rating: Good",300,360)
    text("Press space to test again",300,380)
  }
  if(i===3&&keyDown("space")){
    wall3.shapeColor="lightgreen"
    i=0
  }
  drawSprites();
}