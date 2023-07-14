import { useState } from 'react';
import PropTypes from 'prop-types';

import { Search, Cross } from '../Icons';
import Styles from './search.module.css';

function SearchInput(props) {
  const [showInput, toggleInput] = useState(false);

  return (
    <div
      className={`${Styles.initialInputView} ${
        showInput ? Styles.inputView : ''
      }`}
    >
      <Search className={Styles.searchIcon} onClick={() => toggleInput(true)} />

      <input
        className={`${Styles.initialInput} ${showInput ? Styles.input : ''}`}
        placeholder='Title, Movies, Keyword'
        {...props}
      />

      {showInput && <Cross onClick={() => toggleInput(false)} />}
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
