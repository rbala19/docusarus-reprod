// @owner Foundations

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const fs = require("fs");
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");

const createTypeDocPlugin = ({
  directory,
  categoryLabel,
  entryPoints,
  additionalOptions = {},
  tsconfig = `../tsconfig.json`,
}) => {
  return [
    "docusaurus-plugin-typedoc",
    {
      // TypeDoc options.
      tsconfig: tsconfig,
      excludeExternals: true,
      skipErrorChecking: true,
      readme: "none",
      entryPoints,
      entryPointStrategy: "expand",
      logLevel: "Verbose",
      ...additionalOptions,

      // Plugin options.
      id: `typedoc-${directory}`,
      out: `code/${directory}`,
      sidebar: {
        categoryLabel,
      },
    },
  ];
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation",
  tagline: "Making work happier",
  url: "https://fake-url.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon16.png",
  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang.
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Serve the docs at the site's root
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    // TypeDoc.

    createTypeDocPlugin({
      directory: "@frontapp/example",
      categoryLabel: "@frontapp/example",
      entryPoints: ["../libs/examples/basic/src"],
      additionalOptions: {},
      tsconfig: "../libs/examples/basic/tsconfig.json",
    }),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Doc",
          src: "img/front-logo.png",
        },
        items: [
          {
            href: "https://fake-url.com",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "typescript",
      },
    }),

  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-openapi-docs",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        docsDir: "docs",
      },
    ],
  ],
};

module.exports = config;
