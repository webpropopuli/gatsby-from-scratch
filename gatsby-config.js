module.exports = {
  siteMetadata: {
    title: `The Awesome Blog`,
    description: `The best song in the world`
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
