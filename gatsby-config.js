module.exports = {
  siteMetadata: {
      title: `Sun-U Anime Club Official Website`,
    siteUrl: `https://www.suanimeclub.github.io`
  },
  plugins: ['gatsby-plugin-provide-react', 'gatsby-plugin-postcss', "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};