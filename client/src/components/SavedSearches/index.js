import React, { useEffect, useState } from 'react';

const SavedSearches = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {}, []);

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

  return <div>Saved</div>;
};

export default SavedSearches;
