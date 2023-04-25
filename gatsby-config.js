const name = 'Nalix Crafts and Small Batches';

module.exports = {
  siteMetadata: {
    title: name,
    siteUrl: `https://tbd.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: name,
        short_name: `Nalix`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: 'src/assets/favicon.png',
      },
    },
    'gatsby-plugin-netlify',
  ],
};
