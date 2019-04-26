# DAT505-GitHub
NAME: PinYi Zheng(Leslie Zheng);

STUDENT ID: B161006107;

This is a final project that includes code projects for DAT505 module;
#### Links

https://github.com/LeslieZheng716/DAT505-GitHub.git
### Final project :
####  《Dream Queen》
* This assignment aims to simulate the atmosphere of a 1985 charity concert by queen.I downloaded seven live versions of their concert that day to show.

### Description ###
 I tried to create a set of keyboards, then added music to each key, added the song title text to them, and then added a button plug-in in the upper right corner to turn on and off music. Added a circular star shape map to the scene, then added a queen illustration, and added a color and transparency panel to the illustration to adjust the color and transparency of the image.

### Preview
![Assignment show](/Final Project/Dream Queen/Preview/1.png)
![Assignment show](/Final Project/Dream Queen/Preview/2.png)
![Assignment show](/Final Project/Dream Queen/Preview/3.png)
![Assignment show](/Final Project/Dream Queen/Preview/5.png)

### texture
The textures of background i used in the scene,which are about Queen. I collected them on the internet. I will show you some of them.
![Assignment texture](/Final Project/Dream Queen/texture/texture1.jpg)
![Assignment texture](/Final Project/Dream Queen/texture/texture2.jpg)

### music
I downloaded them which are about live music on the 1985 charity concert by Queen on the internet.
### Usage ###
Add button plug-in and add background picture, you can adjust the size and so on, add text plug-in, you can adjust the font size and color and so on
```html
.btn-music {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 3rem;
  height: 3rem;
  background: url("images/music.png") center center/70% no-repeat;
  cursor: pointer
}

.music-off {
  background: url("images/stop.png") center center/60% no-repeat
}

.text {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 22px;
  color: #fafafa;
  letter-spacing: 0;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;
}
```
The body section below are plug-ins I used.
```html
<a class="btn-music"></a>
<div id="container"></div>
<span class="C3 text">C3</span>
<span class="D4 text">D4</span>
<span class="F3 text">F3</span>
<span class="G3 text">G3</span>
<span class="A3 text">A3</span>
<span class="B3 text">B3</span>
<span class="C4 text">C4</span>
<audio class="music" src="music/0.mp3"></audio>
<script src="build/jquery-3.3.1.min.js"></script>
<script src="build/three.js"></script>
<script src="build/WebGL.js"></script>
<script src="build/stats.min.js"></script>
<script src="js/dat.gui.min.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/index.js"></script>
```
#### images
dot.svg and dot1.svg: Map of stars in the scene. Code to build two-dimensional graphics. I can modify the data such as the r of circle.
```html
<svg fill="#FFFFFF" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 24H0V0h24v24z" fill="none"/>
    <circle cx="12" cy="12" r="8"/>
</svg>
——————————
<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="first floor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="64px" height="64px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
<path fill="none" d="M33,33.167H0V0h33V33.167z"/>
<polygon fill="#FFFFFF" points="15.583,0.501 19.133,10.887 30.578,10.899 21.326,17.331 24.851,27.725 15.583,21.314 6.317,27.725
	9.841,17.331 0.59,10.899 12.034,10.887 "/>
</svg>
```
Two ICONS are added to the music switch button on the web page.  
![Assignment icon](/Final Project/Dream Queen/images/music.png)
![Assignment icon](/Final Project/Dream Queen/images/stop.png)
### Code
To clear the page variables
```javascript
(function () {
...
})();
```
Create base objects in the scene, assign them values such as light, camera, renderer, group, add music
```javascript
var camera, scene, renderer, dirLight, dirLightHeper, hemiLight, hemiLightHelper;
var mixers = [];
var stats;
var clock = new THREE.Clock();
var controls;
var scaleGeometry =[];
var scaleY=[];
var group = [];
var mesh;
var material;
var GROUP = new THREE.Group();
var MUSIC = [
    "music/0.mp3",
    "music/1.mp3",
    "music/2.mp3",
    "music/3.mp3",
    "music/4.mp3",
    "music/5.mp3",
    "music/6.mp3",
];
var raycaster = new THREE.Raycaster();
var mouseVector = new THREE.Vector3();
var selectedObject = null;
var playMusic = false;
var dotSystem;
```
Add Stars to the Scene and adjust the intensity of Stars,and create the group to make the texture of stars shine and divide two groups of stars to set color,intensity and spread
```javascript
class drawStar {
   constructor({
       intensity = 5000,
       color = 0xffffff,
       xSpread = 1000,
       ySpread = 1000,
       zSpread = 1000,
       size = 6,
   })
   {
       this.group = new THREE.Group();

       this.intensity = intensity;
       this.color = color;
       this.xSpread = xSpread;
       this.ySpread = ySpread;
       this.zSpread = zSpread;
       this.size = size;

       this.draw();
   }
   draw() {
       const geometry = new THREE.Geometry();
       const colors = [];

       const loader = new THREE.TextureLoader();
       loader.crossOrigin = false;
        loader.load("images/dot1.svg", (texture) => {
           for (var i = 0; i < this.intensity; i += 1) {
               const star = new THREE.Vector3();
               star.x = THREE.Math.randFloatSpread(this.xSpread);
               star.y = THREE.Math.randFloatSpread(this.ySpread);
               star.z = THREE.Math.randFloatSpread(this.zSpread);

               geometry.vertices.push(star);

               colors[i] = new THREE.Color(this.color);
           }
           geometry.colors = colors;

          const material = new THREE.PointsMaterial({
               size: this.size,
               map: texture,
               vertexColors: THREE.VertexColors,
               alphaTest: 0.5,
               transparent: true,
           });

           const particles = new THREE.Points(geometry, material);
           this.group.add(particles);

   }

)};}
function drawDotSystem() {
 dotSystem = new THREE.Group();
 scene.add(dotSystem);
 const system1 = new drawStar({
    intensity: 3000,
    color: Math.random()* 0xffffff,
    xSpread: 800,
    ySpread: 800,
    zSpread: 800,
});
 dotSystem.add(system1.group);

  const system2 = new drawStar({
    intensity: 100,
    color: Math.random()* 0xffffff,
    xSpread: 300,
    ySpread: 500,
    zSpread: 400,
    size: 13,
});
 system2.group.position.set(-100, -80, 0);
 dotSystem.add(system2.group);
}
```
create camera and set it positions and Perspective and alpha and color, then add GROUP into the Scene
```javascript
var container = document.getElementById('container');
camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 50000);
camera.position.set(0, 300, 0);
scene = new THREE.Scene({
    antialias: true, //开启抗锯齿
    alpha: false //开启背景透明

});
 scene.background = new THREE.Color().setHSL(0.9, 0.1, 0.5);

 scene.add(GROUP);
```
[255,255,255]define color for boxColor of GUI. Create a new DAT.GUI about boxColor and boxOpacity.
```javascript
 color= Math.random()*0xffffff;
...
var controller = new function(){
    this.boxColor= color;
    this.boxOpacity = 1;
}

     var gui = new dat.GUI();

     gui.addColor( controller, 'boxColor', color ).onChange( function() {
      mesh1.material.color.setHex( dec2hex(controller.boxColor) );
    });
     gui.add( controller, 'boxOpacity', 0, 3 ).onChange( function() {
      material1.opacity = (controller.boxOpacity);
    });
}
```
creature the picture of background. Generate a random number from 1 to 5(according to the texture files). Create a MeshBasicMaterial with a loaded texture. Combine the geometry and material into a mesh
```javascript
  var  geometry1 = new THREE.BoxGeometry (1400,1,900);

  var randomSelection = Math.round(Math.random()*5)+1;
  var	texture = new THREE.TextureLoader().load( "texture/texture"+randomSelection+".jpg" );

  material1 = new THREE.MeshBasicMaterial( { map: texture} );

  mesh1 = new THREE.Mesh( geometry1, material1 );
  mesh1.position.x = 0;
  mesh1.position.y = 0;
  mesh1.position.z = 0;
  scene.add(mesh1);
```
Define the segments of the group's colors and the r of the group,then define the positions of the segments and colors' division.

