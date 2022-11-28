
var backgroundImg;
var appleImg;
var bananaImg;
var chocolateImg;
var hamburgerImg;
var iceCreamImg;
var manRunning1Img;
var manRunning2Img;
var saladImg;
var manRunning3Img;

var apple, banana, chocolate, man, hamburger, salad, iceCream;








function preload(){
backgroundImg = loadImage("images/background 2.jpg");
appleImg = loadImage("images/apple.png");
bananaImg = loadImage("images/banana.png");
chocolateImg = loadImage("images/chocolate.png");
hamburgerImg = loadImage("images/hamburger.png");
iceCreamImg = loadImage("images/ice cream.png");
ManRunning1Img = loadAnimation("images/Man running 1.png","images/Man running 2.png","images/Man running 3.png");
saladImg = loadImage("images/salad.png");

}

function setup(){
  createCanvas(1900,900)
 
  man = createSprite(750,800);
  man.addAnimation("running", ManRunning1Img);
  man.scale = 0.1;
 
}

function draw(){
  background(backgroundImg);
  text(mouseX + mouseY, mouseX, mouseY)
  Salad();
  Icecream();
  Hamburger();
  Apple();
  Banana();
  Chocolate();
drawSprites()

}

function Salad()
{
  if(frameCount%60==0)
  {
    salad = createSprite(830, 200);
    salad.addImage("salad", saladImg);
    salad.scale = 0.20;
    salad.x = random(400, 1600);
    salad.velocityY = 5;

    salad.lifetime = 500;
  }
}
function Icecream()
{
  if(frameCount%60==0)
  {
    iceCream = createSprite(800, 200);
    iceCream.addImage("iceCream", iceCreamImg);
    iceCream.scale = 0.08;
    iceCream.x = random(400, 1600);
    iceCream.velocityY = 5;

    iceCream.lifetime = 500;
  }
}
function Hamburger()
{
  if(frameCount%60==0)
  {
  hamburger = createSprite(750,200);
  hamburger.addImage("hamburger", hamburgerImg);
  hamburger.scale = 0.08;
  hamburger.x = random(400, 1400);
  hamburger.velocityY = 5;

  hamburger.lifetime = 500;
  }
}
function Apple()
{
  if(frameCount%60==0)
  {
  apple = createSprite(570,200);
  apple.addImage("apple", appleImg);
  apple.scale = 0.08;
  apple.x = random(400, 1400);
  apple.velocityY = 5;

  apple.lifetime = 500;
  }
}
function Apple()
{
  if(frameCount%60==0)
  {
  apple = createSprite(650,200);
  apple.addImage("apple", appleImg);
  apple.scale = 0.08;
  apple.x = random(400, 1400);
  apple.velocityY = 5;

  apple.lifetime = 500;
  }
}
function Banana()
{
  if(frameCount%60==0)
  {
  banana = createSprite(600,200);
  banana.addImage("banana", bananaImg);
  banana.scale = 0.08;
  banana.x = random(400, 1400);
  banana.velocityY = 5;

  banana.lifetime = 500;
  }
}
function Chocolate()
{
  if(frameCount%60==0)
  {
  chocolate = createSprite(550,200);
  chocolate.addImage("chocolate", chocolateImg);
  chocolate.scale = 0.08;
  chocolate.x = random(400, 1400);
  chocolate.velocityY = 5;

  chocolate.lifetime = 500;
  }
}



