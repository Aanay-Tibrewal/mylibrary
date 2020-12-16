var fixedrec,movingrec;
var object1, object2, object3, object4;

function setup() {
  createCanvas(800,400);
  movingrec = createSprite(400, 200, 80, 30);
  movingrec.shapeColor = "red";

  fixedrec = createSprite(200, 200, 50, 50);
  fixedrec.shapeColor = "red";

  object1 = createSprite(300, 200, 50, 50);
  object1.shapeColor = "red";

  object2 = createSprite(400, 200, 50, 50);
  object2.shapeColor = "red";

  object3 = createSprite(500, 200, 50, 50);
  object3.shapeColor = "red";

  object4 = createSprite(600, 200, 50, 50);
  object4.shapeColor = "red";

}

function draw() {
  background(255,255,255);
  
  movingrec.x = World.mouseX;
  movingrec.y = World.mouseY;

  if(isTouching(movingrec, object2)){
    object2.shapeColor = "blue";
    movingrec.shapeColor = "blue"; 
  }
  else{
    object2.shapeColor = "red";
    movingrec.shapeColor = "red";
  }
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&
    object2.x-object1.x<object2.width/2+object1.width/2&&
    object1.y-object2.y<object2.height/2+object1.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2){
    object1.shapeColor = "blue";
    object2.shapeColor = "blue";
   return true;
  }
  else{
    object1.shapeColor = "red";
    object2.shapeColor = "red";
  return false;
  }

}