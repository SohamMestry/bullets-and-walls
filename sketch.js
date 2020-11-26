var bullet, wall;
var speed, weight, thickness;
var thicknessofwall;
var deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(1200, 200, 40, 40);
  bullet.velocityX = speed;
  bullet.shapeColor = 80, 80, 80;

  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = "brown";
}

function draw() {
  background(0); 
  
  if(wall.x - bullet.x < (bullet.width + bullet.width)/2)
  {
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/thicknessofwall * thicknessofwall * thicknessofwall
  }

  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }

  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }

  if(deformation > 180){
    bullet.shapeColor = color (255, 0, 0);
  }

  if(deformation < 180 && deformation > 100){
    bullet.shapeColor = color(0, 255, 0);
  }

  if(deformation < 100){
    bullet.shapeColor = color(0, 255, 0);
  }

  console.log(bullet);
  bullet.debug = true;

  drawSprites();
}

function hasCollided(lbullet, lwall){
    bulletRightEdgge = lBullet.x + lbullet.width;
    wallLeftEdge = lwall.x;

    if(bulletRightEdge >=wallLeftEdge){
      return true;
    }
    return false;
}