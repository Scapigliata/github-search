import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

import { SearchContext } from '../../utils/context';
import { types } from '../../reducers/search';
import { LABEL, LANGUAGE } from '../../utils/constants';
import { getSelectOptions } from '../../utils/helperFunctions';

const labelOptions = getSelectOptions(LABEL);
const languageOptions = getSelectOptions(LANGUAGE);

const ButtonStyled = styled(Button)`
  height: 25px;
  width: 25px;
  margin: 0 auto;
  padding: 0;
`;

const Container = styled.div`
  margin: 0 auto;
`;

const SearchBar = () => {
  const [q, setQ] = useState('');
  const { state, dispatch } = useContext(SearchContext);
  const { language, label } = state.search;

  const handleUpdateInput = ({ target }) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    dispatch({
      type: types.UPDATE_INPUT,
      payload: { name, value },
    });
  };

  const handleResetSearch = e => {
    e.preventDefault();
    dispatch({ type: types.RESET_SEARCH });
  };

  const handleInput = e => {
    const { name, value } = e.target;

    if (e.keyCode === 13) {
      dispatch({
        type: types.UPDATE_INPUT,
        payload: { name, value },
      });
    } else {
      setQ(e.target.value);
    }
  };

  return (
    <Container>
      <input
        name="query"
        value={q}
        type="text"
        onChange={handleInput}
        onKeyDown={handleInput}
      />
      <select onChange={handleUpdateInput} value={language} name="language">
        {languageOptions.map(o => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <select onChange={handleUpdateInput} value={label} name="label">
        {labelOptions.map(o => (
          <option value={o.value} key={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ButtonStyled className="btn btn-danger" onClick={handleResetSearch}>
        x
      </ButtonStyled>
    </Container>
  );
};

export default SearchBar;
