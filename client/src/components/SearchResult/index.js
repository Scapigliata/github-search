import React, { useContext } from 'react';
import { SearchContext } from '../../utils/context';
import { ListGroup } from 'react-bootstrap';
const SearchResult = () => {
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
          </ListGroup.Item>
        ))
      ) : (
        <div>Search Results</div>
      )}
    </ListGroup>
  );
};

export default SearchResult;
