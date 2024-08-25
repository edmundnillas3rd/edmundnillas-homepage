import * as THREE from 'three';

import { RoomEnvironment } from 'three/examples/jsm/Addons.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function initComponents(event) {
}

function init(event) {
    initComponents();

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
    loader.load("models/landing_page_scene/scene.gltf", function (gltf) {
        model = gltf.scene;
        model.position.set(0, 0, 498);
        model.scale.setScalar(0);

        scene.add(model);

    }, undefined, function (err) {
        console.error(err);
    });

    scene.remove(model);

    // Starting coordinates of the first scene (landing page) will be:
    // [X]: center of the screen
    // [Y]: center of the screen
    // [z]: 500px from the origin of the scene

    camera.position.z = 500;

    function animate() {
        if (model) {
            model.scale.lerp(new THREE.Vector3(1, 1, 1), 0.25);
        }
        renderer.render( scene, camera );
    }

    renderer.setAnimationLoop(animate);
}

window.addEventListener("DOMContentLoaded", init);