import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Deadly Mistfits",
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
        header: "Cinzel",
        body: "Crimson Text",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9ff",
          lightgray: "#e6e3f0",
          gray: "#a69db8",
          darkgray: "#4a3d5c",
          dark: "#2d1b3d",
          secondary: "#8a2be2",
          tertiary: "#6a1b9a",
          highlight: "rgba(138, 43, 226, 0.12)",
          textHighlight: "#8a2be240",
        },
        darkMode: {
          light: "#1a0d26",
          lightgray: "#2e1a3d",
          gray: "#5c4a70",
          darkgray: "#b8a6d1",
          dark: "#e8d5f2",
          secondary: "#ff6ec7",
          tertiary: "#c77dff",
          highlight: "rgba(255, 110, 199, 0.15)",
          textHighlight: "#ff6ec730",
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
