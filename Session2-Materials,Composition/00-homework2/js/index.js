//Global variables
var scene, camera, renderer,light;
var geometry, material, mesh;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4;
var geometry5, material5, mesh5;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
//  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
  // Configure lights -------------------------------
  var light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  var light1 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light1);
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(50, 50, 50);
  /*material = new THREE.MeshPhongMaterial({shininess: 1});*/
  texture = new THREE.TextureLoader().load("Texture/colors.png");
  material1= new THREE.MeshBasicMaterial({map:texture});
  mesh = new THREE.Mesh( geometry, material1 );
  mesh.position.z = -1000;
  mesh.position.x = -150;
  mesh.position.y =-150;

  // Add mesh to scene
  scene.add( mesh );

  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.OctahedronGeometry(50,0);
  texture = new THREE.TextureLoader().load("Texture/texture1.jpg");
  material2= new THREE.MeshBasicMaterial({map:texture});
  mesh1 = new THREE.Mesh( geometry1, material2 );
  mesh1.position.z = -1000;
  mesh1.position.x = 400;
  mesh1.position.y = 200;

  // Add mesh to scene
  scene.add( mesh1 );


  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.CircleBufferGeometry( 120,50,20);
  /*material2 = new THREE.MeshLambertMaterial({
    color: '#D2BE82',
    lightMap: null,
    lightMapIntensity: 1,
    emissive: 0x088000,
    emissiveMap: null,
    emissiveIntensity: 1,
    specularMap: null
  });*/
   texture = new THREE.TextureLoader().load("Texture/earth_atmos_2048.jpg");
   material4= new THREE.MeshBasicMaterial({map:texture});

  mesh2 = new THREE.Mesh( geometry2, material4);
  //mesh2= new THREE.EdgesHelper( mesh2,0x800080);
  mesh2.position.z = -1000;
  mesh2.position.x = 0;
  mesh2.position.y = 0;

  // Add mesh to scene
  scene.add( mesh2 );

  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.SphereGeometry(100,100);
  //material3 = new THREE.MeshBasicMaterial( {wireframe : true,shininess: 10} );
  texture = new THREE.TextureLoader().load("Texture/moon_1024.jpg");
  material3= new THREE.MeshBasicMaterial({map:texture});
  mesh3 = new THREE.Mesh( geometry3, material3 );
  //mesh3= new THREE.EdgesHelper( mesh3,0x800080);

  mesh3.position.z = -1000;
  mesh3.position.x = 0;
  mesh3.position.y = 0;

  // Add mesh to scene
  scene.add( mesh3 );

  // Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.CircleGeometry(80,80,10);
  material4 = new THREE.MeshBasicMaterial( {wireframe : true,shininess:1} );
  //texture = new THREE.TextureLoader().load("Texture/moon_1024.jpg");
//  material4= new THREE.MeshBasicMaterial({map:texture});
  mesh4 = new THREE.Mesh( geometry4, material4 );
  //mesh3= new THREE.EdgesHelper( mesh3,0x800080);

  mesh4.position.z = -1000;
  mesh4.position.x = 400;
  mesh4.position.y = 200;

  // Add mesh to scene
  scene.add( mesh4 );

  // Create a Cube Mesh with basic material ---------
/*  geometry5 = new THREE.CircleGeometry(2000,2000);
  //material3 = new THREE.MeshBasicMaterial( {wireframe : true,shininess: 10} );
  texture = new THREE.TextureLoader().load("Texture/pano.webm");
  material5= new THREE.MeshBasicMaterial({map:texture});
  mesh5 = new THREE.Mesh( geometry5, material5 );
  //mesh3= new THREE.EdgesHelper( mesh3,0x800080);

  mesh5.position.z = -10000;
  mesh5.position.x = 0;
  mesh5.position.y = 0;

  // Add mesh to scene
  scene.add( mesh5 );*/

}

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh.rotation.x = rot; //Continuously rotate the mesh
  mesh.rotation.y = 0;

  mesh1.rotation.x = 0; //Continuously rotate the mesh
  mesh1.rotation.y =rot;
  mesh1.rotation.z = 0;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = 0;
  mesh2.rotation.z =rot;

  mesh3.rotation.x = rot; //Continuously rotate the mesh
  mesh3.rotation.y =0;
  mesh3.rotation.z = 0;

  mesh4.rotation.x = 0; //Continuously rotate the mesh
  mesh4.rotation.y =0;
  mesh4.rotation.z = 0;



// Render Loop
/*var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.01; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;*/

//  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
