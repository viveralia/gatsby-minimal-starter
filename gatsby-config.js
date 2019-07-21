module.exports = {
  // The Site Info (change it for your project data)
  siteMetadata: {
    title: 'Minimal Starter',
    description:
      'A minimal, heavily commented Gatsby Starter based on the gatsby-starter-hello-world',
    siteUrl: 'https://gatsby-minimal.netlify.com',
    lang: 'en',
    // Located inside static folder
    image: '/cover.jpg',
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // CSS with Styled Components
    `gatsby-plugin-styled-components`,
    // Getting local info (change the name and the path to suit your needs)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
}
