//Global variables
var scene, camera, renderer,light;
var geometry1, material1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, mesh3;
var geometry4, material4, mesh4, border4;
var geometry5, material5, mesh5;
var geometry6, material6, mesh6,border6;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer = new THREE.WebGLRenderer({wireframe:true});
  renderer = new THREE.WebGLRenderer({shadowMap:true});
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;


  // Configure renderer clear color
  renderer.setClearColor("#EE7600");
  //Create a WebGLRenderer and turn on shadows in the renderer

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );

}



function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry1 = new THREE.CubeGeometry(200, 4, 4);
  material1= new THREE.MeshBasicMaterial( { color: "#CDAA7D" } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.z = -1000;
  mesh1.position.x = 0;
  mesh1.position.y = 0;

  // Add mesh to scene
  scene.add( mesh1 );
//  scene.add( directionalLight );

  // Create a Cube Mesh with basic material ---------
  geometry2 = new THREE.CubeGeometry(180, 3,3);
  material2= new THREE.MeshBasicMaterial( { color: "#cbc9c9" } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;
  mesh1.position.x = 0;
  mesh2.position.y = 0;

  // Add mesh to scene
  scene.add( mesh2 );
//  scene.add( directionalLight );

  // Create a Cube Mesh with basic material ---------
  geometry3 = new THREE.CubeGeometry(160, 2, 2);
  material3= new THREE.MeshBasicMaterial( { color: "#a4a2a2" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  mesh1.position.x = 0;
  mesh3.position.y = 0;

  // Add mesh to scene
  scene.add( mesh3 );
//  scene.add( directionalLight );

  // Create a Cube Mesh with basic material ---------
  geometry4 = new THREE.IcosahedronGeometry( 150,1 );
  material4 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4= new THREE.EdgesHelper( mesh4,0x800080);
  mesh4.position.z = -1000;
  mesh4.position.y = 0;

// Add mesh to scene
  scene.add( mesh4 );
  scene.add( border4 );
  //scene.add( directionalLight );

  // Create a Cube Mesh with basic material ---------
  geometry5 = new THREE.CubeGeometry(140, 1, 1);
  material5= new THREE.MeshBasicMaterial( { color: "#EEDFCC" } );
  mesh5= new THREE.Mesh( geometry5, material5 );
  mesh5.position.z = -1000;
  mesh5.position.x = 0;
  mesh5.position.y = 0;

  // Add mesh to scene
  scene.add( mesh5 );
//  scene.add( directionalLight );

  geometry6 = new THREE.OctahedronGeometry(50,0);
  material6 = new THREE.MeshBasicMaterial( {wireframe : true} );
  mesh6= new THREE.Mesh( geometry6, material6 );
  mesh6= new THREE.EdgesHelper( mesh6,0xC0C0C0);
  mesh6.position.z = -1000;
  mesh6.position.x = 0;
  mesh6.position.y = 0;

  // Add mesh to scene
  scene.add( mesh6 );
//  scene.add( directionalLight );


}



// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.01; //Continuously rotate the mesh
  mesh1.rotation.y += 0.01;
  mesh2.rotation.x += 0.02; //Continuously rotate the mesh
  mesh2.rotation.y += 0.02;
  mesh3.rotation.x += 0.03; //Continuously rotate the mesh
  mesh3.rotation.y += 0.03;
  mesh4.rotation.x += 0.01; //Continuously rotate the mesh
  mesh4.rotation.y += 0.01;
  mesh5.rotation.x += 0.04; //Continuously rotate the mesh
  mesh5.rotation.y += 0.04;
  mesh6.rotation.x += 0.01; //Continuously rotate the mesh
  mesh6.rotation.y += 0.01;


  renderer.setClearColor("#EE7600");//hex Color

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
