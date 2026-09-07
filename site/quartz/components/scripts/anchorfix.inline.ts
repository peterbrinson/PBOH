// Re-aim at the URL's #anchor once late-loading images have settled.
//
// Why this exists: Obsidian image embeds (`![[foo.png]]`) are emitted by
// quartz/plugins/transformers/ofm.ts with width="auto" height="auto". Those are
// not valid HTML dimension attributes, so the browser ignores them and reserves
// no space for the image before it loads. On a page with images above the target
// heading, the browser jumps to where that heading is *at load time*, then the
// images arrive, grow, and push the heading hundreds of pixels further down —
// leaving the reader short of where the link pointed.
//
// The real fix is stamping intrinsic width/height at build time. This is the
// cheap version: scroll again after the images resolve. If the reader has
// already started scrolling on their own, we leave them alone.

function reAimAtHash() {
  const hash = window.location.hash
  if (!hash) return

  const id = decodeURIComponent(hash.slice(1))
  let cancelled = false

  const cancel = () => {
    cancelled = true
    teardown()
  }

  const teardown = () => {
    window.removeEventListener("wheel", cancel)
    window.removeEventListener("touchstart", cancel)
    window.removeEventListener("keydown", cancel)
  }

  // Any deliberate scroll from the reader wins over our correction.
  window.addEventListener("wheel", cancel, { passive: true })
  window.addEventListener("touchstart", cancel, { passive: true })
  window.addEventListener("keydown", cancel)

  const reAim = () => {
    if (cancelled) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView()
  }

  const pending = Array.from(document.querySelectorAll("img")).filter((img) => !img.complete)

  if (pending.length === 0) {
    requestAnimationFrame(reAim)
  } else {
    let remaining = pending.length
    const settled = () => {
      if (--remaining <= 0) requestAnimationFrame(reAim)
    }
    for (const img of pending) {
      img.addEventListener("load", settled, { once: true })
      img.addEventListener("error", settled, { once: true })
    }
  }

  // Safety net for anything the image check missed (webfonts, embeds).
  window.addEventListener("load", () => requestAnimationFrame(reAim), { once: true })

  // Stop listening for the reader's scroll once the page has had time to settle.
  window.setTimeout(teardown, 5000)
}

// Run both ways on purpose. `nav` covers SPA navigation between pages, but on a
// cold load Quartz may dispatch it before this script has attached its listener,
// so a direct call is needed for the case that actually matters here: someone
// opening a shared link with a #anchor in it.
reAimAtHash()
document.addEventListener("nav", reAimAtHash)
