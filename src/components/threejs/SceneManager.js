import * as THREE from 'three'
import SceneSubject from './SceneSubject'
import GeneralLights from './GeneralLights'

export default canvas => {
  const clock = new THREE.Clock()
  const origin = new THREE.Vector3(0, 0, 0)

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height,
  }

  const mousePosition = {
    x: 0,
    y: 0,
  }

  var originalCameraPos
  var targetCameraPos

  const scene = buildScene()
  const renderer = buildRender(screenDimensions)
  const camera = buildCamera(screenDimensions)
  const sceneSubjects = createSceneSubjects(scene)

  function buildScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#160c13')

    return scene
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
    renderer.setPixelRatio(DPR)
    renderer.setSize(width, height)

    renderer.gammaInput = true
    renderer.gammaOutput = true

    return renderer
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height
    const fieldOfView = 60
    const nearPlane = 1
    const farPlane = 5000
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    )

    camera.position.x = 0
    camera.position.y = 700
    camera.position.z = 70

    originalCameraPos = new THREE.Vector3(camera.position.x + 0, camera.position.y + -10, camera.position.z + 10)
    targetCameraPos = new THREE.Vector3(originalCameraPos.x, originalCameraPos.y + -100, originalCameraPos.z + 80)

    return camera
  }

  function createSceneSubjects(scene) {
    const lights = [
      {
        color: '#f0eaff', // back light
        x: 20,
        y: -100,
        z: 150
      },
      {
        color: '#ffe9f0',
        x: 100,
        y: 400,
        z: -100
      },
    ]
    const sceneSubjects = [
      new GeneralLights(scene, lights),
      new SceneSubject(scene)
    ]

    return sceneSubjects
  }

  function update() {
    const alphaX = ((((mousePosition.x / window.innerWidth) * 2) + 1) * 0.5)
    const alphaY = ((((mousePosition.y / window.innerHeight) * 2) + 1) * 0.5)
    // console.log(alphaY)

    const elapsedTime = clock.getElapsedTime()

    for (let i = 0; i < sceneSubjects.length; i++) {
      sceneSubjects[i].update(elapsedTime, alphaX, alphaY)
    }

    updateCameraPositionRelativeToMouse(alphaX, alphaY)

    renderer.render(scene, camera)
  }

  function updateCameraPositionRelativeToMouse(alphaX, alphaY) {
    // console.log(camera.position.y)
    // camera.position.y += (-(mousePosition.y * 0.1) - camera.position.y * 0.01) * 0.01
    // camera.position.z += ((mousePosition.y * 0.05) - camera.position.z) * 0.01

    // console.log(mousePosition.y)
    // console.log((((mousePosition.x / window.innerWidth) * 2) + 1) * 0.5)


    var newPos = new THREE.Vector3(originalCameraPos.x, originalCameraPos.y, originalCameraPos.z)
    newPos.lerp(targetCameraPos, alphaX)

    var newY = THREE.Math.lerp(originalCameraPos.y, targetCameraPos.y, alphaY)

    camera.position.copy(new THREE.Vector3(newPos.x, newY, newPos.z))

    camera.lookAt(origin)
  }

  function onWindowResize() {
    const { width, height } = canvas

    screenDimensions.width = width
    screenDimensions.height = height

    camera.aspect = width / height
    camera.updateProjectionMatrix()

    renderer.setSize(width, height)
  }

  function onMouseMove(x, y) {
    mousePosition.x = x
    mousePosition.y = y
  }

  return {
    update,
    onWindowResize,
    onMouseMove,
  }
}
