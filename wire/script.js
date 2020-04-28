var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var geometry = new THREE.TorusKnotGeometry(10, 3, 128, 32, 2, 3, 1);
var material = new THREE.MeshBasicMaterial({color: 0x686858, wireframe: true, transparent: true, opacity: 0.1});
var wfobject = new THREE.Mesh(geometry, material);

function animate() {
    camera.position.z = (10 * Math.sin(Date.now() * 0.0001)) + 10;
    wfobject.rotation.x += 0.005;
    wfobject.rotation.y += 0.005;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onload() {
    var container = document.getElementById("container");

    scene.fog = new THREE.Fog(0xe8e8d8, 2000, 10000);

    scene.add(wfobject);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color);
    container.appendChild(renderer.domElement);
    animate();
}

function onresize() {
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("load", onload, false);
window.addEventListener("resize", onresize, false);
