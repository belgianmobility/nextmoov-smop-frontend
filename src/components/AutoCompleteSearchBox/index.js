// @flow
import React, { useState } from 'react';
import s from './style.module.scss';
import TextInput from '../TextInput';
import AutoCompleteResults from '../AutoCompleteResults';
import isMyObjectEmpty from '../../utils/isMyObjectEmpty';

type Props = {
  id: string,
  onResultClick?: Function,
  onChange?: Function,
  lang?: string,
  results?: Object
}

function AutoCompleteSearchBox(props: Props) {
  const {
    id,
    onResultClick,
    onChange,
    results,
    lang,
  } = props;

  const [selectedResult, setSelectedResult] = useState();

  function handleChange(e) {
    setSelectedResult();
    onChange(e);
  }

  function handleClick(e) {
    const value = JSON.parse(e.target.value);
    setSelectedResult(value.name);
    onResultClick(value);
  }

  return (
    <div className={s.autocomplete_searchbox_wrapper}>
      <TextInput
        onChange={handleChange}
        labelContent={id.replace(/^./, id[0].toUpperCase())}
        placeholder="Search for a place..."
        inputValue={selectedResult}
        id={id}
      />
      {!isMyObjectEmpty(results) && (
        Object.keys(results).map((result, index) => {
          if (results[result] && results[result].length > 0) {
            return (
              <AutoCompleteResults
                key={`${result + index}`}
                array={results[result]}
                onClick={handleClick}
                lang={lang}
                title={result}
                id={id}
              />
            );
          }
          return null;
        })
      )}
    </div>
  );
}

AutoCompleteSearchBox.defaultProps = {
  onResultClick: () => {},
  onChange: () => {},
  lang: 'en',
  results: {},
};

export default AutoCompleteSearchBox;
