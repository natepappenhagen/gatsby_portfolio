const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Nate Pappenhagen - Web Developer Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Nate Pappenhagen Portfolio', // Alternative Site title for SEO
  siteUrl: 'https://www.natepappenhagen.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/n_icon.png', // Used for SEO and manifest
  siteDescription: 'Web Developer Portfolio for Nate Pappenhagen',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
