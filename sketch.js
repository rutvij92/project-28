
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var boy;
var rock;




function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
    ground = new Ground(600,680,1200,20);
	tree=new Tree(830,670,500,500);
	boy=new Boy(370,605,300,300);
	rock=new Rock(360,205,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
 ground.display();
 tree.display();
 boy.display();
 rock.display();
}



