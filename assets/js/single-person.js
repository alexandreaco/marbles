// Matter.js - http://brm.io/matter-js/

// Matter module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Common = Matter.Common,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    canvasWidth = 1200,
    canvasHeight = 1000;

  // Capture Faces
var faceName = 'alex',
    numFaces = 12;

// create a Matter.js engine
var engine = Engine.create(document.body, {
  render: {
    options: {
      showAngleIndicator: true,
      wireframes: true,
      height: canvasHeight,
      width: canvasWidth
    }
  }
});

// add a mouse controlled constraint
var mouseConstraint = MouseConstraint.create(engine);
World.add(engine.world, mouseConstraint);

var offset = 10,
    options = {
        isStatic: true,
        render: {
            visible: false
        }
    };

engine.world.bodies = [];

// these static walls will not be rendered in this sprites example, see options
World.add(engine.world, [
    Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 50.5, options), // top
    Bodies.rectangle(canvasWidth / 2, canvasHeight, canvasWidth, 50.5, options), // bottom
    Bodies.rectangle(canvasWidth, canvasHeight / 2, 50.5, canvasHeight, options), // right
    Bodies.rectangle(0, canvasHeight / 2, 50.5, canvasHeight, options) // left
]);

var collection = Matter.Composite;

for (var i = 0; i < numFaces; i += 1) {

  var face = Bodies.circle(20 + (i * 10), 20 + (i * 10), 90, {
    density: 0.0005,
    frictionAir: 0.06,
    restitution: 0.3,
    friction: 0.01,
    render: {
      sprite: {
        texture: './svg/' + faceName + '.svg',
        xScale: 0.25,
        yScale: 0.25
      }
    }

  });

  World.add(engine.world, face);
}


var renderOptions = engine.render.options;
renderOptions.background = '#49FFBD';
renderOptions.showAngleIndicator = false;
renderOptions.wireframes = false;

// run the engine
Engine.run(engine);
