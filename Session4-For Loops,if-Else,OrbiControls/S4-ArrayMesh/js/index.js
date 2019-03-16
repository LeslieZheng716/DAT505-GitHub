var renderer, scene, camera;
var controls;
var cubes = [];
var rot = 0;

//GUI - Declare variable
var gui = null;

//Rotation converter
var de2ra = function(degree) {
  return degree*(Math.PI/180);
};

function init() {
  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, 1, 1000);
  camera.position.set(20, 40, 55);
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 2000, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0, 1000, 0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0xffff00,1);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  //Create a two dimensional grid of objects, and position them accordingly
  for (var x = -10; x <10; x += 5) { // Start from -45 and sequentially add one every 5 pixels
  for (var y = -10; y <10; y += 5) {
  for (var z = -10; z <10; z += 5) {

  //Concatenation of the x and y values (open Console to see)
  console.log("X:" +x+ ", Y:" +y+ ", Z:" +z);

      var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
      //The color of the material is assigned a random color


      var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      //x>=0 this means that squares with values 0 and 5 are true
      //y>=0 this means that squares with values 0 and 5 are true
      //z>=0 this means that squares with values 0 and 5 are true
      if (      x >= 0 && z>= 0 && y>=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
      }else if (x <= 0 && y>= 0 && z>=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color:0x800080});
      }else if (x >= 0 && y<= 0 && z>=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color:0xF0F0F0});
      }else if (x <= 0 && y<= 0 && z>=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color:0xFF7F50});
      }else if (x >= 0 && y>= 0 && z<=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color:0xF0FFF0});
      }else if (x <= 0 && y>= 0 && z<=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color:0xFF69B4});
      }else if (x >= 0 && y<= 0 && z<=0 ){
       boxMaterial = new THREE.MeshLambertMaterial({color:0x4B0082});
      }else{
       boxMaterial = new THREE.MeshLambertMaterial({color:0xC71585});
      }


      var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
      //mesh.castShadow = true;
      mesh.position.x = x;
      mesh.position.z = z;
      mesh.position.y = y;
      mesh.scale.y = 0.5;
      mesh.rotation.x= 360*Math.random();
      scene.add(mesh);
      cubes.push(mesh);
  }
 }
}
  console.log(cubes);
  document.body.appendChild(renderer.domElement);
}

function drawFrame(){
  requestAnimationFrame(drawFrame);
rot += 0.01;

cubes.forEach(function(c, i){
    c.rotation.z = rot;
});
  renderer.render(scene, camera);
}

init();
drawFrame();
