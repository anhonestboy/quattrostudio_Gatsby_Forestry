const config = require("./config.json")
const infoData = require("./content/data/info.json")


module.exports = {
  //this makes the site config available to forestry cms
  siteMetadata: {
    title: config.title,
    description: config.description,
    repoUrl: config.repository_url,
    about: config.about,
    contact: config.contact,
    primaryColor: config.primary_color,
    infoData: infoData
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`, 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },   
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "weddings",
        path: `${__dirname}/content/weddings`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp", 
      options: {
        defaultQuality: 75
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "wedding",
          "category",
        ],
        queryLimit: 1000,
      },
    },
  ],
}
