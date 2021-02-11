

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var engine,world
var ground,roof,l1b1,l1b2,l1b3,l1b4,l1b5
var ch1
var ball
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Box (600,680,1200,20)
    roof=new Box (900,500,300,20)
	l1b1=new Block(800,475)
	l1b2=new Block(840,475)
	l1b3=new Block(885,475)
	l1b4=new Block(930,475)
	l1b5=new Block(975,475)


	l2b1=new Block(821.5,425)
	l2b2=new Block(857,425)
	l2b3=new Block(902,425)
	l2b4=new Block(942,425)


	l3b1=new Block(870,375)
	l3b2=new Block(882,375)
	l3b3=new Block(892,375)
	ball=new Ball()
	ch1=new Rope(ball.body,{x:600,y:300})
	
}

function draw(){
background("lightblue")
Engine.update (engine)
ground.display()
roof.display()
l1b1.display()
l1b2.display()
l1b3.display()
l1b4.display()
l1b5.display()


l2b1.display()
l2b2.display()
l2b3.display()
l2b4.display()


l3b1.display()
l3b2.display()
l3b3.display()

ball.display()
ch1.display()
}
function mouseDragged(){
		Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
		
}
function mouseReleased(){
	ch1.fly()
}








 


