export default function getLegInfo(legs) {
  return legs.map((leg) => {
    switch (leg.mode) {
      case 'WALK':
        return {
          legColor: '000000',
          legMode: leg.mode,
        };
      case 'BICYCLE':
        return {
          legColor: leg.rentedBike ? 'FFDF3F' : '5CE65C',
          legMode: leg.mode,
        };
      case 'CAR':
        return {
          legColor: '000000',
          legMode: leg.mode,
        };
      case 'RAIL':
        return {
          legColor: '006BB2',
          legMode: leg.mode,
        };
      case 'BUS':
        return {
          legColor: leg.agencyName === 'tec' ? 'FFCB0A' : leg.routeColor,
          legMode: leg.mode,
        };
      default:
        return {
          legColor: '000000',
          legMode: leg.mode,
        };
    }
  });
}
