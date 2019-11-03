import * as Keyboard from 'pixi.js-keyboard';

export const keyboard = Keyboard;
export const playerMove = (DELTA, PLAYER, WIDTH, HEIGHT) => {
  const player = PLAYER;
  const speed = parseInt(5 * DELTA, 10);
  const { x, y } = player;

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

  if (player.x <= 10 || player.x >= WIDTH - 74) {
    player.x = x;
  }

  if (player.y <= 10 || player.y >= HEIGHT - 74) {
    player.y = y;
  }

  return player;
};
export const playerSetup = (PLAYER, WIDTH, HEIGHT) => {
  const player = PLAYER;

  player.x = (WIDTH / 2) - 32;
  player.y = (HEIGHT / 2) - 32;

  return player;
};
