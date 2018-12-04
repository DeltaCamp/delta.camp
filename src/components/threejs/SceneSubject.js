import * as THREE from 'three'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()

export default (scene, data) => {

  let createdSubjects = []

  const speed = 20
  const group = new THREE.Group()

  loader.load(data.deltaCamp3DLightbox.publicURL, function (lightboxObject3d) {
    lightboxObject3d.scale.set(7, 7, 7)

    lightboxObject3d.rotation.x = 1.8
    lightboxObject3d.rotation.y = 0
    lightboxObject3d.rotation.z = 3.13

    lightboxObject3d.position.x = 10
    lightboxObject3d.position.y = 240
    lightboxObject3d.position.z = 0

    group.add(lightboxObject3d)
    createdSubjects.push(lightboxObject3d)
  })

  loader.load(data.deltaCamp3DSymbol.publicURL, function (symbolObject3d) {
    symbolObject3d.scale.set(7, 7, 7)

    symbolObject3d.rotation.x = 1.8
    symbolObject3d.rotation.y = 0
    symbolObject3d.rotation.z = 3.13

    symbolObject3d.position.x = 10
    symbolObject3d.position.y = 240
    symbolObject3d.position.z = 0

    group.add(symbolObject3d)
    createdSubjects.push(symbolObject3d)
  })

  scene.add(group)

  function update(time, alphaX, alphaY) {
    const angle = time * 0.02
    const scale = (Math.sin(angle * 20)) + 7
    // console.log(scale)

    // hard-coded animation specifically for logo, clean up the scene subject loading
    // so it's abstracted properly and makes sense
    if (createdSubjects[1]) {
      createdSubjects[1].scale.set(scale, scale, scale)
    }
  }

  return {
    update
  }
}
