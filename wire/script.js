var container;
var camera, scene;
var renderer;
var wfobject;

init();
animate();

function init() {
    container = document.getElementById("container");
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0xe8e8c8, 2000, 10000);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color);
    container.appendChild(renderer.domElement);
    var geometry = new THREE.TorusKnotGeometry(10, 3, 128, 32, 2, 3, 1);
    var material = new THREE.MeshBasicMaterial({color: 0x686848, wireframe: true, transparent: true, opacity: 0.1});
    wfobject = new THREE.Mesh(geometry, material);
    scene.add(wfobject);
    camera.position.z = 5;
    window.addEventListener("resize", onWindowResize, false);
}

function animate () {
    requestAnimationFrame( animate );
    render();
}

function render () {
    var r = (10 * Math.sin(Date.now()*0.0001))+10;
    camera.position.z = r;
    wfobject.rotation.x += 0.005;
    wfobject.rotation.y += 0.005;
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
