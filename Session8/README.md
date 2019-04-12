# DAT505-GitHub
### Description
Session8 includes two documents :Examples & Homework;

* Examples:The content of S8-00-Texture-Eyes-Interaction2X shows three random eyes moving with the mouse;

 The content of S8-01-RaycastSprite is about clicking on a rectangle with the mouse to change its color,then pressing and holding the mouse down on the cuboid so that the cuboid rotates according to the trend of the mouse;

 The case of S8-02-objLoader-Raycasting changes the geometry based on the case of RaycastSprite and adds speed and random size and number of loops to the objects.

* Homework:S8-02-objLoader-Raycasting-homework ———— According to the case of objLoader in the class,import the 3dmax model and use the loop cycle.Clicking on  the model to change its color.

### Usage
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```
Define mouse,radius,theta,objects,
create an AudioListener and add it to the camera,
create a global audio source,
load a sound and set it as the Audio object's buffer
```javascript
var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;
var radius = 100, theta = 0;
var object;
var objects = [];
var listener = new THREE.AudioListener();
var sound = new THREE.Audio( listener );
var audioLoader = new THREE.AudioLoader();
```
Settings audio
```javascript
  camera.add( listener );
```
Model/material loading!Load the file of OBJLoader and mtlLoader,you can import the 3dmax object model and change the obj and mtl inside it.Add to the array so that we can access for raycasting.
```javascript
for (var i=0; i<200; i++){

   var mtlLoader = new THREE.MTLLoader();
     mtlLoader.load("cuptea.mtl", function(materials){

     materials.preload();

   var objLoader = new THREE.OBJLoader();
     objLoader.setMaterials(materials);

     objLoader.load("cuptea.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 0.1;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*800-400, Math.random()*800-400, Math.random()*800-400);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh);
```
Settings Raycaster;
stats = new Stats();
container.appendChild( stats.dom );

Set size of window and convert the screen coordinates of the mouse point into a Threejs 3d coordinate.Calculate the coordinates of the mouse's position in threejs, and then sets the object's position to the mouse's position.
```javascript
raycaster = new THREE.Raycaster();

renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

document.addEventListener( 'mousedown', onDocumentMouseDown, false );
window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseDown( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}
```
