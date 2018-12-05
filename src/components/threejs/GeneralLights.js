import * as THREE from 'three'

export default (scene, lights) => {
  let createdLights = []

  const intensity = 1
  // const distance = 1200
  const falloff = 2

  for (let i = 0; i < lights.length; i++) {
    const light = new THREE.PointLight(lights[i].color, intensity, 0, falloff)

    light.position.set(lights[i].x, lights[i].y, lights[i].z)

    light.distance = lights[i].distance

    scene.add(light)

    createdLights.push(light)
  }

  const rad = 50
  const speed = 2

  // function update(time, alphaX, alphaY) {
    // const x = rad * Math.sin(time * 0.05) * speed

    // for (let i = 0; i < createdLights.length; i++) {
      // createdLights[0].position.x = x
      // createdLights[0].position.y = x
      // createdLights[0].position.z = x
    // }
  // }

  return {
    // update
  }
}
