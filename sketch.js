var john , bground ;
var arrow, arrowImg;
var bg,johnImg ; 
var edges ;
var boulder,boulderImg ; 
var lionImg,pantherImg,cheetahImg,rhinoImg;
var  lion , panther, Rhino , Cheetah ;
var score=0;
var lionG,pantherG,rhinoG,cheetahG,arrowG;

function preload () {
bg = loadImage("images/Bg.jpg");
johnImg = loadAnimation("images/John.png");
lionImg = loadAnimation("images/Lion.png","images/Lion_2png");
pantherImg = loadAnimation("images/Panther.png","images/Panther_2.png");
rhinoImg = loadAnimation("images/Rhino1.png","images/Rhino2.png");
cheetahImg = loadAnimation("images/Cheetah.png" , "images/Cheetah2.png");
arrowImg = loadImage("images/Arrow.png");
}

function setup() {
  createCanvas(400,400);

  lionG = createGroup();
  pantherG= createGroup();
  rhinoG = createGroup();
  cheetahG = createGroup();
  arrowG = createGroup();
 
  bground = createSprite(0,0,400,400);
  bground.addImage(bg);
  
  bground.x= bground.width/2;
 
 john =  createSprite(25, 200, 20, 70);
 john.addAnimation("jumping",johnImg);
 john.scale=0.7; 

   
}
function draw() {
  background(0); 
  
  bground.velocityX = -2;

  if (bground.x<0) {

    bground.x= bground.width/2;
  }
  
  john.y=World.mouseY;

  if (keyDown("SPACE")){

    createArrow();
    
  }

  var select_Enemy = Math.round(random(1,4));

  if(World.frameCount % 100 === 0){
    if(select_Enemy == 1){
      spawnLion();
    }
     else if(select_Enemy == 2){
       spawnPanther();
     }
     else if(select_Enemy == 3){
      spawnRhino();
    }
    else{
      spawnCheetah();
    }
  }

  if(arrowG.isTouching(lionG)){
    lionG.destroyEach();
    arrowG.destroyEach();
    score= score+1;

  }

  if(arrowG.isTouching(pantherG)){
    pantherG.destroyEach();
    arrowG.destroyEach();
    score= score+1;

  }

  if(arrowG.isTouching(rhinoG)){
    rhinoG.destroyEach();
    arrowG.destroyEach();
    score= score+1;

  }

  if(arrowG.isTouching(cheetahG)){
    cheetahG.destroyEach();
    arrowG.destroyEach();
    score= score+1;

  }
  
  drawSprites();

  textSize(20);
  text("Score :" + score , 300 , 50 );

}

function spawnLion () {
   lion = createSprite(400,random(370 , 20) ,10 , 10);
  lion.addAnimation("running" , lionImg);
  lion.velocityX = -3;
  lion.lifetime = 150;
  lion.scale=0.1;
  lionG.add(lion);
  }
  
  function spawnPanther () {
    panther = createSprite(400, random(370,20),10 , 10);
    panther.addAnimation("running" , pantherImg);
    panther.velocityX = -3;
    panther.lifetime = 150;
    panther.scale=0.1;
    pantherG.add(panther);
    }

    function spawnRhino () {
       Rhino = createSprite( 400,random(370, 20) ,10 , 10);
      Rhino.addAnimation("running" , rhinoImg);
      Rhino.velocityX =-3;
      Rhino.lifetime = 150;
      Rhino.scale=0.1;
      rhinoG.add(Rhino);
      }

      function spawnCheetah () {
         Cheetah = createSprite(400,random(370 , 20),0 ,10 , 10);
        Cheetah.addAnimation("running" , cheetahImg);
        Cheetah.velocityX = -3;
        Cheetah.lifetime = 150;
        Cheetah.scale=0.1;
        cheetahG.add(Cheetah);
        }

        function createArrow () {
         arrow = createSprite(100,100,60,10); 
         arrow.addImage(arrowImg);
         arrow.y=john.y;
         arrow.velocityX=4;
         arrow.lifetime=100;
         arrow.scale=0.1;
         arrowG.add(arrow);
        }
  
