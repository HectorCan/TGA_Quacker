import './app.css';
import {
  APP,
  PIXI,
  WIDTH,
  HEIGHT,
  SPRITES,
  SpritesAdd,
  Keyboard,
  PlayerController,
} from './Classes';

// Variables que usaremos en el juego
let player;
let state;

// Añadimos la vista de la app al HTML
document.body.appendChild(APP.view);

// Por cada iteración
function gameLoop(delta) {
  state(delta);

  Keyboard.update();
}

// Esto pasa en cada tick del juego.
function play(delta) {
  PlayerController.move(delta, player, WIDTH, HEIGHT);
}

// Setup
function setup() {
  // Cargamos el Sprite
  player = new PIXI.Sprite(APP.loader.resources['img/cat.png'].texture);

  PlayerController.setup(player, WIDTH, HEIGHT);

  // Añadimos el personaje al Escenario
  APP.stage.addChild(player);

  // El estado es la función de play
  state = play;

  // Añadimos un ticker...
  APP.ticker.add((delta) => gameLoop(delta));
}

SpritesAdd(SPRITES, APP)
  .load(setup);
