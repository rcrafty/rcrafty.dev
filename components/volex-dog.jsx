import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import * as THREE from "three";
import { OrbitControls } from "https://deno.land/x/threejs_4_deno@v121/examples/jsm/controls/OrbitControls.js";
import { loadGLTFModel } from "../lib/model";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}
const VoxelDog = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState();

  return (
    <div ref={refContainer} className="">
      {loading && (
        <div>
          {/*Spinner*/}
        </div>
      )}
    </div>
  );
};
export default VoxelDog;
