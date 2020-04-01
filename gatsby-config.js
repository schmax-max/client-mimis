let env = process.env.NODE_ENV || "development"
// env = 'production'
const project = process.env.GATSBY_GCP_PROJECT

const libraryLinks = {
  development: "http://localhost:8082/graphql",
  production: `https://librarian-dot-${project}.appspot.com/graphql`,
}

const libraryLink = libraryLinks[env]

module.exports = {
  siteMetadata: {
    title: `Mimis - the global editor`,
    description: `Upgrade your news routine with global quality news from a variety of perspectives.`,
    author: `Anders Schmachtenberg`,
    // keywords: 'journalism,news,media,filter,bubble,bubbles,fake,variety,quality,global,world,geopolitics,mainstream,mimis,editor'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "structure",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "structure",
        // Url to query from
        url: libraryLink,
      },
    },
    {
      resolve: "gatsby-plugin-styled-components",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#003366`,
        theme_color: `#003366`,
        display: `minimal-ui`,
        icon: `src/images/mimis.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
