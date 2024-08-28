import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let currentPageIndex = 0;
const MAX_PAGE = 3 - 1;

function initComponents(event) {

    const menuLinksRef = document.getElementsByClassName("menu-link");
    const menuLinks = Array.from(menuLinksRef);
    menuLinks.at(currentPageIndex).classList.toggle("selected");

    const projectHudRef = document.getElementById("project-hud");

    menuLinks.map((ml, index) => ml.addEventListener("click", (event) => {
        menuLinks.at(currentPageIndex).classList.toggle("selected");

        currentPageIndex = index;

        if (currentPageIndex === 1) {
            projectHudRef.classList.add("display-animation");
        } else {
            projectHudRef.classList.remove("display-animation");
        }

        menuLinks.at(currentPageIndex).classList.toggle("selected");
    }));

    window.addEventListener("keypress", (event) => {
        menuLinks.at(currentPageIndex).classList.toggle("selected");
        
        if (event.key === "w")
            currentPageIndex++;

        if (event.key === "s")
            currentPageIndex--;

        const keypadNum = parseInt(event.key);
        if (!isNaN(keypadNum) && typeof keypadNum === "number") {
            currentPageIndex = keypadNum - 1;
        }

        currentPageIndex = Math.min(Math.max(currentPageIndex, 0), MAX_PAGE);

        if (currentPageIndex === 1) {
            projectHudRef.classList.add("display-animation");
        } else {
            projectHudRef.classList.remove("display-animation");
        }

        menuLinks.at(currentPageIndex).classList.toggle("selected");
    });
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

    let landingPageModel = null;
    let projectPageModel = null;
    let contactPageModel = null;

    const loader = new GLTFLoader();

    // Starting coordinates of the first scene (landing page) will be:
    // [X]: center of the screen
    // [Y]: center of the screen
    // [z]: 500px from the origin of the scene

    const cameraPoints = [
        new THREE.Vector3(0, 0, 50),
        new THREE.Vector3(75, 0, 0),
        new THREE.Vector3(0, 0, -50)
    ];

    const cameraAngle = [
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), THREE.MathUtils.degToRad(0)),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), THREE.MathUtils.degToRad(90)),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), THREE.MathUtils.degToRad(180))
    ];

    function animate() {
        landingPageModel?.scale.lerp(new THREE.Vector3(1, 1, 1), 0.25);
        projectPageModel?.scale.lerp(new THREE.Vector3(1, 1, 1), 0.25);

        camera.position.lerp(cameraPoints[currentPageIndex], 0.25);
        camera.quaternion.slerp(cameraAngle[currentPageIndex], 0.25);

        renderer.render( scene, camera );
    }

    renderer.setAnimationLoop(animate);
}

window.addEventListener("DOMContentLoaded", init);