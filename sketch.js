const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const constraint=Matter.Constraint;

var holder,polygon,ground;
var stand1,stand2;
var slingshot;
function preload(){

}
function setup(){
engine= Engine.create();
world=engine.world();

createCanvas(900,400);

ground=new Ground();
stand1=new Stand(380,300,270,10);
stand2=new Stand(700,200,200,10);

block1=new Block();
block2=new Block();
block3=new Block();
block4=new Block();
block5=new Block();

block6=new Block();
block7=new Block();
block8=new Block();
block9=new Block();

block10=new Block();
block11=new Block();
block12=new Block();

block13=new Block();
block14=new Block();

block15=new Block();

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

sligshot=new Slingshot(this.polygon,{x:200,y:200})
}

function draw(){
background("white");
Engine.update(engine);
stroke(15);
ground.display();
stand1.display();
stand2.display();

stroke(15);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();

stroke(15);
block6.display();
block7.display();
block8.display();
block9.display();

stroke(15);
block10.display();
block11.display();
block12.display();

stroke(15);
block13.display();
block14.display();

stroke(15);
block15.display();

}