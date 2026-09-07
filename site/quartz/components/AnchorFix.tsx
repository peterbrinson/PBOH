import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/anchorfix.inline"

// Renders nothing. Exists only to ship scripts/anchorfix.inline.ts, which
// re-scrolls to the URL's #anchor after late-loading images change the layout.
// Registered in quartz.layout.ts under `afterBody` so no core Quartz file is
// touched — a v4 -> v5 upgrade needs this re-registered, not re-written.
const AnchorFix: QuartzComponent = () => null

AnchorFix.afterDOMLoaded = script

export default (() => AnchorFix) satisfies QuartzComponentConstructor
