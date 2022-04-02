module.exports = {
  siteMetadata: {
    title: `HairrCraftt Unisex Salon`,
    description: `Best Salon in Siliguri. Haircuts, Hair Treatments, Facial, Hair Color Transformations, Skin Services, Bridal Makeup, Glam Makeup, Mens Grooming, Mens parlour`,
    facebook: `hairrcraftt`,
    instagram: `@hairrcraftt`,
    siteMap: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Services",
        link: "/services",
      },
      {
        name: "Gallery",
        link: "/gallery",
      },
      {
        name: "Contact US",
        link: "/contact"
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "HairrCraftt Unisex Salon",
        short_name: "HairrCraftt",
        start_url: "/",
        background_color: "#E3C8EB",
        theme_color: "#FFFFFF",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        legacy: true, // this will add apple-touch-icon links to <head>
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `hairrcraftt`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
