// JavaScript source code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//All Variables
var bobHolder,engine;
var bobs = [];
function setup() {

    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    var length = 200;
    var sD = 20;
    var diffAdd = 20;

    //Give values to variables
    bobHolder = new BobHolder(100, 100, 175, 20);

    bobs[0] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[1] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[2] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[3] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[4] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[5] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[6] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
    bobs[7] = new Bob(bobHolder.object, sD, 10, length, 10);
    sD += diffAdd;
}

function draw() {
    background("white");
    Engine.update(engine);

    //display objects
    bobs[0].display();
    bobs[1].display();
    bobs[2].display();
    bobs[3].display();
    bobs[4].display();
    bobs[5].display();
    bobs[6].display();
    bobs[7].display();

    bobHolder.display();
}

function keyPressed() {
    //catch key presses
    if (keyCode == 37) {
        Body.applyForce(bobs[0].bob, bobs[0].bob.position, { x: -.5, y: 0 });
    }
    else if (keyCode == 39) {
        Body.applyForce(bobs[7].bob, bobs[7].bob.position, { x: .5, y: 0 });
    }
}