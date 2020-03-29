const express = require('express');
const fs = require('fs');
const router = new express.Router();
const { searchIssues } = require('../services/search');

router.get('/search/issues', async (req, res) => {
  try {
    const { query, language, label } = req.query;
    let Query = `q=${query}`;

    if (language) {
      Query = Query + `+language:${language}`;
    }
    if (label) {
      Query = Query + `+label:${label}`;
    }
    const { data } = await searchIssues(Query);

    console.log(Query);

    const response = data.items.map(({ title, id, url, repository_url }) => ({
      title,
      id,
      url,
      repository_url,
    }));

    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(400).send();
  }
});

module.exports = router;
