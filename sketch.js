const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var platform
var myengine,myworld,ground,ball;
var box1,box2;
var ground2
var pig1,pig2
var log1,log2,log3,log4,log5
var bird1
var bging
var chain,chain2

function preload(){
bging=loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1000,600);

  myengine=Engine.create();
  myworld=myengine.world;

  box1=new Box(700,550,60,60);
  box2=new Box(900,550,60,60);
pig1=new Pig(800,550,40,40)

ground2=new grnd (500,600,1000,30)

platform=new grnd (100,500,350,300)
log1=new Log(800,500,20,300,PI/2)
box3=new Box(700,450,60,60);
box4=new Box(900,450,60,60);
pig2=new Pig(800,480,40,40)
log2=new Log(800,400,20,300,PI/2)
box5=new Box(800,350,60,60);
log3=new Log(750,350,20,150,PI/4)
log4=new Log(850,350,20,150,-PI/4)
bird1=new Birds(200,140,40,40)

chain=new slingshot(bird1.body,{x:200,y:140})
//chain2=new rope(box1.body,pig1.body)
}

function draw() {
  background(bging);
  Engine.update(myengine)
  box1.display();
  box2.display();
  ground2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird1.display();
  platform.display();
  
  chain.display();
 // console.log(getFrameRate())
  //chain2.display();
} 
 
function mouseDragged(){

//bird1.body.position.x = mouseX
//bird1.body.position.y = mouseY
Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){

chain.fly()

//82
}
function keyPressed(){
if(keyCode===32){
  chain.attach(bird1.body)
}


}