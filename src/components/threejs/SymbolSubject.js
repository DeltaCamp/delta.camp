import * as THREE from 'three'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()

export default (scene, data) => {

  const UP = new THREE.Vector3(0, 1, 0)

  let createdSubject,
    originalSymbolPos,
    targetSymbolPos,
    newY

  loader.load(data.deltaCamp3DSymbol.publicURL, function (symbolObject3d) {
    symbolObject3d.scale.set(10, 10, 10)

    symbolObject3d.rotation.x = 1.8
    symbolObject3d.rotation.y = 0.5
    symbolObject3d.rotation.z = 3.13

    symbolObject3d.position.copy(new THREE.Vector3(0, 0, 0))

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
      newY = THREE.Math.lerp(originalSymbolPos.y, targetSymbolPos.y, yScrollPos * 0.00115)
      createdSubject.position.copy(new THREE.Vector3(originalSymbolPos.x, originalSymbolPos.y, newY * 2))
    }
  }

  function update(time) {
    if (createdSubject) {
      const delta = Math.cos(time / 3) * 0.4
      createdSubject.rotateOnAxis(
        UP,
        -(delta) * 0.005
      )
    }
  }

  return {
    update,
    updatePositionRelativeToScroll
  }
}
