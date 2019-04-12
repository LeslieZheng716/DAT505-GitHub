# DAT505-GitHub
### Description
Session7 includes two documents :Examples & Homework;

* Examples:The content of S7-01-Texture-Cube is about the free fall of cuboid random size and direction velocity;

    The content of S7-01-Texture-Cube-material is about the testonclass, which makes the size,direction and speed of the cuboid drop freely at random,Pasted different material maps on the cuboid,and let each cuboid drop with random material maps;

     The content of S7-03-Texture-Eyes-Interaction is about eyes model follow the mouse rotation by adjusting the windowHalfX,windowHalfY,mousemove so on.

* Homework:S7-03-Texture-Eyes-Interaction-homework ———— According to the case of Eyes in the class,do a group of eyes to follow the mousemove at random positions.

### Usage
```html
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```
MatCap-style image rendered on a sphere;
Modify sphere UVs instead of using a ShaderMaterial;
Definite mouseX, mouseY,container,stats
```javascript
var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;
var cubes = [];

var  windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
```
Define the faces of eyes'texture.
```javascript
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for (  i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
for (var  j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
  }
```
Set array of eyes,positions and map positions to let all meshs have independent positions.Set size of window and convert the screen coordinates of the mouse point into a Threejs 3d coordinate.Calculate the coordinates of the mouse's position in threejs, and then sets the object's position to the mouse's position
```javascript
mesh = new THREE.Mesh( geometry, material );
mesh.position.x = (Math.random() *-200 )+40;
mesh.position.y = (Math.random() *-100 )+50;
mesh.scale.x=cubescale;
mesh.scale.y=cubescale;
mesh.scale.z=cubescale;
mesh.rotation.x = Math.random() * 2 * Math.PI;
mesh.rotation.y = Math.random() * 2 * Math.PI;

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
window.addEventListener( 'resize', onWindowResize, false );

function render() {
	console.log(window.innerHeight)
	cubes.forEach(function(c,i){
	cubes[i].rotation.x = mouseY/window.innerHeight*2;
	cubes[i].rotation.y = mouseX/window.innerWidth*2;
});
	renderer.render( scene, camera );
}

function onWindowResize() {
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) {
	console.log(event.clientX - windowHalfX);
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}
```
