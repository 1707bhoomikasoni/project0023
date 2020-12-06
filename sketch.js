var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true},packageOptions);
	World.add(world, packageBody);
	

	//Create a Ground
	
	 var packageOptions ={
		restitution: 0
	}
	
	box1=new Box(360,650,200,20)
	box2= new Box(460,610,20,100)
	box3=new Box(260,610,20,100)  
	ground=new Ground(width/2,660,8000,10)


}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  Engine.update(engine)
  box1.display()
  box2.display()
  box3.display()
	ground.display()
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody,false)


}
}