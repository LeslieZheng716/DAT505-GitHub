# DAT505-GitHub
### Description###
Session3 includes two documents :Examples & Homework;
* Examples:the content of 00-BasicStructure-GUI is about GUI,which is about Scale,Position,Rotation,boxColor and boxOpacity, then i try to use GUI controling two geometries at the same time;
* Homework:BasicGUI01 ———— According to the case study in class, I made a geometry combination pattern, controlled the size and coordinates of the geometry, as well as the color and boxOpacity and transparency by adjusting the panel. I tried to make a scene with visual illusion,it looks lile castle or somethings.
### Usage ###
```html
<script src="build/three.min.js"></script>
<script src="js/dat.gui.min.js"></script>
```
Learning to add GUI in the scene to control geometries.

About how to edit the code in the index.js.


```javascript
var scene, camera, renderer;
var threejs, color,material;
var geometry,mesh;
var group;
```
add some of parts in a group and put them into the scene,using GUI to control various geometries at the same time;
```javascript
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
```
Setup the GUI controller,from mesh1 to mesh7
```javascript
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
  ......
});
f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
  mesh1.scale.y = (controller.scaleY);
  ......
});
f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
  mesh1.scale.z = (controller.scaleZ);
  ......
});
```
control mesh1-7
```javascript
var f2 = gui.addFolder('Position');
f2.add(controller, 'positionX', -50, 50).onChange( function() {
  mesh1.position.x = (controller.positionX);
.....
});
f2.add(controller, 'positionY', -50, 50).onChange( function() {
  mesh1.position.y = (controller.positionY);
.....
});
f2.add(controller, 'positionZ', -50, 50).onChange( function() {
  mesh1.position.z = (controller.positionZ);
.....
});
```
control mesh1-8
```javascript
var f3 = gui.addFolder('Rotation');
f3.add(controller, 'rotationX', -180, 180).onChange( function() {
  mesh1.rotation.x = de2ra(controller.rotationX);
  ......
});
f3.add(controller, 'rotationY', -180, 180).onChange( function() {
  mesh1.rotation.y = de2ra(controller.rotationY);
......
});
f3.add(controller, 'rotationZ', -180, 180).onChange( function() {
  mesh1.rotation.z = de2ra(controller.rotationZ);
......
});
```
control the boxOpacity of mesh1-8 and control the boxColor of meshes which added MeshBasicMaterial.
```javascript
gui.addColor( controller, 'boxColor', color ).onChange( function() {
  mesh.material.color.setHex( dec2hex(controller.boxColor) );
});
gui.add( controller, 'boxOpacity', 0.1, 1 ).onChange( function() {
  material.opacity = (controller.boxOpacity);
});
```
Setup a new GUI controller to estimate the position and rotation of all geometries easily.
```javascript
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
```
