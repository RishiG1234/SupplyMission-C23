var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var ground;
var trashcan1;
var trashcan2;
var trashcan3;
var paper;


function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,390,1200,20);

    trashcan1 = new Trashcan(850,275,30,150);
	trashcan2 = new Trashcan(950,365,200,30);
	trashcan3 = new Trashcan(1050,275,30,150);

	paper = new Paper(50,300,50);

	Engine.run(engine);
  
	console.log(paper);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();
  paper.display();
  drawSprites();
 
}



