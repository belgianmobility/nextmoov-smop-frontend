// @flow
import React, { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import s from './style.module.scss';
import AutoCompleteSearchBox from '../../components/AutoCompleteSearchBox';
import {
  autocompleteAddress,
  autocompleteStation,
} from '../../api/autocomplete';
import isMyObjectEmpty from '../../utils/isMyObjectEmpty';

type Props = {
  onResultClick?: Function,
  position?: Array<number>,
  lang?: string,
}

function Sidebar(props: Props) {
  const {
    onResultClick,
    position,
    lang,
  } = props;

  const initialState = {
    from: [],
    to: [],
  };

  const [results, setResults] = useState({});
  const [addresses, setAddresses] = useState(initialState);
  const [stations, setStations] = useState(initialState);

  function search(id, value) {
    autocompleteAddress(value, position).then((res) => {
      const newAddress = {
        ...addresses,
        [id]: res,
      };
      setAddresses(newAddress);
    });
    autocompleteStation(value, position).then((res) => {
      setStations({
        ...stations,
        [id]: res,
      });
    });
  }

  useEffect(() => {
    setResults({
      from: {
        stations: stations.from,
        addresses: addresses.from,
      },
      to: {
        stations: stations.to,
        addresses: addresses.to,
      },
    });
  }, [stations, addresses]);

  const throttledSearch = throttle(search, 500);
  const debouncedSearch = debounce(search, 500);

  function handleChange(e) {
    const { id, value } = e.target;
    if (value.length <= 1) {
      setAddresses(initialState);
      setStations(initialState);
    }
    if (value.length < 5) {
      return throttledSearch(id, value);
    }
    return debouncedSearch(id, value);
  }

  function handleResultClick(e) {
    onResultClick(e);
    setAddresses(initialState);
    setStations(initialState);
  }

  return (
    <div className={s.sidebar}>
      <div className={s.searchWrapper}>
        {!isMyObjectEmpty(results) && (
          Object.keys(results).map((result, index) => {
            return (
              <AutoCompleteSearchBox
                key={`${result + index}`}
                id={result}
                onResultClick={handleResultClick}
                lang={lang}
                results={results[result]}
                onChange={handleChange}
              />
            );
          })
        )}
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  onResultClick: () => {},
  position: undefined,
  lang: 'en',
};

export default Sidebar;
