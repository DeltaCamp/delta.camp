import * as THREE from 'three'
// import alphaTexture from '../../../../assets/textures/stripes_gradient.jpg'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()
// var scene = new THREE.Scene()

export default scene => {
  const group = new THREE.Group()
  // var obj

  loader.load('/DeltaCamp-logo-3d.fbx', function (object3d) {
    object3d.scale.set(7, 7, 7)

    // const subjectMaterial = new THREE.MeshStandardMaterial({
    //   color: '#fff',
    //   transparent: true,
    //   side: THREE.DoubleSide,
    //   alphaTest: 2,
    // })

    // subjectMaterial.alphaMap.magFilter = THREE.NearestFilter
    // subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping
    // subjectMaterial.alphaMap.repeat.y = 1

    // object3d.material = subjectMaterial

    object3d.rotation.x = 1.8
    object3d.rotation.y = 0
    object3d.rotation.z = 3.13

    object3d.position.x = 10
    object3d.position.y = 240
    object3d.position.z = 0

    // obj = object3d

    group.add(object3d)
    scene.add(object3d)
  })

  // var subjectGeometry = new THREE.IcosahedronGeometry(390, 5);

  // // subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture)

  // const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial)
  //
  // var geometry = new THREE.CylinderGeometry( 10, 10, 0.1, 64 );
  // const subjectWireframe = new THREE.LineSegments(
  //   new THREE.EdgesGeometry(geometry),
  //   new THREE.LineBasicMaterial()
  // )
  //
  // group.add(subjectMesh)
  // group.add(subjectWireframe)
  // scene.add(group)
  //
  // group.rotation.z = Math.PI / 5


  const speed = 20
  // const speed = 0.02
  // const textureOffsetSpeed = 0.02

  function update(time, alphaX, alphaY) {
    const angle = time * speed

    // console.log(angle)

    // group.rotation.x = angle
    // group.rotation.y = angle
    // group.rotation.z = angle

    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed
    // obj.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5)

    // const scale = (Math.sin(angle * 8) + 6.4) / 5
    // subjectWireframe.scale.set(scale, scale, scale)
  }



  // var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
  // var geometry = new THREE.Geometry();
  // geometry.vertices.push(new THREE.Vector3( -10, 0, 0) );
  // geometry.vertices.push(new THREE.Vector3( 0, 10, 0) );
  // geometry.vertices.push(new THREE.Vector3( 10, 0, 0) );
  // var line = new THREE.Line( geometry, material );
  // scene.add( line );



  // lightOut.position.set(40, -50, 40)


  return {
    update,
  }
}
