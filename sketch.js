
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body; - not needed
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;   
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function setup() {
	canvas=createCanvas(1000,1000);
  
	engine = Engine.create();
  world = engine.world;
  // let canvasMouse=Mouse.create(canvas.elt)
  // canvasMouse.pixelRatio=pixelDensity()
  // let options={
  //   mouse:canvasMouse //removed the ,
  // }
  // mconstraint=MouseConstraint.create(engine,options)
  // World.add(world.mconstraint)
  
    //var bobdia=40; //remove
    //var startbobposx=width/2
    //var startbobposy=height/4+500
    bob1=new Bob(340,450,"cyan") //changed x and y
    bob2=new Bob(400,450,"pink") //changed x and y
    bob3=new Bob(460,450,"lavender") //changed x and y
    bob4=new Bob(520,450,"orange") //changed x and y
    bob5=new Bob(580,450,"red") //changed x and y
    rope1=new Rope(bob1.body,{x:340,y:200}) //changed by y 
    rope2=new Rope(bob2.body,{x:400,y:200})
    rope3=new Rope(bob3.body,{x:460,y:200})
    rope4=new Rope(bob4.body,{x:520,y:200})
    rope5=new Rope(bob5.body,{x:580,y:200})

    Engine.run(engine);
}


function draw() {
 // rectMode(CENTER);
  background("white");
  Engine.update(engine); //wasn't added
 // roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob2.display();
}
// function keyPressed(){
//   if(keyCode===UP_ARROW){
//     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
//   }
// }
// function drawLine(constraint){
//   bobbodyposition=constraint.bodyA.position
//   roofbodyposition=constraint.bodyB.position
//   roofbodyoffset=constraint.pointB
//   roofbodyX=roofbodyposition.x+roofbodyoffset.x
//   roofbodyY=roofbodyposition.y+roofbodyoffset.y
//   line(bobbodyposition.x,bobbodyposition.y,roofbodyX,roofbodyY)
// }
function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}