import React, { useContext, useState } from 'react';
import { SearchContext } from '../../utils/context';
import { ListGroup, Button } from 'react-bootstrap';
import { saveIssue } from '../../services/search';

const SearchResult = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const saveIssueHandler = async issue => {
    setLoading(true);
    setError(false);

    try {
      await saveIssue(issue);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const {
    state: { results },
  } = useContext(SearchContext);

  const onClickHandler = result => {
    console.log('res', result);
  };

  return (
    <ListGroup>
      {results ? (
        results.map(o => (
          <ListGroup.Item onClick={() => onClickHandler(o)} key={o.title}>
            <li>{o.title}</li>
            <a href={o.url}>{o.url}</a>
            <Button onClick={() => saveIssueHandler(o)}>+</Button>
          </ListGroup.Item>
        ))
      ) : (
        <div>Search Results</div>
      )}
    </ListGroup>
  );
};

export default SearchResult;
