/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const tailwindConfig = require( './tailwind.config.js' )

module.exports = {
  siteMetadata: {
    title: 'Angelica Turla',
    description: 'Personal Portfolio',
    author: '@gelicamarie',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [
          require( 'tailwindcss' )( tailwindConfig ),
          require( 'autoprefixer' ),
          ...( process.env.NODE_ENV === 'production'
            ? [ require( 'cssnano' ) ]
            : [] ),
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
      },
    },
  ],
}
