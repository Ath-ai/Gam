let scene, camera, renderer, controls;

init();

function init() {
    // Initialize Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('game-container').appendChild(renderer.domElement);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light to the scene
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1).normalize();
    scene.add(directionalLight);

    // Load GLTF model
    const loader = new THREE.GLTFLoader();
    loader.load(
        'scene.gltf',
        function (gltf) {
            const model = gltf.scene;
            scene.add(model);
        },
        undefined,
        function (error) {
            console.error(error);
        }
    );

    // Initialize OrbitControls for camera movement
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 10, 20); // Adjust camera position
    controls.update();

    // Render loop
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
