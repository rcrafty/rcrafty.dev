import { GLTFLoader } from "https://deno.land/x/threejs_4_deno@v121/examples/jsm/loaders/GLTFLoader.js";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadown: true },
) {
  const { receiveShadow, castShadown } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dog";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadown = castShadown;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadown = castShadown;
            child.receiveShadow = receiveShadow;
          }
        });

        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      },
    );
  });
}
