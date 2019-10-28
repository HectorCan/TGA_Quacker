import * as PIXI from 'pixi.js';

// Create a Pixi Application
const app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1,
});

document.body.appendChild(app.view);

// This `setup` function will run when the image has loaded
function setup() {
  // Create the cat sprite
  const cat = new PIXI.Sprite(app.loader.resources['img/cat.png'].texture);
  // Add the cat to the stage
  cat.x = 96;
  cat.y = 96;

  app.stage.addChild(cat);
}


app.loader
  .add('img/cat.png')
  .load(setup);
