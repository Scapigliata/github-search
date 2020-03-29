import axios from 'axios';

const BASE_URL = 'http://localhost:3232';

const ROUTES = {
  SEARCH: `${BASE_URL}/search/issues`,
  ISSUES: `${BASE_URL}/issues`,
};

export const searchIssues = params =>
  axios.get(`${ROUTES.SEARCH}`, {
    params,
  });

export const getIssues = axios.get(ROUTES.ISSUES);
export const saveIssue = issue => axios.post(`${ROUTES.ISSUES}`, issue);

export const getSavedSearches = new Promise((res, rej) => {
  setTimeout(() => {
    res({
      data: [
        {
          query: 'Corona',
          language: 'JavaScript',
          label: 'Bug',
        },
      ],
    });
  }, 1500);
});
