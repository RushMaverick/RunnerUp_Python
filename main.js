import * as THREE from 'three';

// Wrap your entire code inside a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.querySelector('canvas.webgl');

    // Check if the canvas is found
    if (!canvas) {
        console.error('Canvas not found');
        return;
    }

    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    const sizes = {
        width: 800,
        height: 600
    };

    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.z = 4;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
});
