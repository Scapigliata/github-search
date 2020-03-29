const cors = require('cors');
const issueRouter = require('./routers/issues');
const searchRouter = require('./routers/search');

const express = require('express');
const app = require('express')();
const PORT = process.env.PORT || 3232;

app.use(cors());
app.use(express.json());
app.use(issueRouter);
app.use(searchRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
