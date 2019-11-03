import * as PIXI from 'pixi.js';

// Para mantener un aspecto de 16:9
// Obtenemos hasta cuantos pixeles podemos crear
const W_FRAGMENTS = parseInt(window.innerWidth / 16, 10);
const H_FRAGMENTS = parseInt(window.innerHeight / 9, 10);

// Establecemos el tamaño al de la ventana
const WIDTH = W_FRAGMENTS * 16;
const HEIGHT = H_FRAGMENTS * 9;

// Creamos la aplicación.
const APP = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1,
});

export const app = APP;
export const pixi = PIXI;
export const w = WIDTH;
export const h = HEIGHT;
export const loadSprites = (arrayNames, pixiapp) => {
  const { loader } = pixiapp;

  arrayNames.forEach((name) => {
    loader.add(name);
  });

  return loader;
};
