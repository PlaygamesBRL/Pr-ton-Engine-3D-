// GridHelper.js

function createGridHelper(scene) {
    const gridHelper = new THREE.GridHelper(50, 50, 0x888888, 0x444444);
    scene.add(gridHelper);
}
