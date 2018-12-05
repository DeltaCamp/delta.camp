import * as THREE from 'three'

var FBXLoader = require('three-fbx-loader')
var loader = new FBXLoader()

export default (scene, data) => {

  loader.load(data.deltaCamp3DLightbox.publicURL, function (lightboxObject3d) {
    // var meshes = lightboxObject3d.children

    // for (let i = 0; i < meshes.length; i++){
    //   let child = meshes[i]
    //
    //   if ( child instanceof THREE.Mesh ) {
    //     child.material = material
    //   }
    // }

    lightboxObject3d.scale.set(7, 7, 7)

    lightboxObject3d.position.x = 0
    lightboxObject3d.position.y = 740
    lightboxObject3d.position.z = 400

    lightboxObject3d.rotation.x = 1.8
    lightboxObject3d.rotation.y = 0
    lightboxObject3d.rotation.z = 3.13

    // lightboxObject3d.castShadow = true
    // lightboxObject3d.receiveShadow = true

    // group.add(lightboxObject3d)
    // createdSubjects.push(lightboxObject3d)
  })

  return {
    // update
  }
}
