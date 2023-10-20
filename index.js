// From: https://sbcode.net/threejs/threejs-typescript-boilerplate/

import * as THREE from 'three';
import { GUI } from './node_modules/three/examples/jsm/libs/lil-gui.module.min.js';

const guiParams = {
  height: 12.5,
  radius: 360
};

const SHOW_GUI = true
let test

const init = async () => {
  if (SHOW_GUI) {
    const gui = new GUI();
    gui.add( guiParams, 'height', 0, 50, 0.1 ).name( 'Skybox height' ).onChange( render );
    gui.add( guiParams, 'radius', 200, 1000, 0.1 ).name( 'Skybox radius' ).onChange( render );
  }
  const test = new THREE.Mesh()
  test.scale.setScalar( 100 );
  // test.height = guiParams.height;
  // test.radius = guiParams.radius;
}

function render() {
    if (test) {
      if (SHOW_GUI) {
        // test.radius = guiParams.radius;
        // test.height = guiParams.height;
      }
    } else {
      console.log('no skybox')
    }
}

init().then(render)