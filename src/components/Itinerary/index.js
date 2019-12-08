// @ flow
import React from 'react';

type Props = {
  startTime: number,
  endTime: number,
  duration: number,
  legs: Array<Object>,
  waitingTime: number,
  walkTime: number,
  from: string,
  to: string,
}

function Itinerary(props: Props) {
  const {
    startTime,
    endTime,
    duration,
    legs,
    waitingTime,
    walkTime,
    from,
    to,
  } = props;
  return (
    <>
      <p>
        {`Duration: ${new Date(duration * 1000).toISOString().substr(11, 8)}`}
      </p>
      <p>
        {`Start Time: ${new Date(startTime).getHours()}:${new Date(startTime).getMinutes()} — `}
        {`End Time: ${new Date(endTime).getHours()}:${new Date(endTime).getMinutes()}`}
      </p>
      <p>
        {`Waiting Time: ${new Date(waitingTime * 1000).toISOString().substr(11, 8)} — `}
        {`Walk Time: ${new Date(walkTime * 1000).toISOString().substr(11, 8)}`}
      </p>
      {legs.map((leg, index) => {
        return (
          <React.Fragment
            key={`${leg + index}`}
          >
            <h4>
              {`- Step ${index + 1} | `}
              {`From ${leg.from.name !== 'Origin' ? leg.from.name : from}
              to ${leg.to.name !== 'Destination' ? leg.to.name : to} `}
            </h4>
            <p style={{ marginLeft: '18px' }}>
              {leg.agencyId !== undefined && `Agency: ${leg.agencyId} — `}
              {`Transport mode: ${leg.mode}`}
            </p>
            <p style={{ marginLeft: '18px' }}>
              {`Duration: ${new Date(leg.duration * 1000).toISOString().substr(11, 8)} `}
            </p>
            <p style={{ marginLeft: '18px' }}>
              {`Start Time: ${new Date(leg.startTime).getHours()}:${new Date(leg.startTime).getMinutes()} — `}
              {`End Time: ${new Date(leg.endTime).getHours()}:${new Date(leg.endTime).getMinutes()} `}
            </p>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Itinerary;
