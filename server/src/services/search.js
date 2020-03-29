const axios = require('axios');

const searchIssues = query =>
  axios.get(`https://api.github.com/search/issues?${query}`);

module.exports = {
  searchIssues,
};
