import SceneManager from './SceneManager'

export default (canvas, data, initialWidth, initialHeight) => {
  let sceneManager = new SceneManager(canvas, data)
  let canvasHalfWidth
  let canvasHalfHeight
  let requestAnimationFrameId

  bindEventListeners()
  resizeCanvas(initialWidth, initialHeight)
  render()

  function bindEventListeners() {
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('scroll', scroll)
  }

  function unbindEventListeners() {
    window.removeEventListener('resize', onResize)
    window.removeEventListener('mousemove', mouseMove)
    window.removeEventListener('scroll', scroll)
  }

  function onResize() {
    resizeCanvas()
  }

  function resizeCanvas(width, height) {
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    width = width || canvas.offsetWidth
    height = height || canvas.offsetHeight

    canvas.width = width
    canvas.height = height

    canvasHalfWidth = Math.round(width / 2)
    canvasHalfHeight = Math.round(height / 2)

    sceneManager.onWindowResize()
  }

  function scroll() {
    sceneManager.onScroll(
      window.scrollY
    )
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
