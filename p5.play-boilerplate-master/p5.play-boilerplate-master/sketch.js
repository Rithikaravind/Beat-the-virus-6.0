var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameover,restart,restartImg;

var hospital, forest,india, london, newyork, runner1, tokyo;
var bg, boy;
var virus,virGroup,medkit,medkitimg;
var location
var frameCountvalue=80
var edges;
var starImg
var emptyheart, one, two;
var live;
var b;


function preload(){
  hospital=loadImage("hospital.jpg");
  forest=loadImage("forest.jpg");
  india=loadImage("india.jpg");
  london=loadImage("london.jpg");
  newyork=loadImage("newyork.jpg");
  tokyo=loadImage("tokyo.jpg");
  runner1=loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png");
  virus=loadImage("virus.png");
  medkitimg=loadImage("medkit.png");




}

function setup() {

  createCanvas(1200,400)
  
  bg=createSprite(600,200);
  bg.addImage("bg",forest);
  bg.velocityX=-2
  bg.scale=1.4

  

  boy=createSprite(400,380);
  boy.addAnimation('runningimage',runner1);
  boy.debug=false
  boy.setCollider("rectangle",-270,-90,100,200)

  edges=createEdgeSprites()
  
  


  
  
}

function draw() {
  background("orange  ");
  if(bg.x<500){
    bg.x=600
  }
  

  
  if(gameState === PLAY){

   /* swal({
      title: `Welcome to Beat the Virus!!`,
      text: "The aim of the game is to stay alive for as long as possible without touching the virus. You have three lives. Press on the up and down arrows to move ypur character up and down.Hold on S to shrink your character and let it go to revert to its original size. Once you cross each checkpoint you enter another scene, beware each scene is tougher than the other! Good Luck!",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRtPYKpLBw-ft-1SK6_VYTep0I2xgRyVh8TdsD3oFRyhkl49mYwuzUjoQuvo9qn6PUZc&usqp=CAU",
      imageSize: "150x150",
      confirmButtonText: "Ok"
    })*/
   
  spawnvirus();
  medkit();
  
  if(keyWentDown("s")){
    boy.scale=0.6
  }
  if(keyWentUp("s")){
    boy.scale=1
  }

  if(keyWentDown(UP_ARROW)){
    boy.velocityY=-10
  }

  if(keyWentDown(DOWN_ARROW)){
    boy.velocityY=10
  }
  
  if(keyWentUp(UP_ARROW)){
    boy.velocityY=0

  }
  if(keyWentUp(DOWN_ARROW)){
    boy.velocityY=0
  } 

  if(boy.isTouching(virGroup)){
   // gameState = END;
   console.log("Error");

    

    
  }


  }
  boy.bounceOff(edges[3]);
  boy.bounceOff(edges[2]);

  
  drawSprites();
  
}


function spawnvirus (){
  if(World.frameCount%frameCountvalue===0){
    position= Math.round(random(1,2));
    b=createSprite(1200,200,20,20);
    b.y=Math.round(random(100,275));
    b.addImage(virus);
    b.scale = random(0.05,0.5);
    b.velocityX=-4;
    virGroup.add(b)
    
  }
}

function medkit (){
  if(World.frameCount%200===0){
    position= Math.round(random(1,2));
    g=createSprite(1200,350,20,20);
    g.y=Math.round(random(100,375));
    g.addImage(medkitimg);
    g.scale = 0.2
    g.velocityX = -2
    
    
  }
}

