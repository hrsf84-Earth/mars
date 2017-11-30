const axios = require('axios');

const walmartKey = process.env.WALMARTAPI
exports.searchProductsByMovieName = movie => (
  axios.get(`http://api.walmartlabs.com/v1/search?query=${movie}&format=json&apiKey=${walmartKey}`)
  .then(res => (
    res.data
  )).catch(err => console.error(err.response.data.status_message))
);