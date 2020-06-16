var movingRect, stillRect;

function setup() {
  stillRect = createSprite(300,300,50,40);
  movingRect = createSprite(250,100,100,60);

  movingRect.shapeColor= "red";
  stillRect.shapeColor= "red";
  createCanvas(800,400);
}

function draw() {
  background(0,0,0);  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;
  if(movingRect.x - stillRect.x < movingRect.width/2 + stillRect.width/2
  &&  stillRect.x - movingRect.x < movingRect.width/2 + stillRect.width/2
  &&  movingRect.y - stillRect.y < movingRect.height/2 + stillRect.height/2
  &&  stillRect.y - movingRect.y < movingRect.height/2 + stillRect.height/2)
  {
    movingRect.shapeColor= "blue";
    stillRect.shapeColor="blue";
  }
  else{
    movingRect.shapeColor= "red";
    stillRect.shapeColor="red";  
  }
  drawSprites();
}