The position and color of each point are processed by bufferGeometry,which are added for geometries.

Define each group's positions,scales and set the initial scales and positions of geometries.
```javascript
function drawPiano() {
    var segments = 10000;//lines' numbers
    var positions = [];
    var colors = [];

    var r = 1000;

    for (var i = 0; i < segments; i++) {
        var x = Math.random() * r - r / 2;
        var y = Math.random() * r - r / 2;
        var z = 3 * (Math.random() * r - r / 2);
        positions.push(x, y, z);
        colors.push((x / r) + 0.5);
        colors.push((y / r) + 0.5);
        colors.push((z / r) + 0.5);
    }

    var geometry = new THREE.BufferGeometry();

    geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    geometry.computeBoundingSphere();
    let material = new THREE.PointsMaterial({
　　         size: 2,
　　         vertexColors: THREE.VertexColors,
　　         transparent: true,
　　         opacity: 1,
　　         sizeAttenuation: false
    });
   let mesh=new THREE.Points(geometry,material)
   return mesh
}

 for (let i = 0; i < 7; i++) {
       group[i] = drawPiano();
       group[i].scale.set(0.05, 0.05, 0.05);
       GROUP.add(group[i]);
   }
   group[0].position.set(-300, 0, 0);
   group[1].position.set(-200, 0, 0);
   group[2].position.set(-100, 0, 0);
   group[3].position.set(0, 0, 0);
   group[4].position.set(100, 0, 0);
   group[5].position.set(200, 0, 0);
   group[6].position.set(300, 0, 0);
   //the initial height
   group[0].scale.y= 0.05;
   group[1].scale.y= 0.08;
   group[2].scale.y= 0.1;
   group[3].scale.y= 0.22;
   group[4].scale.y= 0.15;
   group[5].scale.y= 0.08;
   group[6].scale.y= 0.05;
```
set lights for see objects
```javascript
hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 0, 0);
scene.add(hemiLight);

dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(- 1, 1.75, 1);
dirLight.position.multiplyScalar(30);
scene.add(dirLight);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
var d = 50;
dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;
dirLight.shadow.camera.far = 3500;
dirLight.shadow.bias = - 0.0001;
```
Set renderer,Set its aipha for seeing background color.


