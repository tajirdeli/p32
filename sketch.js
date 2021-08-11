const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var score=0
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  //set 2 for second stand
  //level one
  Blocks1 = new Block(640,175,30,40);
  Blocks2 = new Block(670,175,30,40);
  Blocks3 = new Block(700,175,30,40);
  Blocks4 = new Block(730,175,30,40);
  Blocks5 = new Block(760,175,30,40);
  //level two
  Blocks6 = new Block(670,135,30,40);
  Blocks7 = new Block(700,135,30,40);
  Blocks8 = new Block(730,135,30,40);
  //top
  Blocks9 = new Block(700,95,30,40);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  text("SCORE: "+score,450,100)
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  Blocks1.display();
  Blocks2.display();
  Blocks3.display();
  Blocks4.display();
  Blocks5.display();
  fill("turquoise");
  Blocks6.display();
  Blocks7.display();
  Blocks8.display();
  fill("pink")
  Blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
block1.Score()
block2.Score()
block3.Score()
block4.Score()
block5.Score()
block6.Score()
block7.Score()
block8.Score()
block9.Score()
block10.Score()
block11.Score()
block12.Score()
block13.Score()
block14.Score()
block15.Score()
block16.Score()
Blocks1.Score()
Blocks2.Score()
Blocks3.Score()
Blocks4.Score()
Blocks5.Score()
Blocks6.Score()
Blocks7.Score()
Blocks8.Score()
Blocks9.Score()
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode===32){
    slingShot.attach(this.ball)
  }
}

