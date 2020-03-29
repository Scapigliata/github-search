import axios from 'axios';

const BASE_URL = 'http://localhost:3232';

const ROUTES = {
  SEARCH: `${BASE_URL}/search/issues`,
  SAVE: `${BASE_URL}/issues/save`,
};

export const searchIssues = params =>
  axios.get(`${ROUTES.SEARCH}`, {
    params,
  });

export const saveIssue = issue => axios.get(`${ROUTES.SAVE}?${issue}`);

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
