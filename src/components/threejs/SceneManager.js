import * as THREE from 'three'
// import SceneSubject from './SceneSubject'
import SymbolSubject from './SymbolSubject'
import BackgroundSubject from './BackgroundSubject'
import GeneralLights from './GeneralLights'
import { BloomEffect, EffectComposer, EffectPass, RenderPass } from "postprocessing"

export default (canvas, data) => {

  let yScrollPos = 0
  let elapsedTime,
    originalCameraPos

  const clock = new THREE.Clock()
  const origin = new THREE.Vector3(0, 0, 0)

  let canvasDimensions = mapCanvasDimensions()

  const mousePosition = {
    x: 0,
    y: 0,
  }

  const scene = buildScene()
  const renderer = buildRender(canvasDimensions)
  const camera = buildCamera(canvasDimensions)
  const sceneSubjects = createSceneSubjects(scene)

  updateCameraAndRendererDimensions(canvasDimensions)

  // const composer = new EffectComposer(renderer);
  // const effectPass = new EffectPass(camera, new BloomEffect());
  // effectPass.renderToScreen = true;
  //
  // composer.addPass(new RenderPass(scene, camera));
  // composer.addPass(effectPass);

  function buildScene() {
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color( 0xffffff );

    return scene
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    })
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1
    renderer.setPixelRatio(DPR)
    renderer.setSize(width, height)

    // renderer.gammaInput = true
    renderer.gammaOutput = true

    return renderer
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height
    const fieldOfView = 30
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
    camera.position.z = 100

    originalCameraPos = camera.position
    camera.lookAt(origin)

    // originalCameraPos = new THREE.Vector3(camera.position.x + 0, camera.position.y + -10, camera.position.z + 10)
    // targetCameraPos = new THREE.Vector3(originalCameraPos.x, originalCameraPos.y + -100, originalCameraPos.z + 80)

    return camera
  }

  function createSceneSubjects(scene) {
    const lights = [
      {
        distance: 600,
        color: '#ffffff', // fill light
        x: 100,
        y: -300,
        z: 10
      },
      {
        distance: 12000,
        color: '#f62680', // back light
        x: -180,
        y: -100,
        z: 150
      },
      {
        distance: 8000,
        color: '#470d86',
        x: -100,
        y: 400,
        z: -100
      },
    ]
    const sceneSubjects = [
      new GeneralLights(scene, lights),
      new SymbolSubject(scene, data),
      // new BackgroundSubject(scene, data)
    ]

    return sceneSubjects
  }

  function update() {
    elapsedTime = clock.getElapsedTime()

    for (let i = 0; i < sceneSubjects.length; i++) {
      if ('update' in sceneSubjects[i]) {
        sceneSubjects[i].update(elapsedTime)
      }
    }

    updateCameraPosition()

    renderer.render(scene, camera)
  }

  function updateCameraPosition() {
    const delta = Math.sin(elapsedTime / 1.5) * 0.15
    camera.translateY(-delta)
  }

  function onScroll(scrollTop) {
    // yScrollPos = scrollTop

    for (let i = 0; i < sceneSubjects.length; i++) {
      if ('updatePositionRelativeToScroll' in sceneSubjects[i]) {
        sceneSubjects[i].updatePositionRelativeToScroll(scrollTop || 0)
      }
    }
  }

  function mapCanvasDimensions() {
    return {
      width: canvas.width,
      height: canvas.height
    }
  }

  function updateCameraAndRendererDimensions(dimensions) {
    camera.aspect = dimensions.width / dimensions.height
    camera.updateProjectionMatrix()
    renderer.setSize(dimensions.width, dimensions.height)
  }

  function onWindowResize() {
    canvasDimensions = mapCanvasDimensions()
    updateCameraAndRendererDimensions(canvasDimensions)
  }

  // function onMouseMove(x, y) {
  //   mousePosition.x = x
  //   mousePosition.y = y
  // }

  return {
    update,
    onWindowResize,
    // onMouseMove,
    onScroll,
  }
}
