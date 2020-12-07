
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var ground,groundImg;
var bird,birdImg;
var pillar1,pillarImg,pillar2,pillar3,pillar4,pillasr5;
var score=0;

function preload()
{
groundImg=loadImage("background.png");
birdImg=loadImage("bird.png");	
pillarImg=loadImage("pillar.png");
}

function setup() {

ground=createSprite(0,0,1500,600);
ground.velocityX=-5;
ground.addImage(groundImg);
ground.scale=13;

bird=createSprite(200,300,20,20);
bird.addImage(birdImg);
bird.scale=0.8;
bird.velocityX=3;


pillar1=createSprite(500,500,10,10);
	pillar1.scale=0.37;
	
		pillar1.addImage(pillarImg);
	  
		pillar2=createSprite(750,30,10,10);
	pillar2.scale=0.37;
		pillar2.addImage(pillarImg);
	

		pillar3=createSprite(1200,30,10,10);
		pillar3.scale=0.37;
			pillar3.addImage(pillarImg);

			pillar4=createSprite(950,500,10,10);
	pillar4.scale=0.37;
	
		pillar4.addImage(pillarImg);

		pillar5=createSprite(1400,500,10,10);
	pillar5.scale=0.37;
	
		pillar5.addImage(pillarImg);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	
	createCanvas(1500,600)
	background("black");
	
	fill("black");
  strokeWeight(2);
  textSize(10);
  score = score + Math.round(frameCount/60);
  text("Score : " + score,1500,600);
	camera.position.x = displayWidth/2;
	camera.position.y = bird.y;

	
	 pillar1.setCollider("rectangle",0,-80,pillar1.width-30,pillar1.height+400);
	
	 pillar2.setCollider("rectangle",0,-80,pillar2.width-500,pillar2.height+780);

	 pillar3.setCollider("rectangle",0,-80,pillar3.width-500,pillar3.height+720);
	
	 pillar4.setCollider("rectangle",0,-80,pillar4.width-30,pillar4.height+400);

	 pillar5.setCollider("rectangle",0,-80,pillar5.width-520,pillar5.height+450);
	 
	 if(bird.x >1450)
	{
	bird.x= 200;
	}

	if(gameState==PLAY){

	
	
	if(ground.x<0){
		ground.x=ground.width/2;
	}
	
		
	  if(keyDown("UP_ARROW")) {
        bird.velocityY = -12;
       
    }
	if(keyDown("DOWN_ARROW")) {
        bird.velocityY = 12;
       
    }
	}
	if(bird.isTouching(pillar1)|| (bird.isTouching(pillar2))){

		gameState==END;
		bird.visible=false;
		pillar1.visible=false;
		pillar2.visible=false;
		pillar3.visible=false;
		pillar4.visible=false;
		pillar5.visible=false;
		fill("black");
		textSize(50);
		ground.velocityX=0;
		text("GAMEOVER PRESS REFRESH TO PLAY AGAIN",750,300);
	}
	
  rectMode(CENTER);  
  drawSprites();
 
}



