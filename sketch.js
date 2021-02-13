const Engine =  Matter.Engine
const World =  Matter.World
const Bodies =  Matter.Bodies

var engine ,world ,ball,ground; 

function setup() {
  createCanvas(1500,700);
 engine = Engine.create();
 world = engine.world

stone1 = new stone(900,600,100,100)


rubber1 = new rubber(500,450,)

//log1 = new  log(775,500,200,PI/2)


hammer1 = new hammer(100,100)

ground = new Ground(width/2,height,width,25)


}

function draw() {
  background("lightblue");  

  Engine.update(engine)
  stone1.display()
  rubber1.display()

  hammer1.display()
  ground.display()
}