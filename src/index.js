import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Color,
} from 'three';
import ModelLoader from './Utils/Utils';
import './app.css';

// Creamos la escena y la cámara
const scene = new Scene();
const camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);

// Añadimos iluminación
const keyLight = new DirectionalLight(new Color('hsl(30, 100%, 75%)'), 1.0);
const fillLight = new DirectionalLight(new Color('hsl(240, 100%, 75%)'), 0.75);
const backLight = new DirectionalLight(0xffffff, 1.0);

keyLight.position.set(100, 0, 100);
fillLight.position.set(100, 0, 100);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
// render
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// ModelLoader : Path : nombre del obj (carpeta voxel_models)
let hero;
ModelLoader('k_person').then((obj) => {
  hero = obj;
  hero.rotation.y = (170 * Math.PI) / 180;
  hero.position.z += 4;
  scene.add(hero);
}).catch((err) => {
  console.log(err); // eslint-disable-line no-console
});

camera.position.z = 10;
// movement - please calibrate these values
const xSpeed = 1;
const ySpeed = 1;

// movimiento wasd
// TODO: Aplicar rotacion al heroe y movimiento tipo (South Park)
function onDocumentKeyDown(event) {
  const keyCode = event.which;
  if (keyCode === 87) {
    hero.position.z += ySpeed;
    camera.position.z += ySpeed;
  } else if (keyCode === 83) {
    hero.position.z -= ySpeed;
    camera.position.z -= ySpeed;
  } else if (keyCode === 65) {
    hero.position.x -= xSpeed;
    camera.position.x -= xSpeed;
  } else if (keyCode === 68) {
    hero.position.x += xSpeed;
    camera.position.x += xSpeed;
  } else if (keyCode === 32) {
    hero.position.set(0, 0, 4);
    camera.position.set(0, 0, 10);
  }
}

document.addEventListener('keydown', onDocumentKeyDown, false);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
