import * as THREE from 'three'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()

export default (scene, data) => {

  let createdSubject,
    originalSymbolPos,
    targetSymbolPos,
    newY

  loader.load(data.deltaCamp3DSymbol.publicURL, function (symbolObject3d) {
    symbolObject3d.scale.set(21, 21, 21)

    symbolObject3d.rotation.x = 1.8
    symbolObject3d.rotation.y = 0.5
    symbolObject3d.rotation.z = 3.13

    symbolObject3d.position.copy(new THREE.Vector3(200, 0, 0))

    originalSymbolPos = symbolObject3d.position


    targetSymbolPos = new THREE.Vector3(
      originalSymbolPos.x + 20, // offsets
      originalSymbolPos.y - 200,
      originalSymbolPos.z - 40
    )

    createdSubject = symbolObject3d

    scene.add(symbolObject3d)
  })

  function updatePositionRelativeToScroll(yScrollPos) {
    if (createdSubject) {
      newY = THREE.Math.lerp(originalSymbolPos.y, targetSymbolPos.y, yScrollPos * 0.001)
      createdSubject.position.copy(new THREE.Vector3(originalSymbolPos.x, originalSymbolPos.y, newY * 2))
    }
  }

  function update(time) {
    if (createdSubject) {
      const delta = Math.cos(time / 3) * 0.4
      createdSubject.rotateOnAxis(new THREE.Vector3(0, 1, 0), -(delta) * 0.01)
    }
  }

  return {
    update,
    updatePositionRelativeToScroll
  }
}
