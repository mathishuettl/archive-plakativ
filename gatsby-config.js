const path = require('path')

const myCustomQueries = {
  xs: '(max-width: 0px)',
  sm: '(max-width: 576px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 991px)',
  xl: '(min-width: 992px)',
}

module.exports = {
  siteMetadata: {
    title: 'MAWEO Starter',
    description: 'Opiniated Starter to kick off Projects',
    author: '@maweo',
    siteUrl: 'https://maweo.at',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-root-import',
    'gatsby-plugin-preact',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://s13web0022.peakserver.net/graphql`,
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: [path.join(__dirname, 'src/styles')],
        },
        additionalData: `
          @use 'variables' as var;
          @use 'mixins' as mixin;
          @use 'sass:math';
        `,
        postCssPlugins: [
          require(`postcss-custom-properties`)({
            preserve: true,
            importFrom: [path.join(__dirname, 'src/styles')],
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Kanit',
              variants: ['300', '700'],
              fontDisplay: 'swap',
            },
            {
              family: 'Rubik',
              variants: ['500'],
              fontDisplay: 'swap',
            },
            {
              family: 'Roboto',
              variants: ['300', '500'],
              fontDisplay: 'swap',
            }
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'maweo-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#333333',
        theme_color: '#333333',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: 'GTM-5ZJKN25',
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        environments: ['production', 'development']
      },
    },
    // 'gatsby-plugin-offline',
  ],
}
