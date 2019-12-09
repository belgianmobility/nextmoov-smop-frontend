// @flow
import React from 'react';
import AutoComplete from '../AutoComplete';
import Itinerary from '../../components/Itinerary';

type Props = {
  onResultClick?: Function,
  position?: Array<number>,
  lang?: string,
  itineraries?: Array<Object>,
  from?: string,
  to?: string,
}

function Sidebar(props: Props) {
  const {
    onResultClick,
    position,
    lang,
    itineraries,
    from,
    to,
  } = props;

  return (
    <div
      style={{
        flexBasis: '30%',
        padding: '20px',
        overflowY: 'scroll',
      }}
    >
      <AutoComplete
        onResultClick={onResultClick}
        position={position}
        lang={lang}
      />
      {itineraries.length > 0 && (
        itineraries.map((itinerary, index) => {
          return (
            <Itinerary
              key={`${itinerary + index}`}
              startTime={itinerary.startTime}
              endTime={itinerary.endTime}
              duration={itinerary.duration}
              legs={itinerary.legs}
              waitingTime={itinerary.waitingTime}
              walkTime={itinerary.walkTime}
              from={from}
              to={to}
            />
          );
        })
      )}
    </div>
  );
}

Sidebar.defaultProps = {
  onResultClick: () => {},
  position: undefined,
  lang: 'en',
  itineraries: [],
  from: '',
  to: '',
};

export default Sidebar;
