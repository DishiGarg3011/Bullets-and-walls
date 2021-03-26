var bullet, wall, speed, weight, thickness ; 


function setup() {
  createCanvas(900,400);

  thickness = random(22,83);

  wall  = createSprite(850,200,thickness,height/2);
   wall.shapeColor = "orange"
   

   bullet= createSprite(50,200,50,50);
   bullet.shapeColor = "blue";

   
   speed = random (223,321);
   weight = random (30,50);
}

function draw() {

  background("black");  

  bullet.velocityX = speed;

  if(wall.x- bullet.x < (bullet.width+wall.width)/2){
    
    damage = 0.5 * weight * speed * speed /(thickness *thickness*thickness) ;
    bullet.velocityX = 0;

    if (damage>10){

      wall.shapeColor = "red";
    
    }

    if (damage<10){

      wall.shapeColor = "green";
    
    }
   
  }



  drawSprites();
}