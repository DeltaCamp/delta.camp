import SceneManager from './SceneManager'

export default (canvas, data) => {
  let sceneManager, requestAnimationFrameId

  function init() {
    return new Promise((resolve, reject) => {
      try {
        sceneManager = new SceneManager(canvas, data)
        render()
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  function render() {
    requestAnimationFrameId = requestAnimationFrame(render)
    if (sceneManager) {
      sceneManager.update()
    }
  }

  return {
    destroy: function () {
      if (requestAnimationFrameId) {
        cancelAnimationFrame(requestAnimationFrameId)
      }
      sceneManager = null
    },
    onResize: function () {
      if (sceneManager) {
        sceneManager.onWindowResize()
      }
    },
    onScroll: function (scrollTop) {
      if (sceneManager) {
        sceneManager.onScroll(scrollTop)
      }
    },
    init
  }
}
