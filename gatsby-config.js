module.exports = {
  siteMetadata: {
    title: "Gem Studios",
    description: "Futuristic fashion redefined.",
    siteUrl: "https://gemstudios.netlify.app",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/gem-logo.png",
      },
    },
  ],
};
