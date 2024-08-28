import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/Addons.js';

function init() {
    const canvasRef = document.getElementById("landpage-canvas");
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef });
    renderer.setSize( window.innerWidth, window.innerHeight );

    const pmremGenerator = new THREE.PMREMGenerator(renderer);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1A1B1C);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(renderer), 0.04).texture;

    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );

    function animate() {
        renderer.render( scene, camera );
    }

    renderer.setAnimationLoop(animate);
}

window.addEventListener("DOMContentLoaded", init);