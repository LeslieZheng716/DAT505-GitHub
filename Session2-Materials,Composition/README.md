# DAT505-GitHub
### Description ###
Session2 includes two documents :Examples & Homework;
* Examples:
00-BasicMaterials———the geometry adds MeshNormalMaterial and basic scene adds lights;

 01-Exercise-GeometriesAndMaterials-SOLVED & 02-MaterialExercise———— On several BoxGeometries, change several materials;
* Homework:00-homework2 ———— According to the class case, make three geometric combinations of different materials.

Further study according to the first lesson,we create the material for the geometry,and you need create a new file named "Texture" and put materials png into this file,the code just like this.
### Usaged
```html
<script src="build/three.js">  </script>
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```
Create a Cube Mesh with basic material
```html
function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.BoxGeometry(50, 50, 50);
  ---------creating different materials,
  /*material = new THREE.MeshPhongMaterial({shininess: 1});*/

  texture = new THREE.TextureLoader().load("Texture/colors.png");
  material1= new THREE.MeshBasicMaterial({map:texture});
  mesh = new THREE.Mesh( geometry, material1 );
  mesh.position.z = -1000;
  mesh.position.x = -150;
  mesh.position.y =-150;

  // Add mesh to scene
  scene.add( mesh );
```
