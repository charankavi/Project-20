var car,wall;
var speed;
var weight;

function setup() {
  createCanvas(800,400);

  speed = random(30,100);
  weight = random(1000,3000);

  wall = createSprite(750, 200, 25, 75);
 
  car = createSprite(50, 200, 25, 25);
  car.velocityX = speed;
}

function draw() {
  background(0,0,0); 
  
   var crash = (0.5 * weight*speed*speed) / 22500;

  text("RED = C-, YELLOW = B-, GREEN = A-",300,300);
  text("CRASH RATE = " + Math.round(crash),350,350);

  if(car.isTouching (wall)){
  car.velocityX = 0;
  if(crash >= 180 ){
		car.shapeColor = "red";	
  }else if(crash < 180 && crash > 80){
		car.shapeColor = "yellow";
  }else if(crash <80){
        car.shapeColor = "green";
  }

  }
  drawSprites();
}