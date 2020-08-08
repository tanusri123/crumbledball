var dustbin,paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{groundObject.display=(ground = BODIES.rectangle(200,380,400,20,option))
dustbinObject.display=(dustbin=createSprite(320,200,50,20))	
paperObject.display=(paper=createSprite(150,200,10,10))

	
}

function setup() {
	createCanvas(400, 400);

    ellipseMode(RADIUS)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin=createSprite(320,400,50,20);
	dustbin.shapeColor = (0,225,0)
    ground = BODIES.rectangle(200,380,400,20,option);
	paper=createSprite(150,390,10,10);
	matter.body.circle(320,200,0.5,option2,right);
	WORLD.add(world,ground)
	paperObject.radius=70;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   matter.body.setStatic={body};
	   isStatic=false;
	   matter.body.applyForce(paperObject.body,paperObject.body.position,{x=85,y=-85} )
	   paper.velocityX=4;
	   paper.velocityY=5;
	   restitution=0.5;
	   friction=0.5;
	   density=1.2;

	   display()
	   paperObject.dislay();
	   dustbinObject.display();
	   groundObject.display();
	
	   
	   drawSprites();
	}}}
