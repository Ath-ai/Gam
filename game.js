let scene, camera, renderer, controls;

init();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('game-container').appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();

    // Load city GLTF model
    loader.load('city.gltf', function (gltf) {
        scene.add(gltf.scene);
    });

    // Load car GLTF model
    loader.load('scene.gltf', function (gltf) {
        car = gltf.scene;
        car.position.set(0, 0, 0); // Set initial position of the car
        scene.add(car);
    });

    // Example car movement controls
    document.getElementById('accelerate').addEventListener('touchstart', accelerate);
    document.getElementById('brake').addEventListener('touchstart', brake);
    document.getElementById('left').addEventListener('touchstart', steerLeft);
    document.getElementById('right').addEventListener('touchstart', steerRight);

    camera.position.set(0, 5, 10); // Adjust camera position
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function accelerate() {
    // Implement acceleration logic
}

function brake() {
    // Implement brake logic
}

function steerLeft() {
    // Implement left steering logic
}

function steerRight() {
    // Implement right steering logic
}
