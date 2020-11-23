const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var stone;
var boy;
function preload(){
	boy=loadImage("images/boy.png");
  }
function setup() {
	createCanvas(1300, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,680,1300,20);
	stone = new Stone(200,750,20,20);
	


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  image(boy ,100,450,200,300);
  
  ground.display();
  stone.display();
 

}



