var fixedRect,movingRect;


var object1,object2,object3,object4




function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(350,200,20,20)
  fixedRect.shapeColor = "green"

  movingRect = createSprite(200,80,80,20)
  movingRect.shapeColor = "green"

   console.log(fixedRect.width/2)
   console.log(movingRect.width/2)
   console.log(fixedRect.width/2 + movingRect.width/2)


   object1 = createSprite(100,150,50,50)
   object1.shapeColor = "green"

   object2 = createSprite(200,150,50,50)
   object2.shapeColor = "green"

   object3 = createSprite(300,150,50,50)
   object3.shapeColor = "green"

   object4 = createSprite(400,150,50,50)
   object4.shapeColor = "green"

}

function draw() {


  background(0);  

  movingRect.x = mouseX
  movingRect.y = mouseY
  if(istouching(movingRect,object2)){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"

  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }

  
 
  
  drawSprites();
}

function istouching(obj1,obj2){
  if(obj1.x - obj2.x< obj2.width/2 +obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 +obj1.width/2


   && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
   && obj2.y - obj1.y < obj2.height/2 + obj1.height/2
    
    
    
    ){
     return true;
    }
    else{
      return false;
    }
}