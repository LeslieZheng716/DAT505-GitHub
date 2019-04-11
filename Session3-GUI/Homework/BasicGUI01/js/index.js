//Global variables
var scene, camera, renderer;
var threejs, color,material;
var geometry,mesh;
var geometry1, mesh1;
var geometry2,mesh2;
var geometry3,mesh3;
var geometry4,mesh4;
var geometry5,mesh5;
var geometry6,mesh6;
var geometry7,mesh7;
var group;
var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

//GUI - Declare variable
var gui = null;

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

init();
render();

function init(){
  threejs = document.getElementById('threejs');

  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a renderer  ------------
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0x333F47, 1);
  renderer.shadowMap.Enabled = true;
  renderer.shadowMapSoft = true;

  threejs.appendChild(renderer.domElement);

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(55, WIDTH / HEIGHT, 1, 10000);
  camera.position.set(0,8, 8);
  camera.lookAt(scene.position);
  scene.add(camera);

  // Create a Cube Mesh with material ---------
  geometry = new THREE.SphereGeometry(0.5,8,8);
  geometry3= new THREE.SphereGeometry(100,100);
  material3 = new THREE.MeshBasicMaterial( {wireframe : true} );
  geometry1 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  geometry2 = new THREE.TorusGeometry(4,0.5,10,10);
  color = Math.random() * 0xffffff;

   material = new THREE.MeshLambertMaterial({
    //ambient: color,
    color: color,
    transparent: true
  });

 material1 = new THREE.MeshNormalMaterial();


  mesh = new THREE.Mesh(geometry, material3);
  mesh.position.set(0, 0, 0);
  //mesh.rotation.set(1, 1, 0);
