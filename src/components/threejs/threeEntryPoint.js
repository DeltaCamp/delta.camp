import SceneManager from './SceneManager'

export default (canvas, data) => {
  let sceneManager,
    requestAnimationFrameId

  function init() {
    return new Promise((resolve, reject) => {
      try {
        sceneManager = new SceneManager(canvas, data)
        sceneManager.render()
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  return {
    destroy: function () {
      sceneManager.destroy()
      sceneManager = null
    },
    onResize: function (onCanvasResize) {
      if (sceneManager) {
        sceneManager.onCanvasResize(onCanvasResize)
      }
    },
    onScroll: function (scrollTop) {
      if (sceneManager) {
        sceneManager.onScroll(scrollTop)
      }
    },
    init,
    getDevicePixelRatio: function () {

    }
  }
}
