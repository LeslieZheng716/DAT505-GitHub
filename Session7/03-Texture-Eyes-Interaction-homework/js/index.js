// MatCap-style image rendered on a sphere
// modify sphere UVs instead of using a ShaderMaterial

var camera, scene, renderer;
var image;
var mouseX = 0, mouseY = 0;
var container, stats;
var group = [];
//var speed = [];
var cubes = [];

var  windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

init();
animate();

function init() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set( 0, 0, 150 );
  scene.add( camera ); // since light is child of camera

	scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );
	var light = new THREE.PointLight( 0xffffff, 1 );
	camera.add( light );

for (a = 0;a<10;a++){
	var material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		specular: 0x050505,
		shininess: 50,
		map: THREE.ImageUtils.loadTexture('images/eye.png'),
	});

	var geometry = new THREE.SphereGeometry( 30, 32, 16 );


  // modify UVs to accommodate MatCap texture
	var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
	for (  i = 0; i < faceVertexUvs.length; i ++ ) {
		var uvs = faceVertexUvs[ i ];
		var face = geometry.faces[ i ];
		//var uvs  = new THREE.Mesh(geometry.clone());
		for (var  j = 0; j < 3; j ++ ) {
			uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
			uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
		}
	}

	var cubescale=(Math.random()*-2)+1;
//	var randomValue = Math.random()* 5;
	 mesh = new THREE.Mesh( geometry, material );
	 mesh.position.x = (Math.random() *-200 )+40;
	 mesh.position.y = (Math.random() *-100 )+50;
	 mesh.scale.x=cubescale;
	 mesh.scale.y=cubescale;
	 mesh.scale.z=cubescale;
	 mesh.rotation.x = Math.random() * 2 * Math.PI;
	 mesh.rotation.y = Math.random() * 2 * Math.PI;
		//	var randomValue = Math.random()* 5;
		/*	//Randomize position and scale of the buildings
			uvs.position.x = ( Math.random() * 0.10 );
			uvs.position.z = ( Math.random() * 0.2 );
			uvs.position.y = ( Math.random() * 0.1 - 0.1 );*/
		/*	group = new THREE.Group();//definite a Group

				for ( var i = 0; i < 1000; i ++ ) {
					var mesh = new THREE.Mesh( geometry, material );
					mesh.position.x = Math.random() * 2000 - 1000;
				  mesh.position.y = Math.random() * 2000 - 1000;
					mesh.position.z = Math.random() * 2000 - 1000;
				//	mesh.rotation.x = Math.random() * 2 * Math.PI;
					//mesh.rotation.y = Math.random() * 2 * Math.PI;
				//	mesh.matrixAutoUpdate = false;

				//	mesh.updateMatrix();
					group.add( mesh );
				}*/
    scene.add( mesh );
		cubes.push(mesh);
	}

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
}

function animate() {
	requestAnimationFrame( animate );
	render();
}

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
