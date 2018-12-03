import * as THREE from 'three'
// import alphaTexture from '../../../../assets/textures/stripes_gradient.jpg'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()
// var scene = new THREE.Scene()

export default scene => {
  const group = new THREE.Group()

  loader.load('/DeltaCamp-logo-3d.fbx', function (object3d) {
    object3d.scale.set(4, 4, 4)
    //
    const subjectMaterial = new THREE.MeshStandardMaterial({
      color: '#fff',
      transparent: true,
      side: THREE.DoubleSide,
      // alphaTest: 2,
    })

    // subjectMaterial.alphaMap.magFilter = THREE.NearestFilter
    // subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping
    // subjectMaterial.alphaMap.repeat.y = 1

    object3d.material = subjectMaterial

    object3d.rotation.z = 0
    object3d.rotation.y = 0
    object3d.rotation.x = .8

    object3d.position.z = 0
    object3d.position.y = 10
    object3d.position.x = .8

    group.add(object3d)
    scene.add(object3d)
  })

  // // subjectMaterial.alphaMap = new THREE.TextureLoader().load(alphaTexture)

  // const subjectMesh = new THREE.Mesh(subjectGeometry, subjectMaterial)
  //
  // const subjectWireframe = new THREE.LineSegments(
  //   new THREE.EdgesGeometry(subjectGeometry),
  //   new THREE.LineBasicMaterial()
  // )
  //
  // group.add(subjectMesh)
  // group.add(subjectWireframe)
  // scene.add(group)
  //
  // group.rotation.z = Math.PI / 4


  const speed = 20
  // const speed = 0.02
  // const textureOffsetSpeed = 0.02

  function update(time) {
    const angle = time * speed

    group.rotation.x = angle

    // subjectMaterial.alphaMap.offset.y = 0.55 + time * textureOffsetSpeed

    // subjectWireframe.material.color.setHSL(Math.sin(angle * 2), 0.5, 0.5)

    // const scale = (Math.sin(angle * 8) + 6.4) / 5
    // subjectWireframe.scale.set(scale, scale, scale)
  }

  return {
    update,
  }
}
