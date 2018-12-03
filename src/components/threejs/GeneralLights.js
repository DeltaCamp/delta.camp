import * as THREE from 'three'

export default scene => {
  const lightIn = new THREE.PointLight('#c129c0', 2)
  const lightOut = new THREE.PointLight('#21067a', 2)

  lightIn.position.set(0, 49, 2)
  lightOut.position.set(40, 20, 40)

  scene.add(lightIn)
  scene.add(lightOut)

  const rad = 90

  function update(time) {
    const x = rad * Math.sin(time * 0.05)

    lightIn.position.x = x
    lightOut.position.y = x
  }

  return {
    update,
  }
}