Set controller to Let the object rotate around the center.

Add EventListener to jutisfy the mouse up and down
```javascript
renderer = new THREE.WebGLRenderer({ antialias: true ,alpha: true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
renderer.gammaInput = true;
renderer.gammaOutput = true;
renderer.shadowMap.enabled = true;

controls = new THREE.OrbitControls(camera, renderer.domElement);
// inertance
controls.enableDamping = true;
//mouse sensitivity
controls.dampingFactor = 1;
//zoom
controls.enableZoom = true;
//rotate
controls.autoRotate = false;
//push
controls.enablePan = false;

window.addEventListener('resize', onWindowResize, false);
window.addEventListener("mousedown", onDocumentMouseDown, false);
window.addEventListener("mouseup", onDocumentMouseUp, false);
```
Set screen adaption and set animation on the window
```javascript
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}
```
Gets the div of the object and modifies the location,"$" is used to Call a plugin named jquery-3.1.1.min.js.
```javascript
function render() {
    var delta = clock.getDelta();
    for (var i = 0; i < mixers.length; i++) {
        mixers[i].update(delta);
    }
    $(".FIRST").css({
        left:transform(group[0]).x,
        top:transform(group[0]).y
    });
    $(".GAGA").css({
        left:transform(group[1]).x,
        top:transform(group[1]).y
    });
    $(".AP").css({
        left:transform(group[2]).x,
        top:transform(group[2]).y
    });
    $(".FALL").css({
        left:transform(group[3]).x,
        top:transform(group[3]).y
    });
    $(".CRAZY").css({
        left:transform(group[4]).x,
        top:transform(group[4]).y
    });
    $(".Champions").css({
        left:transform(group[5]).x,
        top:transform(group[5]).y
    });
    $(".LAST").css({
        left:transform(group[6]).x,
        top:transform(group[6]).y
    });
    renderer.render(scene, camera);
}
```
Jutisfy the click of the mouse,Adjust the range of clicks.

Listen to the mouse click, and then determine whether the position of the mouse click into the left-hand coordinate system in the space point and origin generated by the ray through the object, this is selectedObject.
```javascript
function onDocumentMouseDown(event) {
    event.preventDefault();
    if (selectedObject) {
        selectedObject = null;
    }

    var intersects = getIntersects(event.layerX, event.layerY);
    if (intersects.length > 0) {
        var res = intersects.filter(function (res) {
            return res && res.object;
        })[0];
        if (res && res.object) {
            selectedObject = res.object;
            try {
                selectedObject.scale.set(0.06, 0.06, 0.06);//Adjust the range of clicks
            } catch (error) {
                return;
            }

            for (let i = 0; i < GROUP.children.length; i++) {
                if(GROUP.children[i].uuid == selectedObject.uuid){
                    playArrMusic(i);
                }else{
                    continue;
                }
            }
        }
    }
}
function onDocumentMouseUp(event) {
    event.preventDefault();
    try {
        selectedObject.scale.x =0.05;
        selectedObject.scale.y =(Math.random() * 0.25) - 0.015;
        selectedObject.scale.z =0.05;
    } catch (error) {
        return;
    }
}
```
Judge the coordinate of objects when the mouse click on the window.

Gets half the height and half the width of the window to convert three-dimensional to two-dimensional.Then jutisfy objects' coordinates in the window.
```javascript
function getIntersects(x, y) {
    x = (x / window.innerWidth) * 2 - 1;
    y = - (y / window.innerHeight) * 2 + 1;
    mouseVector.set(x, y, 0.5);
    raycaster.setFromCamera(mouseVector, camera);
    return raycaster.intersectObject(GROUP, true);
}

function transform(pMesh) {
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;
    let vector = pMesh.position.clone().project(camera);
    var obj = { x: (vector.x * halfWidth + halfWidth-10), y: -vector.y * halfHeight + halfHeight }
    return obj
}
```
Add music and put button into the scene to control music-off.jutisfy allmusic's volume and set the loop of playing music.
```javascript
const worldMusic = document.querySelector('.music');
const btnMusic = document.querySelector('.btn-music');

function playArrMusic(i){
    $(".music").attr("src",MUSIC[i]);
    btnMusic.classList.toggle('music-off');
    playMusic = true;
    worldMusic.play();
}
btnMusic.addEventListener('click', () => {
    playMusic = !playMusic;
    btnMusic.classList.toggle('music-off');
    playMusic ? worldMusic.play() : worldMusic.pause();
});

worldMusic.volume = 0.3;
worldMusic.loop = true;
```
