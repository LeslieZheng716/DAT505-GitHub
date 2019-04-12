# DAT505-GitHub
### Description
Session4 includes two documents :Examples & Homework;

* Examples:the content of S4-00-ArrayMesh-execrise & S4-ArrayMesh is about ArrayMesh and Loops;
* Homework:ArrayMesh-Execrise-homework4 ———— The homework is to make a row of cuboids move at different speeds in different  positions according to the requirements specified by the teacher.

  ArrayMesh-Execrise-homework4(1) ———— The homework is to make a row of cuboids move at different speeds and rotate in different positions according to the requirements specified by the teacher.
### Usage
```html
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```
Definite cubes,rot,randomSpeedX
```javascript
var renderer, scene, camera;
var cubes = [];
var rot = 0;
var randomSpeedX = [];
```
the code of OrbitControls
```javascript
controls = new THREE.OrbitControls(camera, renderer.domElement);
```
The code of ArrayMesh.Start from -35 and sequentially add one every 5 pixels
```javascript
for (var x = -35; x < 40; x += 5) {
  for (var y = -35; y < 40; y += 5) {
    var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
```
The color of the material is assigned a random color and the randomSpeed of cubes
```html
    var boxMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xFFFFFF});
    var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    mesh.position.x = x;
    mesh.position.z = y;
    mesh.rotation.x += 360*Math.random();

   var randomValue = Math.random() * 180;
   randomSpeedX.push(randomValue);

   scene.add(mesh);
   cubes.push(mesh);
  }
}
```
 For Each takes all the array entries and passes the c as the object, and i is keeping track of the index for each cube,and rotate the object that is referenced in c
```javascript

  function drawFrame(){
   requestAnimationFrame(drawFrame);
   rot += 0.001;
   cubes.forEach(function(c, i) {
    c.rotation.z = rot;

    cubes[i].rotation.x += randomSpeedX[i];

  });
```
