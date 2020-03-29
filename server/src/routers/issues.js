const express = require('express');
const fs = require('fs');
const router = new express.Router();

router.get('/issues', async (req, res) => {
  const issues = loadIssues();
  res.send(issues);
});

router.post('/issues', (req, res) => {
  const issues = loadIssues();
  savedIssues([...issues, req.body]);
  res.status(201).send();
});

const loadIssues = () => {
  try {
    const dataBuffer = fs.readFileSync('test.txt');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const savedIssues = issues => {
  const dataJSON = JSON.stringify(issues);
  fs.writeFileSync('test.txt', dataJSON);
};

module.exports = router;
