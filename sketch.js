const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const constraint=Matter.Constraint;

var holder,polygon,ground;
var stand1;
var slingshot;

function setup(){
engine= Engine.create();
world=engine.world();

createCanvas(900,400);

ground=new Ground();
stand1=new Stand(380,300,270,10);

block1=new Block(390,275,30,40);
block2=new Block(420,275,30,40);
block3=new Block(460,275,30,40);
block4=new Block(500,275,30,40);
block5=new Block(530,275,30,40);

block6=new Block(420,235,30,40);
block7=new Block(460,235,30,40);
block8=new Block(500,235,30,40);
block9=new Block(520,235,30,40);

block10=new Block(450,195,30,40);
block11=new Block(490,195,30,40);
block12=new Block(530,195,30,40);

block13=new Block(480,155,30,40);
block14=new Block(520,155,30,40);

block15=new Block(510,105,30,40);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

sligshot=new Slingshot(this.polygon,{x:200,y:200})
}

function draw(){
background("white");
Engine.update(engine);

stroke(15);
fill(89,24,21);
ground.display();

stroke(15);
stand1.display();
stand2.display();
slingshot.display();

stroke(15);
fill("dark blue");
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

fill("indigo");
stroke(15);
block6.display();
block7.display();
block8.display();
block9.display();

fill("blue");
stroke(15);
block10.display();
block11.display();
block12.display();

fill("turquoise");
stroke(15);
block13.display();
block14.display();

fill("cyan");
stroke(15);
block15.display(); 



fill("yellow");
textSize(22);
text("Drag the hexagonal polygon and release it to make the building blocks fall",100,200);

ecllipse(polygon.position.x,polygon.position.y,20);

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}