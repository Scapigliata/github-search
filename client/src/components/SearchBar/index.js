import React, { useContext } from 'react';
import { SearchContext } from '../../utils/context';
import { types } from '../../reducers/search';
import { LABEL, LANGUAGE } from '../../utils/constants';
import { getSelectOptions } from '../../utils/helperFunctions';

const labelOptions = getSelectOptions(LABEL);
const languageOptions = getSelectOptions(LANGUAGE);

const SearchBar = () => {
  const { state, dispatch } = useContext(SearchContext);
  const { query, language, label } = state.search;

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

  return (
    <div>
      <input
        name="query"
        value={query}
        type="text"
        onChange={handleUpdateInput}
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
      <button onClick={handleResetSearch}>x</button>
    </div>
  );
};

export default SearchBar;
