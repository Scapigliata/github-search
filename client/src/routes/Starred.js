import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

import { getIssues } from '../services/search';

const SavedIssues = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    const getIssuesHandler = async () => {
      setLoading(true);
      setError(false);

      try {
        const { data } = await getIssues;
        setSaved(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getIssuesHandler();
  }, []);

  if (loading) {
    return (
      <div>
        <h4>Getting your saved issues...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h4>An error has occured while loading saved issues.</h4>
      </div>
    );
  }

  return (
    <ListGroup>
      {saved &&
        saved.map(o => (
          <ListGroup.Item key={o.title}>
            <li>{o.title}</li>
            <a href={o.url}>{o.url}</a>
          </ListGroup.Item>
        ))}{' '}
    </ListGroup>
  );
};

export default SavedIssues;
