import * as THREE from 'three'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()

export default (scene, data) => {

  const UP = new THREE.Vector3(0, 1, 0)

  let createdSubject,
    originalSymbolPos,
    targetSymbolPos,
    newZ

  loader.load(data.deltaCamp3DSymbol.publicURL, function (symbolObject3d) {
    symbolObject3d.scale.set(10, 10, 10)

    symbolObject3d.rotation.x = 1.8
    symbolObject3d.rotation.y = 0.5
    symbolObject3d.rotation.z = 3.13

    originalSymbolPos = new THREE.Vector3(-25, 0, 20)
    symbolObject3d.position.copy(originalSymbolPos)

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
      newZ = THREE.Math.lerp(originalSymbolPos.z, targetSymbolPos.z, yScrollPos * 0.01)
      const newCoords = new THREE.Vector3(originalSymbolPos.x, originalSymbolPos.y, newZ)
      createdSubject.position.copy(newCoords)
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
