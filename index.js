import * as THREE from 'three';

import { RoomEnvironment } from 'three/examples/jsm/Addons.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvasRef = document.getElementById("landpage-canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvasRef });
renderer.setSize( window.innerWidth, window.innerHeight );

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1A1B1C);
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

let model = null;

const loader = new GLTFLoader();
loader.load("models/crt_tv/scene.gltf", function (gltf) {
    model = gltf.scene;

    model.position.x = -1.5;
    model.position.y = 0.1;
    model.position.z = 498;

    const quaternion = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0).normalize(),  4.0);
    model.applyQuaternion(quaternion);
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 0, 1).normalize(), -0.3);
    model.applyQuaternion(quaternion);

    scene.add(model);

}, undefined, function (err) {
    console.error(err);
});

// Starting coordinates of the first scene (landing page) will be:
// [X]: center of the screen
// [Y]: center of the screen
// [z]: 500px from the origin of the scene
camera.position.z = 500;

function animate() {
	renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate);

scene.remove(model);