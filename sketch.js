const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, ground2, ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;
var polygon, slingShot, polygonImg;

function preload() {
  polygonImg = loadImage("hexagon.png");
}

function setup() {
  createCanvas(1200, 400);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(600, 395, 1200, 10)
  ground1 = new Ground(605, 360, 170, 10);
  ground2 = new Ground(1000, 280, 170, 10);

  block1 = new Box(545, 320, 30, 40);
  block2 = new Box(575, 320, 30, 40);
  block3 = new Box(605, 320, 30, 40);
  block4 = new Box(635, 320, 30, 40);
  block5 = new Box(665, 320, 30, 40);
  block6 = new Box(605, 280, 30, 40);
  block7 = new Box(575, 280, 30, 40);
  block8 = new Box(635, 280, 30, 40);
  block9 = new Box(605, 240, 30, 40);
  block10 = new Box(1000, 240, 30, 40);
  block11 = new Box(1030, 240, 30, 40);
  block12 = new Box(1060, 240, 30, 40);
  block13 = new Box(970, 240, 30, 40);
  block14 = new Box(940, 240, 30, 40);
  block15 = new Box(1000, 200, 30, 40);
  block16 = new Box(1030, 200, 30, 40);
  block17 = new Box(970, 200, 30, 40);
  block18 = new Box(1000, 160, 30, 40);

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  slingShot = new Slingshot(polygon, { x: 100, y: 200 });

}

function draw() {
  background("black");

  imageMode(CENTER);
  image(polygonImg, polygon.position.x, polygon.position.y, 40, 40);

  ground.display();
  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  slingShot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY });
}


function mouseReleased() {
  slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(polygon)
  }
}
