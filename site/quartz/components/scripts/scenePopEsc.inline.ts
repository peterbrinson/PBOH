// Esc closes any open scene-reference pop-up (<details class="scene-pop">).
// The pop-up itself is CSS-only (custom.scss); clicking it already closes it.
// One document-level listener, guarded so SPA navigation can't add a second.
if (!(window as any).__scenePopEsc) {
  ;(window as any).__scenePopEsc = true
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return
    document
      .querySelectorAll<HTMLDetailsElement>("details.scene-pop[open]")
      .forEach((d) => (d.open = false))
  })
}