// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'ogen',
    tagline: 'OpenAPI v3 code generator for Go',
    url: 'https://ogen.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'ogen-go', // Usually your GitHub org/user name.
    projectName: 'ogen', // Usually your repo name.

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
                // blog: {
                //   showReadingTime: true,
                //   // Please change this to your repo.
                //   editUrl:
                //     'https://github.com/ogen-go/ogen/edit/main/_docs_v2/blog/',
                // },
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
            algolia: {
                apiKey: "4c0a73a85956a3545b16e0160995697d",
                appId: "X2N6LG2Z0C",
                indexName: "ogen",
            },
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
                    // {to: '/blog', label: 'Blog', position: 'left'},
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
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;