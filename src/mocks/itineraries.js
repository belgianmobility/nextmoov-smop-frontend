const itineraries = [{
  duration: 5171,
  startTime: 1575843530000,
  endTime: 1575848701000,
  walkTime: 1089,
  transitTime: 3540,
  waitingTime: 542,
  walkDistance: 1370.274819541521,
  walkLimitExceeded: false,
  elevationLost: 0,
  elevationGained: 0,
  transfers: 1,
  legs: [{
    startTime: 1575843530000,
    endTime: 1575844619000,
    departureDelay: 0,
    arrivalDelay: 0,
    realTime: false,
    distance: 1370.047,
    pathway: false,
    mode: 'WALK',
    route: '',
    agencyTimeZoneOffset: 3600000,
    interlineWithPreviousLeg: false,
    from: {
      name: 'Origin', lon: 4.373166, lat: 50.828383, departure: 1575843530000, orig: '', vertexType: 'NORMAL',
    },
    to: {
      name: 'Bruxelles-Luxembourg', stopId: '2:8811304', lon: 4.373676, lat: 50.83894, arrival: 1575844619000, departure: 1575844620000, stopIndex: 0, stopSequence: 1, vertexType: 'TRANSIT', boardAlightType: 'DEFAULT',
    },
    legGeometry: { points: 'mlfuHgcuYHtAFVm@|@ML[MsDmBOISIIEIEeCsAAAGCMGMGKEgCsAMIMI_Bw@aB{@EGEMKUGOKYGYCMGMkAwCaC~BqFrEy@b@oAh@?NIJIK]RYNy@d@eAd@QFc@H_@B_@?O?iACo@S}B_ASI', length: 51 },
    rentedBike: false,
    flexDrtAdvanceBookMin: 0,
    duration: 1089,
    transitLeg: false,
    steps: [{
      distance: 39.652, relativeDirection: 'DEPART', streetName: 'Rue des Cygnes - Zwanenstraat', absoluteDirection: 'WEST', stayOn: false, area: false, bogusName: false, lon: 4.373161943900438, lat: 50.828395541010494, elevation: [],
    }, {
      distance: 42.986, relativeDirection: 'RIGHT', streetName: 'Place Eugène Flagey - Eugène Flageyplein', absoluteDirection: 'NORTHWEST', stayOn: false, area: false, bogusName: false, lon: 4.3726189, lat: 50.8283052, elevation: [],
    }, {
      distance: 483.8029999999999, relativeDirection: 'RIGHT', streetName: 'Rue Maria Malibran - Maria Malibranstraat', absoluteDirection: 'NORTH', stayOn: false, area: false, bogusName: false, lon: 4.3722374, lat: 50.8286062, elevation: [],
    }, {
      distance: 34.441, relativeDirection: 'CONTINUE', streetName: 'Place Raymond Blyckaerts - Raymond Blyckaertsplein', absoluteDirection: 'NORTHEAST', stayOn: false, area: false, bogusName: false, lon: 4.3747127, lat: 50.832664400000006, elevation: [],
    }, {
      distance: 90.08699999999999, relativeDirection: 'CONTINUE', streetName: 'Rue du Sceptre - Scepterstraat', absoluteDirection: 'NORTHEAST', stayOn: false, area: false, bogusName: false, lon: 4.3751032, lat: 50.8328513, elevation: [],
    }, {
      distance: 320.537, relativeDirection: 'LEFT', streetName: 'bike path', absoluteDirection: 'NORTHWEST', stayOn: false, area: false, bogusName: true, lon: 4.376132800000001, lat: 50.8333305, elevation: [],
    }, {
      distance: 5.351, relativeDirection: 'LEFT', streetName: 'Chaussée de Wavre - Waverse Steenweg', absoluteDirection: 'WEST', stayOn: false, area: false, bogusName: false, lon: 4.3740425, lat: 50.8358824, elevation: [],
    }, {
      distance: 6.762, relativeDirection: 'RIGHT', streetName: 'Rue Godecharle - Godecharlestraat', absoluteDirection: 'NORTHWEST', stayOn: false, area: false, bogusName: false, lon: 4.373967100000001, lat: 50.835889400000006, elevation: [],
    }, {
      distance: 7.358, relativeDirection: 'RIGHT', streetName: 'path', absoluteDirection: 'NORTHEAST', stayOn: false, area: false, bogusName: true, lon: 4.3739043, lat: 50.835935500000005, elevation: [],
    }, {
      distance: 339.06999999999994, relativeDirection: 'LEFT', streetName: 'path', absoluteDirection: 'NORTHWEST', stayOn: true, area: false, bogusName: true, lon: 4.3739685, lat: 50.835987800000005, elevation: [],
    }],
  }, {
    startTime: 1575844620000,
    endTime: 1575846600000,
    departureDelay: 0,
    arrivalDelay: 0,
    realTime: false,
    distance: 23272.474390316966,
    pathway: false,
    mode: 'RAIL',
    route: 'S8',
    agencyName: 'NMBS/SNCB',
    agencyUrl: 'http://www.belgiantrain.be/',
    agencyTimeZoneOffset: 3600000,
    routeType: 100,
    routeId: '2:306',
    interlineWithPreviousLeg: false,
    tripShortName: '6572',
    tripBlockId: '7596',
    headsign: 'Ottignies',
    agencyId: 'NMBS/SNCB',
    tripId: '2:88____:078::8811304:8811601:11:2410:20191208',
    serviceDate: '20191208',
    from: {
      name: 'Bruxelles-Luxembourg', stopId: '2:8811304', lon: 4.373676, lat: 50.83894, arrival: 1575844619000, departure: 1575844620000, stopIndex: 0, stopSequence: 1, vertexType: 'TRANSIT', boardAlightType: 'DEFAULT',
    },
    to: {
      name: 'Ottignies', stopId: '2:8811601', lon: 4.56936, lat: 50.67367, arrival: 1575846600000, departure: 1575847140000, stopIndex: 10, stopSequence: 11, vertexType: 'TRANSIT', boardAlightType: 'DEFAULT',
    },
    legGeometry: { points: 'knhuHmfuYtgB_bBjpAy_AlyAmr@vqDsaGbd@_oBviCixDrkAanBhxAuoBnhAqmAjaDotC', length: 11 },
    routeShortName: 'S8',
    routeLongName: 'Bruxelles-Luxembourg -- Ottignies',
    rentedBike: false,
    flexDrtAdvanceBookMin: 0,
    duration: 1980,
    transitLeg: true,
    steps: [],
  }, {
    startTime: 1575847140000,
    endTime: 1575848700000,
    departureDelay: 0,
    arrivalDelay: 0,
    realTime: false,
    distance: 30919.893804271323,
    pathway: false,
    mode: 'RAIL',
    route: 'IC',
    agencyName: 'NMBS/SNCB',
    agencyUrl: 'http://www.belgiantrain.be/',
    agencyTimeZoneOffset: 3600000,
    routeType: 103,
    routeId: '2:113',
    interlineWithPreviousLeg: false,
    tripShortName: '2123',
    tripBlockId: '2419',
    headsign: 'Namur',
    agencyId: 'NMBS/SNCB',
    tripId: '2:88____:007::8814001:8863008:37:2445:20191208',
    serviceDate: '20191208',
    from: {
      name: 'Ottignies', stopId: '2:8811601', lon: 4.56936, lat: 50.67367, arrival: 1575846600000, departure: 1575847140000, stopIndex: 26, stopSequence: 27, vertexType: 'TRANSIT', boardAlightType: 'DEFAULT',
    },
    to: {
      name: 'Namur', stopId: '2:8863008', lon: 4.86222, lat: 50.46879, arrival: 1575848700000, orig: '', stopIndex: 36, stopSequence: 37, vertexType: 'TRANSIT', boardAlightType: 'DEFAULT',
    },
    legGeometry: { points: 'mehtHmm{Zj`FiuGnpBskClaAcmAnoB{yBb~BmnCzrByqDxmBupDtoAkwBdhC_tE~}DexJ', length: 11 },
    routeShortName: 'IC',
    routeLongName: 'Bruxelles-Midi -- Namur',
    rentedBike: false,
    flexDrtAdvanceBookMin: 0,
    duration: 1560,
    transitLeg: true,
    steps: [],
  }],
  tooSloped: false,
}];


export default itineraries;
