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
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: `${__dirname}/src/__generated__/gatsby-types.ts`,
      },
    },
  ],
}
