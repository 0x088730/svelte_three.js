export { default as PerspectiveCamera } from "./components/PerspectiveCamera.svelte"
export { default as OrthographicCamera } from "./components/OrthographicCamera.svelte"
export { default as Mesh } from "./components/Mesh.svelte"
export { default as Empty } from "./components/Empty.svelte"
export { default as Canvas } from "./components/Canvas.svelte"
export { default as DirectionalLight } from "./components/DirectionalLight.svelte"
export { default as SpotLight } from "./components/SpotLight.svelte"
export { default as RectAreaLight } from "./components/RectAreaLight.svelte"
export { default as AmbientLight } from "./components/AmbientLight.svelte"
export { default as HemisphereLight } from "./components/HemisphereLight.svelte"
export { default as PointLight } from "./components/PointLight.svelte"
export { default as Scene } from "./components/Scene.svelte"
export { default as LoadedGLTF } from "./components/LoadedGLTF.svelte"
export { default as WebGLRenderer } from "./components/WebGLRenderer.svelte"
export { default as OrbitControls } from "./components/OrbitControls.svelte"
export { default as SessionAR } from "./components/SessionAR.svelte"
export { default as SessionVR } from "./components/SessionVR.svelte"
export { default as CubeCamera } from "./components/CubeCamera.svelte"
export { default as XRHandJointIndices } from "./utils/XRHandJointIndices"
export { svelthreeStores } from "./stores.js"

/** exports all THREE modules */
export * from "svelthree-three"

/** exports all THREE modules 'Foo' overridden by Svelte components as '_Foo'
 * so users can e.g. import _Mesh from 'svelthree' and create a native THREE Mesh instance
 */
export { Mesh as _Mesh } from "svelthree-three"
export { Light as _Light } from "svelthree-three"
export { AmbientLight as _AmbientLight } from "svelthree-three"
export { HemisphereLight as _HemisphereLight } from "svelthree-three"
export { DirectionalLight as _DirectionalLight } from "svelthree-three"
export { PointLight as _PointLight } from "svelthree-three"
export { RectAreaLight as _RectAreaLight } from "svelthree-three"
export { SpotLight as _SpotLight } from "svelthree-three"
export { Camera as _Camera } from "svelthree-three"
export { PerspectiveCamera as _PerspectiveCamera } from "svelthree-three"
export { OrthographicCamera as _OrthographicCamera } from "svelthree-three"
export { CubeCamera as _CubeCamera } from "svelthree-three"
export { Scene as _Scene } from "svelthree-three"
export { OrbitControls as _OrbitControls } from "svelthree-three"
export { WebGLRenderer as _WebGLRenderer } from "svelthree-three"

// TODO  does this makes sense / Does it have any negative impact on treeshaking / bundling?
export as namespace SVELTHREE