//  mesh.rotation.y = de2ra(0);
  //mesh.rotation.x = de2ra(0);
  //mesh.rotation.z = de2ra(0);
  mesh.scale.set(1, 1, 1);
  mesh.doubleSided = true;
  mesh.castShadow = true;
  scene.add(mesh);

  mesh1 = new THREE.Mesh(geometry1, material);
  mesh1.position.set(1.0, 1.0, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh1.rotation.y = de2ra(45);
  mesh1.rotation.x = de2ra(0);
  mesh1.rotation.z = de2ra(0);
  mesh1.scale.set(1, 1, 1);
  mesh1.doubleSided = true;
  mesh1.castShadow = true;
  scene.add(mesh1);

  mesh2 = new THREE.Mesh(geometry1, material);
  mesh2.position.set(1.0, 1.5, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh2.rotation.y = de2ra(45);
  mesh2.rotation.x = de2ra(0);
  mesh2.rotation.z = de2ra(0);
  mesh2.scale.set(1, 1, 1);
  mesh2.doubleSided = true;
  mesh2.castShadow = true;
  scene.add(mesh2);

  mesh3 = new THREE.Mesh(geometry1, material);
  mesh3.position.set(1.0, 2, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh3.rotation.y = de2ra(45);
  mesh3.rotation.x = de2ra(0);
  mesh3.rotation.z = de2ra(0);
  mesh3.scale.set(1, 1, 1);
  mesh3.doubleSided = true;
  mesh3.castShadow = true;
  scene.add(mesh3);

  mesh4 = new THREE.Mesh(geometry1, material);
  mesh4.position.set(1.0, 0.5, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh4.rotation.y = de2ra(45);
  mesh4.rotation.x = de2ra(0);
  mesh4.rotation.z = de2ra(0);
  mesh4.scale.set(1, 1, 1);
  mesh4.doubleSided = true;
  mesh4.castShadow = true;
  scene.add(mesh4);

  mesh5 = new THREE.Mesh(geometry1, material);
  mesh5.position.set(1.0, 2.5, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh5.rotation.y = de2ra(45);
  mesh5.rotation.x = de2ra(0);
  mesh5.rotation.z = de2ra(0);
  mesh5.scale.set(1, 1, 1);
  mesh5.doubleSided = true;
  mesh5.castShadow = true;
  scene.add(mesh5);

  mesh6 = new THREE.Mesh(geometry1, material);
  mesh6.position.set(1.0, 0, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh6.rotation.y = de2ra(45);
  mesh6.rotation.x = de2ra(0);
  mesh6.rotation.z = de2ra(0);
  mesh6.scale.set(1, 1, 1);
  mesh6.doubleSided = true;
  mesh6.castShadow = true;
  scene.add(mesh6);

  mesh7 = new THREE.Mesh(geometry1, material);
  mesh7.position.set(1,-0.5, 1.5);
//  mesh1.rotation.set(0, 0, 0);
  mesh7.rotation.y = de2ra(45);
  mesh7.rotation.x = de2ra(0);
  mesh7.rotation.z = de2ra(0);
  mesh7.scale.set(1, 1, 1);
  mesh7.doubleSided = true;
  mesh7.castShadow = true;
  scene.add(mesh7);

  mesh8 = new THREE.Mesh(geometry1, material);
  mesh8.position.set(0.65,-0.55,1.1);
//  mesh1.rotation.set(0, 0, 0);
  mesh8.rotation.y = de2ra(45);
  mesh8.rotation.x = de2ra(0);
  mesh8.rotation.z = de2ra(0);
  mesh8.scale.set(1, 1, 1);
  mesh8.doubleSided = true;
  mesh8.castShadow = true;
  scene.add(mesh8);

  mesh9 = new THREE.Mesh(geometry1, material1);
  mesh9.position.set(0.3, -0.6,0.7);
//  mesh1.rotation.set(0, 0, 0);
  mesh9.rotation.y = de2ra(45);
  mesh9.rotation.x = de2ra(0);
  mesh9.rotation.z = de2ra(0);
  mesh9.scale.set(1, 1, 1);
  mesh9.doubleSided = true;
  mesh9.castShadow = true;
  scene.add(mesh9);

  mesh10 = new THREE.Mesh(geometry1, material1);
  mesh10.position.set(-0.1, -0.65,0.3);
  //mesh11.position.set(-3, 0,-1.5);

//  mesh1.rotation.set(0, 0, 0);
  mesh10.rotation.y = de2ra(45);
  mesh10.rotation.x = de2ra(0);
  mesh10.rotation.z = de2ra(0);
  mesh10.scale.set(1, 1, 1);
  mesh10.doubleSided = true;
  mesh10.castShadow = true;
  scene.add(mesh10);

  mesh11 = new THREE.Mesh(geometry1, material1);
  mesh11.position.set(-0.45, -0.55,0.0);
  //mesh11.position.set(-3, 0,-1.5);

//  mesh1.rotation.set(0, 0, 0);
  mesh11.rotation.y = de2ra(45);
  mesh11.rotation.x = de2ra(0);
  mesh11.rotation.z = de2ra(0);
  mesh11.scale.set(1, 1, 1);
  mesh11.doubleSided = true;
  mesh11.castShadow = true;
  scene.add(mesh11);

  mesh12 = new THREE.Mesh(geometry1, material1);
  mesh12.position.set(-0.85, -0.54,-0.4);
  //mesh11.position.set(-3, 0,-1.5);

//  mesh1.rotation.set(0, 0, 0);
  mesh12.rotation.y = de2ra(45);
  mesh12.rotation.x = de2ra(0);
  mesh12.rotation.z = de2ra(0);
  mesh12.scale.set(1, 1, 1);
  mesh12.doubleSided = true;
  mesh12.castShadow = true;
  scene.add(mesh12);

  mesh13 = new THREE.Mesh(geometry1, material1);
  mesh13.position.set(-1.25, -0.45,-0.75);
  //mesh11.position.set(-3, 0,-1.5);

//  mesh1.rotation.set(0, 0, 0);
  mesh13.rotation.y = de2ra(45);
  mesh13.rotation.x = de2ra(0);
  mesh13.rotation.z = de2ra(0);
  mesh13.scale.set(1, 1, 1);
  mesh13.doubleSided = true;
  mesh13.castShadow = true;
  scene.add(mesh13);

  mesh14 = new THREE.Mesh(geometry1, material1);
  mesh14.position.set(-1.7, -0.6,-1.4);
  //mesh11.position.set(-3, 0,-1.5);

//  mesh1.rotation.set(0, 0, 0);
  mesh14.rotation.y = de2ra(45);
  mesh14.rotation.x = de2ra(0);
  mesh14.rotation.z = de2ra(0);
  mesh14.scale.set(1, 1, 1);
  mesh14.doubleSided = true;
  mesh14.castShadow = true;
  scene.add(mesh14);

  mesh15 = new THREE.Mesh(geometry1, material1);
  mesh15.position.set(-1., -0.3,-1.4);
  mesh15.rotation.y = de2ra(45);
  mesh15.rotation.x = de2ra(0);
  mesh15.rotation.z = de2ra(0);
  mesh15.scale.set(1, 1, 1);
  mesh15.doubleSided = true;
  mesh15.castShadow = true;
  scene.add(mesh15);

  mesh16 = new THREE.Mesh(geometry1, material1);
  mesh16.position.set(-0.1, -0.15,-1.4);
//  mesh1.rotation.set(0, 0, 0);
  mesh16.rotation.y = de2ra(45);
  mesh16.rotation.x = de2ra(0);
  mesh16.rotation.z = de2ra(0);
  mesh16.scale.set(0.5, 0.5, 0.5);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh16);

  mesh17 = new THREE.Mesh(geometry1, material1);
  mesh17.position.set(0.8, 0.3,-1.4);
//  mesh1.rotation.set(0, 0, 0);
  mesh17.rotation.y = de2ra(45);
  mesh17.rotation.x = de2ra(0);
  mesh17.rotation.z = de2ra(0);
  mesh17.scale.set(1, 1, 1);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh17);

  mesh18 = new THREE.Mesh(geometry1, material1);
  mesh18.position.set(2, -0.2,-1.4);
//  mesh1.rotation.set(0, 0, 0);
  mesh18.rotation.y = de2ra(45);
  mesh18.rotation.x = de2ra(0);
  mesh18.rotation.z = de2ra(0);
  mesh18.scale.set(0.8, 0.8, 0.8);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh18);

  mesh19 = new THREE.Mesh(geometry1, material1);
  mesh19.position.set(3, -0.35,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh19.rotation.y = de2ra(45);
  mesh19.rotation.x = de2ra(0);
  mesh19.rotation.z = de2ra(0);
  mesh19.scale.set(0.8, 0.8, 0.8);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh19);

  mesh20 = new THREE.Mesh(geometry, material3);
  mesh20.position.set(1.0, 3, 1.5);
  //mesh.rotation.set(1, 1, 0);
//  mesh.rotation.y = de2ra(0);
  //mesh.rotation.x = de2ra(0);
  //mesh.rotation.z = de2ra(0);
  mesh20.scale.set(1, 1, 1);
  mesh20.doubleSided = true;
  mesh20.castShadow = true;
  scene.add(mesh20);

  mesh21 = new THREE.Mesh(geometry1, material1);
  mesh21.position.set(3.5, -0.35,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh21.rotation.y = de2ra(55);
  mesh21.rotation.x = de2ra(0);
  mesh21.rotation.z = de2ra(0);
  mesh21.scale.set(0.6, 0.6, 0.6);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh21);

  mesh22 = new THREE.Mesh(geometry1, material1);
  mesh22.position.set(3.95, -0.35,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh22.rotation.y = de2ra(45);
  mesh22.rotation.x = de2ra(0);
  mesh22.rotation.z = de2ra(0);
  mesh22.scale.set(0.6, 0.6, 0.6);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh22);

  mesh23 = new THREE.Mesh(geometry1, material1);
  mesh23.position.set(3.5, -0.6,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh23.rotation.y = de2ra(45);
  mesh23.rotation.x = de2ra(15);
  mesh23.rotation.z = de2ra(0);
  mesh23.scale.set(0.6, 0.6, 0.6);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh23);

  mesh24 = new THREE.Mesh(geometry1, material1);
  mesh24.position.set(3.5, -0.85,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh24.rotation.y = de2ra(45);
  mesh24.rotation.x = de2ra(-15);
  mesh24.rotation.z = de2ra(15);
  mesh24.scale.set(0.6, 0.6, 0.6);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh24);

  mesh25 = new THREE.Mesh(geometry1, material1);
  mesh25.position.set(3.0, -0.85,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh25.rotation.y = de2ra(55);
  mesh25.rotation.x = de2ra(15);
  mesh25.rotation.z = de2ra(0);
  mesh25.scale.set(0.7, 0.7, 0.7);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh25);

  mesh26 = new THREE.Mesh(geometry1, material3);
  mesh26.position.set(3.45, -1.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh26.rotation.y = de2ra(45);
  mesh26.rotation.x = de2ra(0);
  mesh26.rotation.z = de2ra(0);
  mesh26.scale.set(0.5, 0.5, 0.5);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh26);

  mesh26 = new THREE.Mesh(geometry1, material1);
  mesh26.position.set(3.3, -2.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh26.rotation.y = de2ra(45);
  mesh26.rotation.x = de2ra(0);
  mesh26.rotation.z = de2ra(0);
  mesh26.scale.set(0.5, 0.5, 0.5);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh26);

  mesh27 = new THREE.Mesh(geometry1, material1);
  mesh27.position.set(3.0, -3.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh27.rotation.y = de2ra(45);
  mesh27.rotation.x = de2ra(0);
  mesh27.rotation.z = de2ra(0);
  mesh27.scale.set(0.6, 0.6, 0.6);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh27);

  mesh28 = new THREE.Mesh(geometry1, material1);
  mesh28.position.set(2.7, -4.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh28.rotation.y = de2ra(45);
  mesh28.rotation.x = de2ra(0);
  mesh28.rotation.z = de2ra(0);
  mesh28.scale.set(0.7, 0.7, 0.7);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh28);

  mesh29 = new THREE.Mesh(geometry1, material1);
  mesh29.position.set(2.3, -5.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh29.rotation.y = de2ra(45);
  mesh29.rotation.x = de2ra(0);
  mesh29.rotation.z = de2ra(0);
  mesh29.scale.set(0.9, 0.9, 0.9);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh29);

  mesh30 = new THREE.Mesh(geometry1, material1);
  mesh30.position.set(1.8, -3.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh30.rotation.y = de2ra(45);
  mesh30.rotation.x = de2ra(0);
  mesh30.rotation.z = de2ra(0);
  mesh30.scale.set(0.8, 0.8, 0.8);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh30);

  mesh31 = new THREE.Mesh(geometry1, material1);
  mesh31.position.set(2.1, -4.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh31.rotation.y = de2ra(45);
  mesh31.rotation.x = de2ra(0);
  mesh31.rotation.z = de2ra(0);
  mesh31.scale.set(0.8, 0.8, 0.8);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh31);

  mesh32 = new THREE.Mesh(geometry1, material1);
  mesh32.position.set(1.8, -6.5,-1.0);
//  mesh1.rotation.set(0, 0, 0);
  mesh32.rotation.y = de2ra(45);
  mesh32.rotation.x = de2ra(0);
  mesh32.rotation.z = de2ra(0);
  mesh32.scale.set(0.9, 0.9, 0.9);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh32);

  mesh32 = new THREE.Mesh(geometry2, material1);
  mesh32.position.set(1,-3,-2);
//  mesh1.rotation.set(0, 0, 0);
  mesh32.rotation.y = de2ra(0);
  mesh32.rotation.x = de2ra(-50);
  mesh32.rotation.z = de2ra(0);
  mesh32.scale.set(0.9, 0.9, 0.9);
  //mesh16.doubleSided = true;
  //mesh16.castShadow = true;
  scene.add(mesh32);


  lightingSystem();
//add some of parts in a group and put them into the scene;
  var group = new THREE.Group()
             group.add(mesh1)
             group.add(mesh2)
             group.add(mesh3)
             group.add(mesh4)
             group.add(mesh5)
             group.add(mesh6)
             group.add(mesh7)
             group.add(mesh8)
             scene.add(group)

  //GUI - Setup the GUI controller
  var controller = new function() {
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.positionX = 0;
    this.positionY = 0;
    this.positionZ = 0;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.boxColor = color;
    this.castShadow = true;
    this.boxOpacity = 1;
  }();

  var gui = new dat.GUI();
  var f1 = gui.addFolder('Scale');
  f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
    mesh1.scale.x = (controller.scaleX);
    mesh2.scale.x = (controller.scaleX);
    mesh3.scale.x = (controller.scaleX);
    mesh4.scale.x = (controller.scaleX);
    mesh5.scale.x = (controller.scaleX);
    mesh6.scale.x = (controller.scaleX);
    mesh7.scale.x = (controller.scaleX);
  });
  f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
    mesh1.scale.y = (controller.scaleY);
    mesh2.scale.y = (controller.scaleY);
    mesh3.scale.y = (controller.scaleY);
    mesh4.scale.y = (controller.scaleY);
    mesh5.scale.y = (controller.scaleY);
    mesh6.scale.y = (controller.scaleY);
    mesh7.scale.y = (controller.scaleY);
  });
  f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
    mesh1.scale.z = (controller.scaleZ);
    mesh2.scale.z = (controller.scaleZ);
    mesh3.scale.z = (controller.scaleZ);
    mesh4.scale.z = (controller.scaleZ);
    mesh5.scale.z = (controller.scaleZ);
    mesh6.scale.z = (controller.scaleZ);
    mesh7.scale.z = (controller.scaleZ);
  });

  var f2 = gui.addFolder('Position');
  f2.add(controller, 'positionX', -50, 50).onChange( function() {
    mesh1.position.x = (controller.positionX);
    mesh2.position.x = (controller.positionX);
    mesh3.position.x = (controller.positionX);
    mesh4.position.x = (controller.positionX);
    mesh5.position.x = (controller.positionX);
    mesh6.position.x = (controller.positionX);
    mesh7.position.x = (controller.positionX);
  });
  f2.add(controller, 'positionY', -50, 50).onChange( function() {
    mesh1.position.y = (controller.positionY);
    mesh2.position.y = (controller.positionY);
    mesh3.position.y = (controller.positionY);
    mesh4.position.y = (controller.positionY);
    mesh5.position.y = (controller.positionY);
    mesh6.position.y = (controller.positionY);
    mesh7.position.y = (controller.positionY);
  });
  f2.add(controller, 'positionZ', -50, 50).onChange( function() {
    mesh1.position.z = (controller.positionZ);
    mesh2.position.z = (controller.positionZ);
    mesh3.position.z = (controller.positionZ);
    mesh4.position.z = (controller.positionZ);
    mesh5.position.z = (controller.positionZ);
    mesh6.position.z = (controller.positionZ);
    mesh7.position.z = (controller.positionZ);
  });

  var f3 = gui.addFolder('Rotation');
  f3.add(controller, 'rotationX', -180, 180).onChange( function() {
    mesh1.rotation.x = de2ra(controller.rotationX);
    mesh2.rotation.x = de2ra(controller.rotationX);
    mesh3.rotation.x = de2ra(controller.rotationX);
    mesh4.rotation.x = de2ra(controller.rotationX);
    mesh5.rotation.x = de2ra(controller.rotationX);
    mesh6.rotation.x = de2ra(controller.rotationX);
    mesh7.rotation.x = de2ra(controller.rotationX);
    mesh8.rotation.x = de2ra(controller.rotationX);
  });
  f3.add(controller, 'rotationY', -180, 180).onChange( function() {
    mesh1.rotation.y = de2ra(controller.rotationY);
    mesh2.rotation.y = de2ra(controller.rotationY);
    mesh3.rotation.y = de2ra(controller.rotationY);
    mesh4.rotation.y = de2ra(controller.rotationY);
    mesh5.rotation.y = de2ra(controller.rotationY);
    mesh6.rotation.y = de2ra(controller.rotationY);
    mesh7.rotation.y = de2ra(controller.rotationY);
    mesh8.rotation.y = de2ra(controller.rotationY);
  });
  f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
    mesh1.rotation.z = de2ra(controller.rotationZ);
    mesh2.rotation.z = de2ra(controller.rotationZ);
    mesh3.rotation.z = de2ra(controller.rotationZ);
    mesh4.rotation.z = de2ra(controller.rotationZ);
    mesh5.rotation.z = de2ra(controller.rotationZ);
    mesh6.rotation.z = de2ra(controller.rotationZ);
    mesh7.rotation.z = de2ra(controller.rotationZ);
    mesh8.rotation.z = de2ra(controller.rotationZ);
  });
  gui.addColor( controller, 'boxColor', color ).onChange( function() {
    mesh.material.color.setHex( dec2hex(controller.boxColor) );
  });
  /*gui.add( controller, 'castShadow', true ).onChange( function() {
    mesh.castShadow = controller.castShadow;
  });*/
  gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
    material.opacity = (controller.boxOpacity);
  });
  var gui = new dat.GUI();
  var f4 = gui.addFolder('Position');
  f4.add(controller,'positionX',-50,50).onChange(function(){
    mesh10.position.x = (controller.positionX);
  });
  f4.add(controller,'positionY',-50,50).onChange(function(){
    mesh10.position.y = (controller.positionY);
  });
  f4.add(controller,'positionZ',-50,50).onChange(function(){
    mesh10.position.z = (controller.positionZ);
  });
  var f4 = gui.addFolder('Rotation');
  f4.add(controller, 'rotationX', -180, 180).onChange( function() {
    mesh10.rotation.x = de2ra(controller.rotationX);
  });
  f4.add(controller, 'rotationY', -180, 180).onChange( function() {
      mesh10.rotation.y = de2ra(controller.rotationY);
  });
    f4.add(controller, 'rotationZ', -180, 180).onChange( function() {
          mesh10.rotation.z = de2ra(controller.rotationZ);
  });
}

//Color converter
function dec2hex(i) {
  var result = "0x000000";
  if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
  else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
  else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
  else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
  else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
  else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
  if (result.length == 8){return result;}
}

// Render Loop
function render () {
  requestAnimationFrame(render);
  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh.rotation.y += 0.01;
  //renderer.setClearColor("#000000");
  // Render the scene
  renderer.render(scene, camera);
};

function lightingSystem(){
  var object3d  = new THREE.DirectionalLight('white', 0.15);
  object3d.position.set(6,3,9);
  object3d.name = 'Back light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.35);
  object3d.position.set(-6, -3, 0);
  object3d.name   = 'Key light';
  scene.add(object3d);

  object3d = new THREE.DirectionalLight('white', 0.55);
  object3d.position.set(9, 9, 6);
  object3d.name = 'Fill light';
  scene.add(object3d);

  var spotLight = new THREE.SpotLight( 0xffffff );
  spotLight.position.set( 3, 30, 3 );
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 2048;
  spotLight.shadow.mapSize.height = 2048;
  spotLight.shadow.camera.near = 1;
  spotLight.shadow.camera.far = 4000;
  spotLight.shadow.camera.fov = 45;
  scene.add( spotLight );
}
