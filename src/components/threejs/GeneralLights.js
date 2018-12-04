import * as THREE from 'three'

export default (scene, lights) => {
  let createdLights = []
  // const lightIn = new THREE.PointLight(, 1, 0, 2)
  // const lightOut = new THREE.PointLight(, 1, 0, 2)
  //
  // lightIn.position.set()
  // lightOut.position.set(400, -500, 400)

  const intensity = 1
  const distance = 1200
  const falloff = 2

  for (let i = 0; i < lights.length; i++) {
    const light = new THREE.PointLight(lights[i].color, intensity, distance, falloff)

    light.position.set(lights[i].x, lights[i].y, lights[i].z)

    scene.add(light)

    createdLights.push(light)




      // DEBUG
      var material = new THREE.LineBasicMaterial( { color: lights[i].color } );
      var geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(lights[i].x, lights[i].y, lights[i].z) );
      geometry.vertices.push(new THREE.Vector3(lights[i].x + 5, lights[i].y + 5, lights[i].z + 5) );
      geometry.vertices.push(new THREE.Vector3(lights[i].x - 5, lights[i].y - 5, lights[i].z - 5) );
      var line = new THREE.Line( geometry, material );
      // scene.add( line );
  }
  //
  // scene.add(lightIn)
  // scene.add(lightOut)

  const rad = 50
  const speed = 2

  function update(time, alphaX, alphaY) {
    const x = rad * Math.sin(time * 0.05) * speed
    console.log(x)

    // for (let i = 0; i < createdLights.length; i++) {
      createdLights[0].position.x = x
      createdLights[0].position.y = x
      createdLights[0].position.z = x
    // }

    // lightIn.position.x = x
    // lightOut.position.y = x
  }

  return {
    update,
  }
}
