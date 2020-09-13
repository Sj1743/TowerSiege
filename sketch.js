//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const engine = Engine.create();
const world = engine.world;

//variables
var bg = [247, 237, 226];
var ground, stand;
var rock;
var slingshot;
var block01, block02, block03, block04, block05, block06, block07, block08, 
    block09, block10, block11, block12, block13, block14, block15;


function setup() {

  //canvas
  createCanvas(800,400);

  /*BODIES*/

	//ground
  ground = new Ground(400, 400, 800, 20);
  
  //stand
  stand = new Ground(500, 305, 160, 10);

	//rock
  rock = new Rock();

	//slingshot
	slingshot = new Slingshot(rock.body, {x: 150, y: 300});

  //blocks
  // //layer 1 - bottom most
	 block01 = new Box(440, 285, Math.floor(Math.random() * 4));
	 block02 = new Box(470, 285, Math.floor(Math.random() * 4));
	 block03 = new Box(500, 285, Math.floor(Math.random() * 4));
	 block04 = new Box(530, 285, Math.floor(Math.random() * 4));
   block05 = new Box(560, 285, Math.floor(Math.random() * 4));
  //layer 2
	 block06 = new Box(455, 255, Math.floor(Math.random() * 4));
   block07 = new Box(485, 255, Math.floor(Math.random() * 4));
	 block08 = new Box(515, 255, Math.floor(Math.random() * 4));
   block09 = new Box(545, 255, Math.floor(Math.random() * 4));
  //layer 3
   block10 = new Box(470, 225, Math.floor(Math.random() * 4));
	 block11 = new Box(500, 225, Math.floor(Math.random() * 4));
   block12 = new Box(530, 225, Math.floor(Math.random() * 4));
  //layer 4
   block13 = new Box(485, 195, Math.floor(Math.random() * 4));
   block14 = new Box(515, 195, Math.floor(Math.random() * 4));
  //layer 5 - top most
   block15 = new Box(500, 165, Math.floor(Math.random() * 4));


	//run engine
	Engine.run(engine);

}

function draw() {

  //background
  background(bg); 

  /*DISPLAY*/

  //ground 
  ground.display();

  //stand
  stand.display();

  //rock
  rock.display();

  //slingshot
  slingshot.display();

  //blocks
  block01.display();
  block02.display();
  block03.display();
  block04.display();
  block05.display();
  block06.display();
  block07.display();
  block08.display();
  block09.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
}


function mouseDragged(){
    Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(rock.body, {x: 160, y: 300});
		slingshot.attach(rock.body);
	}
}


async function getBackgroundImage(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Phoenix");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11, 13);

  if(hour >= 06 && hour <= 19){
      bg = [247, 237, 226];
  }else{
      bg = [0,0,0];
  }
}
