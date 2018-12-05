import SceneManager from './SceneManager'

export default (container, data) => {
  const canvas = createCanvas(document, container)

  let sceneManager = new SceneManager(canvas, data)
  let canvasHalfWidth
  let canvasHalfHeight
  let requestAnimationFrameId

  bindEventListeners()
  resizeCanvas()
  render()

  function createCanvas(document, container) {
    const canvas = document.createElement('canvas')
    container.appendChild(canvas)
    return canvas
  }

  function bindEventListeners() {
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', mouseMove)
  }

  function unbindEventListeners() {
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('mousemove', mouseMove)
  }

  function resizeCanvas() {
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    canvasHalfWidth = Math.round(canvas.offsetWidth / 2)
    canvasHalfHeight = Math.round(canvas.offsetHeight / 2)

    sceneManager.onWindowResize()
  }

  function mouseMove({ screenX, screenY }) {
    sceneManager.onMouseMove(
      screenX - canvasHalfWidth,
      screenY - canvasHalfHeight
    )
  }

  function render(time) {
    requestAnimationFrameId = requestAnimationFrame(render)
    sceneManager.update()
  }

  return {
    destroy: function () {
      cancelAnimationFrame(requestAnimationFrameId)
      unbindEventListeners()
      sceneManager = null
    }
  }
}
