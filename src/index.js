import * as PIXI from 'pixi.js';
import * as Keyboard from 'pixi.js-keyboard';
import './app.css';

// Establecemos el tamaño al de la ventana
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

// Creamos la aplicación de PIXI
const app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1,
});

// Instanciamos el Jugador y el estado
let player;
let state;

// Añadimos la vista de la app al HTML
document.body.appendChild(app.view);

// Por cada iteración
function gameLoop(delta) {
  state(delta);

  Keyboard.update();
}

// Esto pasa en cada tick del juego.
function play(delta) {
  // Usaremos valores enteros para precisión.
  const speed = parseInt(5 * delta, 10);
  const { x, y } = player;

  /**
   * Movimientos WASD o Arrows
   */
  if (Keyboard.isKeyDown('ArrowLeft', 'KeyA')) {
    player.x -= speed;
  }

  if (Keyboard.isKeyDown('ArrowRight', 'KeyD')) {
    player.x += speed;
  }

  if (Keyboard.isKeyDown('ArrowUp', 'KeyW')) {
    player.y -= speed;
  }

  if (Keyboard.isKeyDown('ArrowDown', 'KeyS')) {
    player.y += speed;
  }

  /**
   * Establecemos limites para el personaje, para que no salga de la pantalla.
   * Tomar en cuenta el Ancho y Largo del Sprite + 10 = 74.
   * De otra forma nos salimos.
   */
  if (player.x <= 10 || player.x >= WIDTH - 74) {
    player.x = x;
  }

  if (player.y <= 10 || player.y >= HEIGHT - 74) {
    player.y = y;
  }
}

// Setup
function setup() {
  // Cargamos el Sprite
  player = new PIXI.Sprite(app.loader.resources['img/cat.png'].texture);

  // Damos valores por defecto.
  player.x = WIDTH / 2 - 32;
  player.y = HEIGHT / 2 - 32;

  // Añadimos el personaje al Escenario
  app.stage.addChild(player);

  // El estado es la función de play
  state = play;

  // Añadimos un ticker...
  app.ticker.add((delta) => gameLoop(delta));
}

// Cargamos nuestros assets...
app.loader.add('img/cat.png').load(setup);
