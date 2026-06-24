import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "",
      sortFn: (a, b) => {
        // Pin the GET Started doorway to the very top of the nav, above the other folders.
        if (a.displayName === "GET Started") return -1
        if (b.displayName === "GET Started") return 1
        // Otherwise keep Quartz's default: folders first, then files, each alphabetical.
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        return !a.isFolder && b.isFolder ? 1 : -1
      },
      mapFn: (node) => {
        // Sidebar shows the plain folder name; each folder's index page keeps
        // its own longer title (e.g. "Situated Player Roles", "Small Worlds: ...").
        if (node.slugSegment === "Storytelling") {
          node.displayName = "Storytelling"
        }
        if (node.slugSegment === "Worldbuilding") {
          node.displayName = "Worldbuilding"
        }
        // The folder is named "_References" (leading underscore sorts it first);
        // show it in the sidebar without the underscore.
        if (node.slugSegment === "_References") {
          node.displayName = "References"
        }
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      title: "",
      sortFn: (a, b) => {
        // Pin the GET Started doorway to the very top of the nav, above the other folders.
        if (a.displayName === "GET Started") return -1
        if (b.displayName === "GET Started") return 1
        // Otherwise keep Quartz's default: folders first, then files, each alphabetical.
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        return !a.isFolder && b.isFolder ? 1 : -1
      },
      mapFn: (node) => {
        // Sidebar shows the plain folder name; each folder's index page keeps
        // its own longer title (e.g. "Situated Player Roles", "Small Worlds: ...").
        if (node.slugSegment === "Storytelling") {
          node.displayName = "Storytelling"
        }
        if (node.slugSegment === "Worldbuilding") {
          node.displayName = "Worldbuilding"
        }
        // The folder is named "_References" (leading underscore sorts it first);
        // show it in the sidebar without the underscore.
        if (node.slugSegment === "_References") {
          node.displayName = "References"
        }
      },
    }),
  ],
  right: [],
}
