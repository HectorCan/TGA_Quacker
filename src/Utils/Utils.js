import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

/**
 * Regresa el objeto
 */

export const ModelLoader = (name) => {
    const progress = console.log;

    return new Promise((resolve, reject) => {
        const mtlLoader = new MTLLoader();
        const objLoader = new OBJLoader();
    
        mtlLoader.setPath('./models/');
        mtlLoader.setResourcePath('./models/');
        objLoader.setPath('./models/');
    
        mtlLoader.load(name + '.mtl', function (materials) {
            materials.preload();
    
            objLoader.setMaterials(materials);
            objLoader.load(name + '.obj', resolve, progress, reject);
        }, progress, reject);
    });
};

