// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  features: {
    inlineStyles: true
  },

  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },
  app: {
    head: {
      title: "Favour Chibueze | Frontend Engineer",
      meta: [
        { name: "description", content: "Favour Chibueze is a skilled frontend engineer specializing in building modern, responsive, and accessible web applications. Based in Munich, Germany with 5+ years of experience in Vue.js, Nuxt, and open source contributions." },
        { name: "author", content: "Favour Chibueze" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content: "frontend developer, Vue.js, Nuxt, React, frontend engineer, web developer, portfolio, software engineer, frontend entwickler münchen, accessibility developer, frontend engineer, Bavaria, Germany web developer, SEO Manager, Munich developer, open source contributor, Mautic, Eden Life, technical writer"
        },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
        { name: "googlebot", content: "index, follow" },
        { name: "theme-color", content: "#000000" },
        { name: "color-scheme", content: "light dark" },
        
        // Open Graph
        { property: "og:title", content: "Favour Chibueze | Frontend Engineer" },
        { property: "og:description", content: "Favour Chibueze is a skilled frontend engineer specializing in building modern, accessible web applications. Based in Munich, Germany." },
        { property: "og:image", content: "https://favourchibueze.com/favour-chibueze.jpg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Favour Chibueze - Frontend Engineer" },
        { property: "og:url", content: "https://favourchibueze.com" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Favour Chibueze Portfolio" },
        { property: "og:locale", content: "en_US" },
        
        // Twitter Card
        { property: "twitter:title", content: "Favour Chibueze | Frontend Engineer" },
        { property: "twitter:description", content: "Modern frontend engineer building accessible web experiences. Based in Munich, Germany." },
        { property: "twitter:image", content: "https://favourchibueze.com/favour-chibueze.jpg" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:site", content: "@FavourChi__" },
        { property: "twitter:creator", content: "@FavourChi__" },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: "canonical", href: "https://favourchibueze.com" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "manifest", href: "/manifest.json" }
      ],
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Favour Chibueze",
            "jobTitle": "Frontend Engineer",
            "url": "https://favourchibueze.com",
            "image": "https://favourchibueze.com/favour-chibueze.jpg",
            "description": "Frontend Engineer specializing in modern web applications",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Munich",
              "addressCountry": "Germany"
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Eden Life",
              "url": "https://ouredenlife.com/"
            },
            "alumniOf": {
              "@type": "Organization",
              "name": "Fuelmetrics"
            },
            "knowsAbout": ["Frontend Development", "Vue.js", "Nuxt", "JavaScript", "TypeScript", "Web Accessibility", "Open Source"],
            "sameAs": [
              "https://twitter.com/FavourChi__",
              "https://favourchi.medium.com/",
              "https://github.com/favour-chibueze",
              "https://www.linkedin.com/in/favourchibueze/"
            ]
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Favour Chibueze Portfolio",
            "url": "https://favourchibueze.com",
            "description": "Portfolio website of Favour Chibueze, a frontend engineer and software developer",
            "author": {
              "@type": "Person",
              "name": "Favour Chibueze"
            }
          })
        }
      ]
    },
  },

  devtools: { enabled: true },

  // Load custom @font-face declarations (Jubilat, Simula, Menlo)
  css: ['~~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxt/icon'
  ],

  googleFonts: {
    families: {
      Montserrat: true,
    },
    display: 'swap',
    preload: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: '',
  },
  
  // Performance optimizations + static prerendering for crawlability.
  // Prerendering ships fully-rendered HTML so search engines index content
  // without executing JS.
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/experience', '/contact'],
      failOnError: false,
    },
  },
  
  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  }
})