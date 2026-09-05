import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "PBOH",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "peterbrinson.github.io/PBOH",
    ignorePatterns: ["private", "templates", ".obsidian", "**/raw/**", "**/CLAUDE.md", "**/GEMINI.md", "**/DEEPSEEK.md", "**/AGENTS.md", "CTIN 389/**"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Atkinson Hyperlegible",
        code: "IBM Plex Mono",
      },
      colors: {
        // PBOH is DARK ONLY. Three things enforce it together, and they have
        // to stay together:
        //   1. both palettes below carry the same dark values,
        //   2. `saved-theme="dark"` is hardcoded on <html> in
        //      quartz/components/renderPage.tsx,
        //   3. the Darkmode toggle is removed from quartz.layout.ts.
        // Quartz's theme.ts emits BOTH a `:root` block (fed by lightMode) and
        // a `:root[saved-theme="dark"]` block (fed by darkMode), so leaving
        // lightMode light would let any page that misses the attribute render
        // half-light. Keeping them identical makes that impossible.
        // To recolor the site, edit both blocks.
        lightMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", openLinksInNewTab: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [
      Plugin.RemoveDrafts(),
      // Honor the vault's `publish: false` convention: drop any note
      // whose frontmatter explicitly sets publish to false. This keeps
      // instructor/planning files private without a maintained exclude list.
      {
        name: "RespectPublishFalse",
        shouldPublish(_ctx, [_tree, vfile]) {
          return vfile.data?.frontmatter?.publish !== false
        },
      },
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled: it fetches fonts remotely to render social
      // preview images, which slows the build and fails offline. Re-enable
      // later if you want link-preview thumbnails.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
