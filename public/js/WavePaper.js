window.wavesDidRun = false;
window.InitWaves = () => {
  window.wavesDidRun = true;
  let renderer, camera, scene, plane, light1, light2, light3;

  const simplex = new SimplexNoise();

  let setRenderer = () => {
    renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("canvas"),
      antialias: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  let setCamera = () => {
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 250);
    camera.position.y = 10;
  };

  let setScene = () => {
    scene = new THREE.Scene();
    scene.background = new THREE.Color("#f2f7ff");
  };

  let setLight = () => {
    light1 = new THREE.PointLight("#52b8f7", 0.9);
    light1.position.set(0, 80, -30);

    light2 = new THREE.PointLight("#71b1f5", 0.8);
    light2.position.set(0, 150, 0);

    light3 = new THREE.PointLight("#d0def5", 0.9);
    light3.position.set(0, 100, 30);

    scene.add(light1);
    scene.add(light2);
    scene.add(light3);
  };

  let setObjects = () => {
    const material = new THREE.MeshPhongMaterial();
    let geometry = new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight, window.innerWidth / 2, window.innerHeight / 2);

    plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2 + 0.1;
    plane.position.y = -10;

    scene.add(plane);
  };

  let animate = () => {
    const time = Date.now() * 0.0002;
    const gArray = plane.geometry.attributes.position.array;
    for (let i = 0; i < gArray.length; i += 3) {
      gArray[i + 2] =
      simplex.noise3D(gArray[i] / 75, gArray[i + 1] / 50, time) * 10;
    }
    plane.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  const setUp = () => {
    setRenderer();
    setCamera();
    setScene();
    setLight();
    setObjects();
    animate();
  };

  window.cleanUpWaves = () => {
    setRenderer = null;
    setCamera = null;
    setScene = null;
    setLight = null;
    setObjects = null;
    animate = null;
    window.wavesDidRun = false;
  }
  setUp();
}

if(!window.wavesDidRun) {
  window.InitWaves();
}