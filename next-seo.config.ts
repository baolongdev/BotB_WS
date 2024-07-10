import { DefaultSeoProps } from "next-seo";

const description = ""
const urlBase = ""
const title = "VL+xBOTB"
// See https://www.npmjs.com/package/next-seo for more options
const config: DefaultSeoProps = {
    // Page Title
    titleTemplate: "%s | WORKSHOP ARDUINO: BẮT MẠCH",
    title,
    defaultTitle: "WORKSHOP ARDUINO: BẮT MẠCH ",
    canonical: `${urlBase}`,
    description,
    // Meta Tags


    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: `${urlBase}`,
        title: 'WORKSHOP ARDUINO: BẮT MẠCH',
        description,
        profile: {
            firstName: 'Le',
            lastName: 'Blong',
            username: 'Blong12',
            gender: 'male',
        },
        images: [{
            url: `${urlBase}/favicon/img/banner1.jpg`,
            width: 1200,
            height: 787,
            alt: 'Og Image Alt',
        }]
    },
    twitter: {
        site: '@__BLong12__',
        cardType: 'summary_large_image',
    },
    additionalLinkTags: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/img/BotB_Logo.jpg',
            sizes: '32x32'
        },
        {
            rel: 'icon',
            type: 'image/png',
            href: '/img/BotB_Logo.jpg',
            sizes: '16x16'
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/img/BotB_Logo.jpg"
        },
        {
            rel: "shortcut icon",
            type: "image/png",
            href: "/img/BotB_Logo.jpg"
        },
        {
            rel: "manifest",
            href: "/favicon/site.webmanifest"
        }
    ]
};

export default config;