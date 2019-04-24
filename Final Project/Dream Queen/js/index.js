(function () {
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
//adding Stars on the scene
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

    )};
}
//create the group to make the texture of stars shine and divide two groups of stars to set color,intensity and spread
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

    init();
    drawDotSystem();
    animate();
    function init() {

        var container = document.getElementById('container');
        camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 50000);
        camera.position.set(0, 300, 0);
        scene = new THREE.Scene({
            antialias: true, //开启抗锯齿
            alpha: false //开启背景透明

        });
         scene.background = new THREE.Color().setHSL(0.9, 0.1, 0.5);

         scene.add(GROUP);
         //255,255,255
          color= Math.random()*0xffffff;
      //creature the picture of background
        var  geometry1 = new THREE.BoxGeometry (1400,1,900);
        //Generate a random number from 1 to 4(according to the image files)
      	var randomSelection = Math.round(Math.random()*5)+1;//
        // Load a texture
      	var	texture = new THREE.TextureLoader().load( "texture/texture"+randomSelection+".jpg" );
      	// Create a MeshBasicMaterial with a loaded texture
      	material1 = new THREE.MeshBasicMaterial( { map: texture} );
        // Combine the geometry and material into a mesh
        mesh1 = new THREE.Mesh( geometry1, material1 );
        mesh1.position.x = 0;
        mesh1.position.y = 0;
        mesh1.position.z = 0;
        // Add the mesh to the scene
        scene.add(mesh1);

        //define the segments of the group's colors and the r of the group
        function drawPiano() {
            var segments = 10000;//lines' numbers
            var positions = [];
            var colors = [];

            var r = 1000;

            for (var i = 0; i < segments; i++) {
                var x = Math.random() * r - r / 2;
                var y = Math.random() * r - r / 2;
                var z = 3 * (Math.random() * r - r / 2);

                // positions
                positions.push(x, y, z);

                // define colors' division
                colors.push((x / r) + 0.5);
                colors.push((y / r) + 0.5);
                colors.push((z / r) + 0.5);
            }
            //The position and color of each point are processed by bufferGeometry.
            var geometry = new THREE.BufferGeometry();
          //  var material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
            geometry.addAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.addAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            geometry.computeBoundingSphere();
          //  mesh = new THREE.Line(geometry, material);
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

        //define each group's positions,scales
         for (let i = 0; i < 7; i++) {
               group[i] = drawPiano();
               group[i].scale.set(0.05, 0.05, 0.05);
                //group[i].rotation.x = 0;
               // group[i].lookAt(camera.position);
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

        // LIGHTS
        hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
        hemiLight.color.setHSL(0.6, 1, 0.6);
        hemiLight.groundColor.setHSL(0.095, 1, 0.75);
        hemiLight.position.set(0, 0, 0);
        scene.add(hemiLight);

        //
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


        // RENDERER
        renderer = new THREE.WebGLRenderer({ antialias: true ,alpha: true});
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.shadowMap.enabled = true;


        //controller
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        // inertance
        controls.enableDamping = true;
        //mouse sensitivity
        controls.dampingFactor = 1;
        //缩放
        controls.enableZoom = true;
        //是旋转
        controls.autoRotate = false;
        //拖拽
        controls.enablePan = false;

        // STATS
        // stats = new Stats();
        // container.appendChild(stats.dom);
        window.addEventListener('resize', onWindowResize, false);
        window.addEventListener("mousedown", onDocumentMouseDown, false);
        window.addEventListener("mouseup", onDocumentMouseUp, false);

        //Set preset values for controllers
        var controller = new function(){
            this.boxColor= color;
            this.boxOpacity = 1;
        }
            //Create a new DAT.GUI
             var gui = new dat.GUI();

             gui.addColor( controller, 'boxColor', color ).onChange( function() {
              mesh1.material.color.setHex( dec2hex(controller.boxColor) );
            });
             gui.add( controller, 'boxOpacity', 0, 3 ).onChange( function() {
              material1.opacity = (controller.boxOpacity);
            });
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
        // stats.update();
    }
    //取到物体的div以及修改位置
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

    //jutisfy the click of the mouse
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

                // console.log(selectedObject);
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
    //judge the coordinate of objects when the mouse click on the window
    function getIntersects(x, y) {
        x = (x / window.innerWidth) * 2 - 1;
        y = - (y / window.innerHeight) * 2 + 1;
        mouseVector.set(x, y, 0.5);
        raycaster.setFromCamera(mouseVector, camera);
        return raycaster.intersectObject(GROUP, true);
    }
    // 三维转二维
    function transform(pMesh) {
        //获取到窗口的一半高度和一半宽度
        let halfWidth = window.innerWidth / 2;
        let halfHeight = window.innerHeight / 2;
        let vector = pMesh.position.clone().project(camera);
        var obj = { x: (vector.x * halfWidth + halfWidth-10), y: -vector.y * halfHeight + halfHeight }
        return obj
    }

    // add music and put button into the scene to control music-off
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

    //Color converter
    function dec2hex(i) {
      var result = "0x000000";
      if (i >= 0 && i <= 15) { result = "0x00000" + i.toString(16); }
      else if (i >= 16 && i <= 255) { result = "0x0000" + i.toString(16); }
      else if (i >= 256 && i <= 4095) { result = "0x000" + i.toString(16); }
      else if (i >= 4096 && i <= 65535) { result = "0x00" + i.toString(16); }
      else if (i >= 65535 && i <= 1048575) { result = "0x0" + i.toString(16); }
      else if (i >= 1048575 ) { result = '0x' + i.toString(16); }
      if (result.length == 8){return result;}
    }

})();
