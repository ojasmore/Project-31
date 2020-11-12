const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionheight = 360;

function setup() {

  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,795,480,10);

  for(var i = 3 ; i < 480 ; i = i + 79){
      divisions.push(new Division(i,620,10,divisionheight));
  }
  for(var k = 40 ; k < 480; k = k + 50){
      plinkos.push(new Plinko(k,75,10))
  }
  for(var k = 15 ; k < 480; k = k + 50){
    plinkos.push(new Plinko(k,150,10))
  }
  for(var k = 40 ; k < 480; k = k + 50){
  plinkos.push(new Plinko(k,225,10))
  }
  for(var k = 15 ; k < 480; k = k + 50){
    plinkos.push(new Plinko(k,300,10))
  }

  Engine.run(engine);
 
}

function draw() {

  Engine.update(engine);
  background(0);

  
  for(var j = 0; j<divisions.length ; j++){
    divisions[j].display();
  }
  for(var k = 0; k<plinkos.length ; k++){
    plinkos[k].display();
  }

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(110,130),10,10));
  }

  for(var l = 0; l<particles.length ; l++){
    particles[l].display();
  }
  
  ground.display();

  drawSprites();

}