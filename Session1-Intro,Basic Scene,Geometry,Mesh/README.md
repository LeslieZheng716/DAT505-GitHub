# DAT505-GitHub
### Description ###
Session1 includes two documents :Examples & Homework;
This project is to practice setting cubes'array and control cube independently in the array.

### Usage ###
```html
  <script src="build/three.js">  </script>
```
This code creates a scene, a camera, and a geometric cube, and it adds the cube to the scene. It then creates a `WebGL` renderer for the scene and camera, and it adds that viewport to the document.body element.

```html
var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer = new THREE.WebGLRenderer({wireframe:true});
    renderer = new THREE.WebGLRenderer({shadowMap:true});
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.setClearColor("#EE7600");
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

  }
  function geometry(){
    geometry1 = new THREE.CubeGeometry(200, 4, 4);
    material1= new THREE.MeshBasicMaterial( { color: "#CDAA7D" } );
    mesh1 = new THREE.Mesh( geometry1, material1 );
    mesh1.position.z = -1000;
    mesh1.position.x = 0;
    mesh1.position.y = 0;

    scene.add( mesh1 );
    }

  var render = function () {
    requestAnimationFrame( render );

    mesh1.rotation.x += 0.01;
    mesh1.rotation.y += 0.01;

	renderer.render( scene, camera );

}
```
