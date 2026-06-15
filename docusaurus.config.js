// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ogen',
    tagline: 'OpenAPI v3 code generator for Go',
    url: 'https://ogen.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    future: {
        v4: true,
    },
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'throw',
        },
    },
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'algolia-site-verification',
                content: 'F1C0F77133870978',
            },
        },
    ],
    favicon: 'img/favicon.ico',
    organizationName: 'ogen-go',
    projectName: 'ogen',

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/ogen-go/web/edit/main/',
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                gtag: {
                    trackingID: 'G-HWPX87415Z',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'ogen',
                logo: {
                    alt: 'ogen logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs'
                    },
                    {
                        "href": "https://pkg.go.dev/github.com/ogen-go/ogen?tab=doc",
                        "label": "GoDoc",
                        "position": "left",
                    },
                    { to: '/blog', label: 'Blog', position: 'left' },
                    {
                        href: 'https://t.me/ogen_dev',
                        label: 'Telegram',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/ogen-go/ogen',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                            {
                                "href": "https://pkg.go.dev/github.com/ogen-go/ogen?tab=doc",
                                "label": "GoDoc",
                                "position": "left",
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Telegram',
                                href: 'https://t.me/ogen_dev',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/ogen-go/ogen',
                            },
                        ],
                    }
                ]
            },
            colorMode: {
                defaultMode: 'dark',
                respectPrefersColorScheme: true,
            },
            prism: {
                theme: themes.github,
                darkTheme: themes.dracula,
            },
            // Algolia DocSearch. The apiKey is the public, search-only key — it is
            // safe to commit. Values can be overridden via environment variables.
            algolia: {
                appId: process.env.ALGOLIA_APP_ID || 'X2N6LG2Z0C',
                apiKey: process.env.ALGOLIA_API_KEY || '7211a1ddff7c214708ba57a83ddb74bd',
                indexName: process.env.ALGOLIA_INDEX_NAME || 'ogen',
                contextualSearch: true,
            },
        }),
};

module.exports = config;
