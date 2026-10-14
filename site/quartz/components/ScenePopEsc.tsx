import { QuartzComponent, QuartzComponentConstructor } from "./types"
import script from "./scripts/scenePopEsc.inline"

// Renders nothing. Carries the script that lets Esc close an expanded
// scene-reference thumbnail (.scene-pop) — see scripts/scenePopEsc.inline.ts.
const ScenePopEsc: QuartzComponent = () => null

ScenePopEsc.afterDOMLoaded = script

export default (() => ScenePopEsc) satisfies QuartzComponentConstructor