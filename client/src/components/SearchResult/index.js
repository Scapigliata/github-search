import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { SearchContext } from '../../utils/context';
import { ListGroup, Button } from 'react-bootstrap';
import { saveIssue } from '../../services/search';
import Loader from '../Loader';
import Error from '../Error';

const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Container = styled.div`
  min-width: 500px;
  width: 90%;
`;

const SearchResult = () => {
  const [loading, setLoading] = useState(false);
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

  if (!results) {
    setError(true);
  }

  return (
    <ListGroup>
      {loading && <Loader className="loader" />}
      {error && <Error onButtonClick={() => onClickHandler()} />}
      {results &&
        results.map(o => (
          <Container>
            <ListGroup.Item key={o.url}>
              <Section>
                <li>{o.title}</li>
                <Button className="ml-1" onClick={() => saveIssueHandler(o)}>
                  +
                </Button>
              </Section>
              <a href={o.url}>{o.url}</a>
            </ListGroup.Item>
          </Container>
        ))}
    </ListGroup>
  );
};

export default SearchResult;
