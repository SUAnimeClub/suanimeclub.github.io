module.exports = {
  siteMetadata: {
      title: `anime-club-website`,
    siteUrl: `https://www.suanimeclub.github.io`
  },
  plugins: ['gatsby-plugin-postcss', "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};