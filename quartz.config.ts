import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Deadly Misfits",
    pageTitleSuffix: " - Chronicles of Drakkenheim",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Modern Antiqua",
        body: "Crimson Text",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f8f6fb",
          lightgray: "#e0dce6",
          gray: "#9088a0",
          darkgray: "#4a3d5c",
          dark: "#2d1b3d",
          secondary: "#5a2d5a",
          tertiary: "#3d1a3d",
          highlight: "rgba(90, 45, 90, 0.12)",
          textHighlight: "#5a2d5a40",
        },
        darkMode: {
          light: "#0f0a15",
          lightgray: "#1a1020",
          gray: "#3d2e47",
          darkgray: "#8a7a9a",
          dark: "#c5b8d1",
          secondary: "#6b4c75",
          tertiary: "#4a2d5a",
          highlight: "rgba(107, 76, 117, 0.15)",
          textHighlight: "#6b4c7530",
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
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
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
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
