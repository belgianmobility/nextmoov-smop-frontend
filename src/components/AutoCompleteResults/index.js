// @flow
import React from 'react';
import s from './style.module.scss';

type Props = {
  array: Array<Object>,
  onClick: Function,
  lang?: string,
  title?: string,
}


function AutoCompleteResults(props: Props) {
  const {
    array,
    onClick,
    lang,
    title,
  } = props;

  return (
    <div className={s.autocompleteresults_wrapper}>
      {title.length > 0 && (
        <h3>{title}</h3>
      )}
      {array.map((item, index) => {
        return (
          <button
            key={`${item + index}`}
            type="button"
            onClick={onClick}
            value={JSON.stringify({
              name: item._source.multiLang[lang],
              geo: item._source.geo,
            })}
          >
            {item._source.multiLang[lang]}
          </button>
        );
      })}
    </div>
  );
}

AutoCompleteResults.defaultProps = {
  lang: 'en',
  title: '',
};

export default AutoCompleteResults;
