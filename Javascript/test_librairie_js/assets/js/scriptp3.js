var shine = new Shine(document.getElementById('my-shine-object'));
shine.light.position.x = window.innerWidth * 0.5;
shine.light.position.y = window.innerHeight * 0.5;
shine.draw(); // make sure to re-draw
shine.config.opacity = 0.1;
shine.config.blur = 0.2;
shine.draw(); // make sure to re-draw
// all parameters are optional and can be changed later
var config = new shinejs.Config({
  numSteps: 4,
  opacity: 0.2,
  shadowRGB: new shinejs.Color(255, 0, 0)
});

// pass the config in the constructor
var shineA = new Shine(document.getElementById('my-shine-object'), config);
var shineB = new Shine(document.getElementById('my-shine-object'), config);

// or assign it to an instance later
var shineC = new Shine(document.getElementById('my-shine-object'));
shineC.config = config;
shineC.draw(); // make sure to re-draw
