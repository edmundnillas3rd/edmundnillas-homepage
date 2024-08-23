import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvasRef = document.getElementById("landpage-canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvasRef });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xff0000);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

let model = null;

const loader = new GLTFLoader();
loader.load("models/crt_tv/scene.gltf", function (gltf) {
    model = gltf.scene;
    scene.add(model);
}, undefined, function (err) {
    console.error(err);
});

camera.position.z = 5;


function animate() {
    if (model) {
        model.rotation.y += 0.01;
    }
	renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate);