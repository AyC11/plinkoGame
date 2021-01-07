const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var divisionHeight = 300;
var division = [];
var plinkos = [];

function setup(){
createCanvas(480,800);
engine = Engine.create();
world = engine.world;
ground=new Ground(240,789,500,20);

engine = Engine.create();
world = engine.world;

var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);
  
}
function draw(){
  Engine.update(engine)
  background("grey");  
  for(var m = 0;m <=width; m = m + 80 ){
    division.push(new Division(m,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  ground.display();
  for(var k=0;k<division.length;k++){
    division[k].display();
  }
  for(var p=0;p<plinkos.r;p++){
   plinkos[k].display();
  }
  drawSprites();
}