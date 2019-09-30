import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

/**
 * Regresa el objeto
 */

export const ModelLoader = (path, name) => {
    const progress = console.log;

    return new Promise((resolve, reject) => {
        const mtlLoader = new MTLLoader();
        const objLoader = new OBJLoader();
    
        mtlLoader.setPath('./voxel_models/' + path + '/');
        mtlLoader.setResourcePath('./voxel_models/' + path + '/');
        objLoader.setPath('./voxel_models/' + path + '/');
    
        mtlLoader.load(name + '.mtl', function (materials) {
            materials.preload();
    
            objLoader.setMaterials(materials);
            objLoader.load(name + '.obj', resolve, progress, reject);
        }, progress, reject);
    });
};

