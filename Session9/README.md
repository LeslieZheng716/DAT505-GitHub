# DAT505-GitHub
### Description
Session9 includes two documents :Examples & Test;

* Examples:Teacher's Examples of adding sound and vibration.

* Testonclass: S9-02-objLoader-Raycasting--RaycastAudio ———— testonclass _adding the sound on my homework of session8.
### Usage
```html
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
```

Find intersections.Creates a ray projector object and returns the object selected by the ray
```javascript
raycaster.setFromCamera( mouse, camera );
var intersects = raycaster.intersectObjects( objects, true );

if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( Math.random()*0xfff000 );

    audioLoader.load( 'audio/ping_pong.mp3', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( false );
      sound.setVolume( 0.5 );
      sound.play();
    });
  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
```
