import legMarker from '../LegMarker';

const StopsMarkers = (props) => {
  const { intermediatesStops, colors } = props;
  return intermediatesStops.map((item, index) => {
    if (item.length > 0) {
      return item.map((stop, subindex) => (
        legMarker([stop.lon, stop.lat], `#${colors[index]}`, `${item + index + subindex}`)
      ));
    }
    return [];
  });
};

export default StopsMarkers;
