import React, { useReducer, useEffect } from 'react';
import searchReducer, { initialState, types } from '../reducers/search';
import { getSavedSearches, searchIssues } from '../services/search';
import { SearchContext } from '../utils/context';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const {
    search: { query, language, label },
  } = state;

  const searchIssuesHandler = async () => {
    try {
      const { data } = await searchIssues({
        query: query || 'react native',
        language,
        label,
      });
      dispatch({
        type: types.SET_RESULTS,
        payload: data,
      });
    } catch (e) {}
  };

  useEffect(() => {
    searchIssuesHandler();
  }, [query, language, label]);

  const handleSetSaved = async e => {
    const { data } = await getSavedSearches;
    dispatch({
      type: types.SET_SAVED,
      payload: data,
    });
  };

  useEffect(() => {
    handleSetSaved();
  }, []);

  const contextProps = {
    state,
    dispatch,
  };

  return (
    <SearchContext.Provider value={contextProps}>
      <SearchBar />
      <Row>
        <Col>
          <SearchResult />
        </Col>
      </Row>
    </SearchContext.Provider>
  );
};

export default Home;
