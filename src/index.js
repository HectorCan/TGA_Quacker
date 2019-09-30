import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight, Color } from 'three';
import { ModelLoader } from './Utils/Utils';

// Creamos la escena y la cámara
const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

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
console.log(window.innerWidth, window.innerHeight);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ModelLoader : Path : nombre del obj (carpeta voxel_models)
let hero;
ModelLoader('players/mage', 'm_person').then((obj) => {
	hero = obj;
	scene.add(hero);
}).catch((err) => {
	console.log(err);
});

camera.position.z = 10;


// movement - please calibrate these values
var xSpeed = 1;
var ySpeed = 1;

// movimiento wasd
// TODO: Aplicar rotacion al heroe y movimiento tipo (South Park)
document.addEventListener("keydown", onDocumentKeyDown, false);
function onDocumentKeyDown(event) {
	var keyCode = event.which;
    if (keyCode == 87) {
        hero.position.y += ySpeed;
    } else if (keyCode == 83) {
        hero.position.y -= ySpeed;
    } else if (keyCode == 65) {
        hero.position.x -= xSpeed;
    } else if (keyCode == 68) {
        hero.position.x += xSpeed;
    } else if (keyCode == 32) {
        hero.position.set(0, 0, 0);
    }
};

function animate() {
	requestAnimationFrame( animate );

	renderer.render( scene, camera );
}

animate();

