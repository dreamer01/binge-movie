import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Search, Cross } from '../Icons';
import Styles from './search.module.css';

function SearchInput({ value, onChange }) {
  const inputRef = useRef(null);
  const [showInput, toggleInput] = useState(false);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div
      className={`${Styles.initialInputView} ${
        showInput ? Styles.inputView : ''
      }`}
    >
      <Search className={Styles.searchIcon} onClick={() => toggleInput(true)} />

      <input
        ref={inputRef}
        className={`${Styles.initialInput} ${showInput ? Styles.input : ''}`}
        placeholder='Title, Movies, Keyword'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />

      {showInput && (
        <Cross
          className={Styles.closeIcon}
          onClick={() => {
            toggleInput(false);
            onChange('');
          }}
        />
      )}
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
