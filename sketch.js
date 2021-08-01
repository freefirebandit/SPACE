var spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4;
var iss,spacecraft,hasDocked;
var issImg,bg;


function preload(){
  spacecraftImg1 = loadImage("Docking-undocking/spacecraft1.png");
  spacecraftImg2 = loadImage("Docking-undocking/spacecraft2.png");
  spacecraftImg3 = loadImage("Docking-undocking/spacecraft3.png");
  spacecraftImg4 = loadImage("Docking-undocking/spacecraft4.png");
  bg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
}

function setup() {
  createCanvas(800,500);

  iss = createSprite(200, 150, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.8;

  spacecraft = createSprite(400,400,50,50);
  spacecraft.addImage(spacecraftImg1);
  spacecraft.scale=0.3;
}

function draw() {
  background(bg);  

  if(!hasDocked){
   
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.x=  spacecraft.x + 2;
    }

    if(keyDown(LEFT_ARROW)){
      spacecraft.addImage(spacecraftImg3);
      spacecraft.x=  spacecraft.x-2;
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImg2);
      spacecraft.y=  spacecraft.y+2
    }

    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraftImg2);
      spacecraft.y=  spacecraft.y-2
    } 

  }



if(spacecraft.x <= 155 && spacecraft.y === 280){  
  hasDocked = true;



  textSize(40);
   text("Docking done ROGER ERSA !!",200,400);
  
   
}

spacecraft.depth = iss.depth;
iss.depth = iss.depth + 1;

textSize(15);
   text("Dock ",125,200);


textSize(14);
text("(Hint: use arrowkeys to dock STARXRAFT!! )",300,30);

  drawSprites();
}