// namespacing - optional
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// things which never changes

var engine,world;
var ground, ball;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  // JSON
  //  var name = { index: value };
  var object_option  = {
    isStatic:true
  }
var ball_option = {
  restitution: 1.0
}

  // creation - physical object
  ground= Bodies.rectangle(200,390,200,20,object_option);
  // add world - syntax
  World.add(world,ground);

 ball = Bodies.circle(200,100,20,ball_option);
 World.add(world,ball);

  console.log(ground);
  console.log(ground.type);
  console.log(ground.position.x);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20, 30);
  
}