import {
  app,
  pixi,
  w,
  h,
  loadSprites,
} from './Window';
import {
  keyboard,
  playerMove,
  playerSetup,
} from './Player';

export const SPRITES = [
  'img/cat.png',
];

export const APP = app;
export const PIXI = pixi;
export const WIDTH = w;
export const HEIGHT = h;
export const SpritesAdd = loadSprites;
export const Keyboard = keyboard;
export const PlayerController = {
  move: playerMove,
  setup: playerSetup,
};
