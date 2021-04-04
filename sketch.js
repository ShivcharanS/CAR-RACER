var car,carImage;
var road,roadImage;
var oppo;
var oppo1Img,oppo2Img,oppo3Img;
var obstacle;
var obsacle1Img,obstacle2Img,obstacle3Img;
var opposGroup,obstaclesGroup;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

function preload(){
carImage = loadImage("Car image.jfif");
roadImage = loadImage("road.png");
oppo1Img = loadImage("green car.png");
oppo2Img = loadImage("pink car.png");
oppo3Img = loadImage("red car.png");
obstacle1Img = loadImage("obstacle1.png");
obstacle2Img = loadImage("obstacle2.png");
obstacle3Img = loadImage("obstacle3.png");
}

function setup() {
  car = createSprite(300,550);
  car.addImage(carImage);
  car.scale = 0.4;
  
  road = createSprite(300,10);
  road.addImage(roadImage);
  road.velocityY = 5;
  road.scale = 5;
  
  opposGroup = new Group();
  obstaclesGroup = new Group();
}

function draw() {
createCanvas(600,600);

background("black");


if(gameState === PLAY){
  
  score = score+Math.round((getFrameRate()/60));

if(road.y > 590){
  road.y = 200;
}
car.depth = road.depth
car.depth = car.depth+1;
car.x = mouseX;
  spawnCars();
  spawnObstacles();
  if(car.isTouching(opposGroup)||car.isTouching(obstaclesGroup)){
    gameState = END;
  }
} else 
   if(gameState === END){
     road.destroy();
     opposGroup.destroyEach();
     obstaclesGroup.destroyEach();
     car.destroy();
     textSize(50);
     fill("yellow");
     text("GAMEOVER",150,300);
     
     
   }
  drawSprites();
}
function spawnCars(){
  if(frameCount%120 === 0){
    oppo = createSprite(300,-20);
    oppo.x = Math.round(random(25,520));
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1:oppo.addImage(oppo1Img);
        break;
        case 2:oppo.addImage(oppo2Img);
        break;
        case 3:oppo.addImage(oppo3Img);
        break;
        default:break;
    }
    oppo.scale = 0.4;
    oppo.velocityY = 5;
    oppo.setLifetime = 300;
    opposGroup.add(oppo);
    
  }
}
function spawnObstacles(){
  if(frameCount % 250 === 0){
    obstacle = createSprite(300,-50);
    obstacle.velocityY = 5;
    obstacle.x = Math.round(random(25,520));
    var rand1 = Math.round(random(1,3));
    switch(rand1){
      case 1: obstacle.addImage(obstacle1Img);
      break;
      case 2:obstacle.addImage(obstacle2Img);
      break;
      case 3: obstacle.addImage(obstacle3Img);
      break;
      default:break;
    }
    obstacle.scale = 0.1;
    obstacle.setLifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}