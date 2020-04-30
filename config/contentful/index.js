var contentful = require("contentful");
const contentfulClient = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  host: process.env.REACT_APP_CONTENTFUL_HOST,
  removeUnresolved: true,
});

module.exports = { contentfulClient };
