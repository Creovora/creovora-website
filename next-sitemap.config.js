/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://creovora.com', // Replace with your domain
    generateRobotsTxt: true, // Generate a robots.txt file
    robotsTxtOptions: {
      policies: [
        { userAgent: '*', allow: '/' },
      ],
    },
  };