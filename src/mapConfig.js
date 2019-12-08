import config from './config';

const mapServerBase = `${config.API}${config.APIRoutes.mapServerBase}`;


export default function (lang) {
  const langName = `name_${lang}`;

  return {
    fitboundsOptions: {
      padding: {
        top: 60,
        bottom: 60,
        left: 60,
        right: 60,
      },
    },
    containerStyle: {
      height: '100vh',
      width: '70vw',
      position: 'relative',
    },
    animationOptions: {
      duration: 0,
      animate: false,
    },
    mapStyle: {
      version: 8,
      glyphs:
      'https://assets.smartmobilityplanner.be/glyphs/{fontstack}/{range}.pbf',
      sprite:
      'https://api.jawg.io/sprites/sprites',
      sources:
      {
        waterways: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/waterways/{z}/{x}/{y}.pbf`],
        },
        waterareas: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/waterareas/{z}/{x}/{y}.pbf`],
        },
        landusages: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/landusages/{z}/{x}/{y}.pbf`],
        },
        aeroways: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/aeroways/{z}/{x}/{y}.pbf`],
        },
        roads: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/roads/{z}/{x}/{y}.pbf`],
        },
        transport_areas: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/transport_areas/{z}/{x}/{y}.pbf`],
        },
        admin: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/admin/{z}/{x}/{y}.pbf`],
        },
        housenumbers: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/housenumbers/{z}/{x}/{y}.pbf`],
        },
        buildings: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/buildings/{z}/{x}/{y}.pbf`],
        },
        amenities: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/amenities/{z}/{x}/{y}.pbf`],
        },
        places: {
          type: 'vector',
          tiles:
          [`${mapServerBase}/places/{z}/{x}/{y}.pbf`],
        }
        ,
      },
      layers: [
        {
          id: 'background',
          type: 'background',
          layout: {},
          paint: {
            'background-color': 'hsl(39, 47%, 86%)',
          },
        },
        {
          metadata: {
            'mapbox:group': '1456970288113.8113',
          },
          maxzoom: 7,
          type: 'fill',
          source: 'landusages',
          id: 'landcover',
          layout: {},
          paint: {
            'fill-color': [
              'match',
              ['get', 'type'],
              'snow',
              'hsl(0, 0%, 100%)',
              'hsl(75, 62%, 81%)',
            ],
            'fill-opacity': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              2,
              0.3,
              7,
              0,
            ],
            'fill-antialias': false,
          },
          'source-layer': 'landusages',
        },
        {
          id: 'national_park',
          type: 'fill',
          source: 'landusages',
          'source-layer': 'landusages',
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'national_park',
                'nature_reserve',
              ],
              true,
              false,
            ],
          ],
          layout: {},
          paint: {
            'fill-color': 'hsl(100, 58%, 76%)',
            'fill-opacity': {
              base: 1,
              stops: [
                [
                  5,
                  0,
                ],
                [
                  6,
                  0.5,
                ],
              ],
            },
          },
        },
        {
          minzoom: 5,
          layout: {},
          filter: [
            'match',
            ['get', 'type'],
            [
              'park',
              'airport',
              'cemetery',
              'glacier',
              'hospital',
              'pitch',
              'wetland',
              'school',
            ],
            true,
            false,
          ],
          type: 'fill',
          source: 'landusages',
          id: 'landuse',
          paint: {
            'fill-color': [
              'match',
              ['get', 'type'],
              'park',
              'hsl(78, 51%, 74%)',
              'airport',
              'hsl(345, 6%, 87%)',
              'cemetery',
              'hsl(75, 37%, 81%)',
              'glacier',
              'hsl(196, 72%, 93%)',
              'hospital',
              'hsl(0, 56%, 89%)',
              'pitch',
              'hsl(100, 57%, 72%)',
              'wetland',
              'hsl(60, 46%, 87%)',
              'school',
              'hsl(25, 45%, 85%)',
              'hsla(0, 0%, 0%, 0)',
            ],
            'fill-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              5,
              0,
              6,
              1,
            ],
          },
          'source-layer': 'landusages',
        },
        {
          id: 'waterway',
          type: 'line',
          source: 'waterways',
          'source-layer': 'waterways',
          minzoom: 8,
          layout: {
            'line-cap': [
              'step',
              [
                'zoom',
              ],
              'butt',
              11,
              'round',
            ],
            'line-join': 'round',
          },
          paint: {
            'line-color': 'hsl(205, 76%, 70%)',
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.3,
              ],
              [
                'zoom',
              ],
              9,
              [
                'match',
                ['get', 'type'],
                [
                  'canal',
                  'river',
                  'stream',
                ],
                0.1,
                0,
              ],
              20,
              [
                'match',
                ['get', 'type'],
                [
                  'canal',
                  'river',
                  'stream',
                ],
                8,
                3,
              ],
            ],
            'line-opacity': [
              'interpolate',
              [
                'linear',
              ],
              [
                'zoom',
              ],
              8,
              0,
              8.5,
              1,
            ],
          },
        },
        {
          id: 'water',
          paint: {
            'fill-color': 'hsl(205, 76%, 70%)',
          },
          layout: {},
          type: 'fill',
          source: 'waterareas',
          'source-layer': 'waterareas',
        },
        {
          id: 'airport',
          type: 'fill',
          source: 'transport_areas',
          'source-layer': 'transport_areas',
          filter: [
            '==',
            'type',
            'aerodrome',
          ],
          layout: {},
          paint: {
            'fill-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(230, 15%, 86%)',
                ],
                [
                  16,
                  'hsl(230, 29%, 89%)',
                ],
              ],
            },
          },
        },
        {
          minzoom: 11,
          layout: {},
          metadata: {
            'mapbox:group': '1444934828655.3389',
          },
          filter: [
            'all',
            [
              '!=',
              'type',
              'apron',
            ],
            [
              '==',
              '$type',
              'Polygon',
            ],
          ],
          type: 'fill',
          source: 'aeroways',
          id: 'aeroway-polygon',
          paint: {
            'fill-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(230, 23%, 82%)',
                ],
                [
                  16,
                  'hsl(230, 37%, 84%)',
                ],
              ],
            },
            'fill-opacity': {
              base: 1,
              stops: [
                [
                  11,
                  0,
                ],
                [
                  11.5,
                  1,
                ],
              ],
            },
          },
          'source-layer': 'aeroways',
        },
        {
          minzoom: 9,
          layout: {},
          metadata: {
            'mapbox:group': '1444934828655.3389',
          },
          filter: [
            'all',
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
            [
              '==',
              ['get', 'type'],
              'runway',
            ],
          ],
          type: 'line',
          source: 'aeroways',
          id: 'aeroway-runway',
          paint: {
            'line-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(230, 23%, 82%)',
                ],
                [
                  16,
                  'hsl(230, 37%, 84%)',
                ],
              ],
            },
            'line-width': {
              base: 1.5,
              stops: [
                [
                  9,
                  1,
                ],
                [
                  18,
                  80,
                ],
              ],
            },
          },
          'source-layer': 'aeroways',
        },
        {
          minzoom: 9,
          layout: {},
          metadata: {
            'mapbox:group': '1444934828655.3389',
          },
          filter: [
            'all',
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
            [
              '==',
              ['get', 'type'],
              'taxiway',
            ],
          ],
          type: 'line',
          source: 'aeroways',
          id: 'aeroway-taxiway',
          paint: {
            'line-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(230, 23%, 82%)',
                ],
                [
                  16,
                  'hsl(230, 37%, 84%)',
                ],
              ],
            },
            'line-width': {
              base: 1.5,
              stops: [
                [
                  10,
                  0.5,
                ],
                [
                  18,
                  20,
                ],
              ],
            },
          },
          'source-layer': 'aeroways',
        },
        {
          minzoom: 13,
          layout: {},
          type: 'fill',
          source: 'buildings',
          id: 'building',
          paint: {
            'fill-color': 'hsl(38, 35%, 78%)',
            'fill-opacity': {
              base: 1,
              stops: [
                [
                  13.5,
                  0,
                ],
                [
                  14,
                  1,
                ],
              ],
            },
          },
          'source-layer': 'buildings',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'street',
                  'street_limited',
                  'track',
                  'primary_link',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'street',
                  'street_limited',
                  'track',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-street-minor-low',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'street',
                  'street_limited',
                  'primary_link',
                ],
                2,
                'track',
                1,
                0.5,
              ],
              18,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'street',
                  'street_limited',
                  'primary_link',
                ],
                18,
                12,
              ],
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              1,
              14,
              0,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-street-minor-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(230, 19%, 75%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                ],
                2,
                'track',
                1,
                0.5,
              ],
              18,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                ],
                18,
                12,
              ],
            ],
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              0,
              14,
              1,
            ],
            'line-dasharray': [
              3,
              3,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              [
                'get',
                'type',
              ],
              [
                'primary',
                'secondary',
                'tertiary',
              ],
              true,
              false,
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-primary-secondary-tertiary-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              10,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                'primary',
                1,
                [
                  'secondary',
                  'tertiary',
                ],
                0.75,
                0.75,
              ],
              18,
              2,
            ],
            'line-color': 'hsl(230, 19%, 75%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                'primary',
                0.75,
                [
                  'secondary',
                  'tertiary',
                ],
                0.1,
                0.1,
              ],
              18,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                'primary',
                32,
                [
                  'secondary',
                  'tertiary',
                ],
                26,
                26,
              ],
            ],
            'line-dasharray': [
              3,
              3,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              [
                'get',
                'type',
              ],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-major-link-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-dasharray': [
              3,
              3,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              [
                'get',
                'type',
              ],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-motorway-trunk-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              10,
              1,
              18,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              0.75,
              18,
              32,
            ],
            'line-dasharray': [
              3,
              3,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 14,
          layout: {},
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'get',
                'type',
              ],
              'construction',
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-construction',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              14,
              2,
              18,
              18,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-dasharray': [
              'step',
              [
                'zoom',
              ],
              [
                'literal',
                [
                  0.4,
                  0.8,
                ],
              ],
              15,
              [
                'literal',
                [
                  0.3,
                  0.6,
                ],
              ],
              16,
              [
                'literal',
                [
                  0.2,
                  0.3,
                ],
              ],
              17,
              [
                'literal',
                [
                  0.2,
                  0.25,
                ],
              ],
              18,
              [
                'literal',
                [
                  0.15,
                  0.15,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'get',
                'type',
              ],
              'path',
            ],
            [
              '!=',
              [
                'get',
                'type',
              ],
              'steps',
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-path',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              15,
              1,
              18,
              4,
            ],
            'line-dasharray': [
              'step',
              [
                'zoom',
              ],
              [
                'literal',
                [
                  1,
                  0,
                ],
              ],
              15,
              [
                'literal',
                [
                  1.75,
                  1,
                ],
              ],
              16,
              [
                'literal',
                [
                  1,
                  0.75,
                ],
              ],
              17,
              [
                'literal',
                [
                  1,
                  0.5,
                ],
              ],
            ],
            'line-color': 'hsl(35, 26%, 95%)',
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 14,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'get',
                'type',
              ],
              'steps',
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-steps',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              15,
              1,
              16,
              1.6,
              18,
              6,
            ],
            'line-color': 'hsl(35, 26%, 95%)',
            'line-dasharray': [
              'step',
              [
                'zoom',
              ],
              [
                'literal',
                [
                  1,
                  0,
                ],
              ],
              15,
              [
                'literal',
                [
                  1.75,
                  1,
                ],
              ],
              16,
              [
                'literal',
                [
                  1,
                  0.75,
                ],
              ],
              17,
              [
                'literal',
                [
                  0.3,
                  0.3,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              [
                'get',
                'type',
              ],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-major-link',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-color': [
              'match',
              [
                'get',
                'type',
              ],
              'motorway_link',
              'hsl(26, 100%, 78%)',
              'trunk_link',
              'hsl(46, 77%, 78%)',
              'hsl(46, 77%, 78%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                '==',
                ['get', 'tunnel'],
                1,
              ],
              [
                '==',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'pedestrian',
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-pedestrian',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              14,
              0.5,
              18,
              12,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-dasharray': [
              'step',
              ['zoom'],
              [
                'literal',
                [
                  1,
                  0,
                ],
              ],
              15,
              [
                'literal',
                [
                  1.5,
                  0.4,
                ],
              ],
              16,
              [
                'literal',
                [
                  1,
                  0.2,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-street-minor',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                ],
                2,
                'track',
                1,
                0.5,
              ],
              18,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                ],
                18,
                12,
              ],
            ],
            'line-color': [
              'match',
              [
                'get',
                'type',
              ],
              'street_limited',
              'hsl(35, 14%, 93%)',
              'hsl(0, 0%, 100%)',
            ],
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'primary',
                'secondary',
                'tertiary',
              ],
              true,
              false,
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-primary-secondary-tertiary',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                'primary',
                0.75,
                [
                  'secondary',
                  'tertiary',
                ],
                0.1,
                0.1,
              ],
              18,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                'primary',
                32,
                [
                  'secondary',
                  'tertiary',
                ],
                26,
                26,
              ],
            ],
            'line-color': 'hsl(0, 0%, 100%)',
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 15,
          layout: {
            'symbol-placement': 'line',
            'icon-image': [
              'step',
              [
                'zoom',
              ],
              // 'oneway-small',
              'oneway',
              17,
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                ],
                // 'oneway-large',
                'oneway',
                // 'oneway-small',
                'oneway',
              ],
              18,
              'oneway-large',
            ],
            'symbol-spacing': 200,
            'icon-rotation-alignment': 'map',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              '==',
              [
                'get',
                'oneway',
              ],
              'true',
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'primary',
                  'secondary',
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'tertiary',
                ],
                true,
                false,
              ],
              16,
              [
                'match',
                [
                  'get',
                  'type',
                ],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'path',
                  'pedestrian',
                  'service',
                  'track',
                ],
                true,
                false,
              ],
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'tunnel-oneway-arrow-blue',
          paint: {},
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              [
                'get',
                'type',
              ],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
            [
              '==',
              [
                'geometry-type',
              ],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'tunnel-motorway-trunk',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              0.75,
              18,
              32,
            ],
            'line-color': [
              'match',
              [
                'get',
                'type',
              ],
              'motorway',
              'hsl(26, 100%, 78%)',
              'trunk',
              'hsl(46, 77%, 78%)',
              'hsl(46, 77%, 78%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 16,
          layout: {
            'symbol-placement': 'line',
            'icon-image': [
              'step',
              [
                'zoom',
              ],
              'oneway-white-small',
              17,
              'oneway-white-large',
            ],
            'symbol-spacing': 200,
          },
          metadata: {
            'mapbox:group': '1444855769305.6016',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'tunnel'],
                true,
              ],
              [
                'match',
                ['get', 'tunnel'],
                [1],
                true,
                false,
              ],
              [
                'match',
                ['get', 'tunnel'],
                ['yes'],
                true,
                false,
              ],
            ],
            [
              'match',
              [
                'get',
                'type',
              ],
              [
                'motorway',
                'motorway_link',
                'trunk',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              '==',
              [
                'get',
                'oneway',
              ],
              'true',
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'tunnel-oneway-arrow-white',
          paint: {},
          'source-layer': 'roads',
        },
        {
          id: 'ferry',
          type: 'line',
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              '==',
              'geometry-type',
              'LineString',
            ],
            [
              '==',
              'type',
              'ferry',
            ],
          ],
          layout: {
            'line-join': 'round',
          },
          paint: {
            'line-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(205, 73%, 63%)',
                ],
                [
                  17,
                  'hsl(230, 73%, 63%)',
                ],
              ],
            },
            'line-opacity': 1,
            'line-width': {
              base: 1.5,
              stops: [
                [
                  14,
                  0.5,
                ],
                [
                  20,
                  1,
                ],
              ],
            },
            'line-dasharray': {
              base: 1,
              stops: [
                [
                  12,
                  [
                    1,
                    0,
                  ],
                ],
                [
                  13,
                  [
                    12,
                    4,
                  ],
                ],
              ],
            },
          },
        },
        {
          id: 'ferry_auto',
          type: 'line',
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              '==',
              '$type',
              'LineString',
            ],
            [
              '==',
              'type',
              'ferry_auto',
            ],
          ],
          layout: {
            'line-join': 'round',
          },
          paint: {
            'line-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(205, 73%, 63%)',
                ],
                [
                  17,
                  'hsl(230, 73%, 63%)',
                ],
              ],
            },
            'line-opacity': 1,
            'line-width': {
              base: 1.5,
              stops: [
                [
                  14,
                  0.5,
                ],
                [
                  20,
                  1,
                ],
              ],
            },
          },
        },
        {
          id: 'road-steps-bg',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'steps',
            ],
          ],
          layout: {
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              15,
              2,
              17,
              4.6,
              18,
              7,
            ],
            'line-color': 'hsl(230, 17%, 82%)',
            'line-opacity': 0.75,
          },
        },
        {
          minzoom: 15,
          layout: {
            'icon-image': 'turning-circle-outline',
            'icon-size': {
              base: 1.5,
              stops: [
                [
                  14,
                  0.122,
                ],
                [
                  18,
                  0.969,
                ],
                [
                  20,
                  1,
                ],
              ],
            },
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-padding': 0,
            'icon-rotation-alignment': 'map',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              '$type',
              'Point',
            ],
            [
              'in',
              'type',
              'turning_circle',
              'turning_loop',
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'turning-features-outline',
          paint: {},
          'source-layer': 'roads',
        },
        {
          minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-minor-low',
          paint: {
            'line-width': [
              'interpolate',
              ['exponential', 1.5],
              ['zoom'],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                ],
                1,
                0.5,
              ],
              18,
              12,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-opacity': [
              'step',
              ['zoom'],
              1,
              14,
              0,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 11,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'road',
                'residential',
                'living_street',
                'unclassified',
                'primary_link',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-street-low',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-color': 'hsl(38, 80%, 95%)',
            'line-opacity': [
              'step',
              ['zoom'],
              1,
              14,
              0,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-minor-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                ],
                1,
                0.5,
              ],
              18,
              12,
            ],
            'line-opacity': [
              'step',
              ['zoom'],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 11,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'road',
                'residential',
                'living_street',
                'unclassified',
                'primary_link',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-street-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-opacity': [
              'step',
              ['zoom'],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          id: 'road-secondary-tertiary-case',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'secondary',
                'tertiary',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              10,
              0.75,
              18,
              2,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              5,
              0.1,
              18,
              26,
            ],
            'line-opacity': [
              'step',
              ['zoom'],
              0,
              10,
              1,
            ],
          },
        },
        {
          id: 'road-primary-case',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              '==',
              ['get', 'type'],
              'primary',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              10,
              1,
              18,
              2,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              5,
              0.75,
              18,
              32,
            ],
            'line-opacity': [
              'step',
              ['zoom'],
              0,
              10,
              1,
            ],
          },
        },
        {
          minzoom: 10,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'match',
              ['get', 'class'],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-major-link-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              0,
              11,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          id: 'road-motorway-trunk-case',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              10,
              1,
              18,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              5,
              0.75,
              18,
              32,
            ],
            'line-opacity': [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'type'],
                'motorway',
                1,
                0,
              ],
              6,
              1,
            ],
          },
        },
        {
          minzoom: 14,
          layout: {},
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              [
                'get',
                'type',
              ],
              'construction',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-construction',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              2,
              18,
              18,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-dasharray': [
              'step',
              ['zoom'],
              [
                'literal',
                [
                  0.4,
                  0.8,
                ],
              ],
              15,
              [
                'literal',
                [
                  0.3,
                  0.6,
                ],
              ],
              16,
              [
                'literal',
                [
                  0.2,
                  0.3,
                ],
              ],
              17,
              [
                'literal',
                [
                  0.2,
                  0.25,
                ],
              ],
              18,
              [
                'literal',
                [
                  0.15,
                  0.15,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 12,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'path',
                'footway',
                'cycleway',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-path',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              1,
              20,
              8,
            ],
            'line-color': 'hsl(38, 35%, 80%)',
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 14,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'steps',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-steps',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              15,
              1,
              16,
              1.6,
              18,
              6,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-dasharray': [
              'step',
              ['zoom'],
              [
                'literal',
                [
                  1,
                  0,
                ],
              ],
              15,
              [
                'literal',
                [
                  1.75,
                  1,
                ],
              ],
              16,
              [
                'literal',
                [
                  1,
                  0.75,
                ],
              ],
              17,
              [
                'literal',
                [
                  0.3,
                  0.3,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 10,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-major-link',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'motorway_link',
              'hsl(26, 100%, 68%)',
              'trunk_link',
              'hsl(46, 85%, 67%)',
              'hsl(46, 85%, 67%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 12,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              ['get', 'type'],
              'pedestrian',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-pedestrian',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              1,
              20,
              8,
            ],
            'line-color': 'hsl(38, 35%, 80%)',
          },
          'source-layer': 'roads',
        },
        {
          id: 'rail-platforms-fill',
          source: 'transport_areas',
          'source-layer': 'transport_areas',
          type: 'fill',
          filter: [
            'all',
            [
              '==',
              '$type',
              'Polygon',
            ],
            [
              'all',
              [
                '==',
                'type',
                'platform',
              ],
            ],
          ],
          paint: {
            'fill-color': {
              base: 1,
              stops: [
                [
                  16,
                  'hsl(230, 16%, 94%)',
                ],
                [
                  16.25,
                  'hsl(230, 50%, 98%)',
                ],
              ],
            },
            'fill-outline-color': 'hsl(230, 26%, 88%)',
            'fill-opacity': 1,
          },
        },
        {
          id: 'rail-platforms-pattern',
          source: 'transport_areas',
          'source-layer': 'transport_areas',
          type: 'fill',
          filter: [
            'all',
            [
              '==',
              '$type',
              'Polygon',
            ],
            [
              'all',
              [
                '==',
                'type',
                'platform',
              ],
            ],
          ],
          paint: {
            'fill-color': 'hsl(0, 0%, 100%)',
            'fill-outline-color': 'hsl(35, 10%, 83%)',
            'fill-pattern': 'pedestrian-polygon',
            'fill-opacity': {
              base: 1,
              stops: [
                [
                  16,
                  0,
                ],
                [
                  16.25,
                  1,
                ],
              ],
            },
          },
        },
        {
          minzoom: 12,
          layout: {},
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'Polygon',
            ],
            [
              'match',
              ['get', 'type'],
              [
                'primary',
                'secondary',
                'tertiary',
                'primary_link',
                'secondary_link',
                'tertiary_link',
                'road',
                'living_street',
                'residential',
                'unclassified',
                'track',
                'service',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
          ],
          type: 'fill',
          source: 'roads',
          id: 'road-polygon',
          paint: {
            'fill-color': 'hsl(0, 0%, 100%)',
            'fill-outline-color': '#d6d9e6',
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'step',
              ['zoom'],
              [
                '==',
                ['get', 'type'],
                'track',
              ],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'track',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-minor',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              [
                'match',
                ['get', 'type'],
                'track',
                1,
                0.5,
              ],
              18,
              12,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-opacity': [
              'step',
              ['zoom'],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 11,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'road',
                'residential',
                'living_street',
                'unclassified',
                'primary_link',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-street',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'street_limited',
              'hsl(38, 80%, 95%)',
              'hsl(38, 80%, 95%)',
            ],
            'line-opacity': [
              'step',
              ['zoom'],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          id: 'road-secondary-tertiary',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'secondary',
                'tertiary',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              5,
              0.1,
              18,
              26,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
          },
        },
        {
          id: 'road-primary',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              '==',
              ['get', 'type'],
              'primary',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              5,
              0.75,
              18,
              32,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
          },
        },
        {
          minzoom: 15,
          layout: {
            'symbol-placement': 'line',
            'icon-image': [
              'step',
              ['zoom'],
              // "oneway-small",
              'oneway',
              17,
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                ],
                // "oneway-large",
                'oneway',
                // "oneway-small"
                'oneway',
              ],
              18,
              // "oneway-large"
              'oneway',
            ],
            'symbol-spacing': 200,
            'icon-rotation-alignment': 'map',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'oneway'],
                true,
              ],
              [
                '==',
                ['get', 'oneway'],
                1,
              ],
              [
                '==',
                ['get', 'oneway'],
                'yes',
              ],
            ],
            [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                ],
                true,
                false,
              ],
              16,
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'path',
                  'pedestrian',
                  'service',
                  'track',
                ],
                true,
                false,
              ],
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'road-oneway-arrow-blue',
          paint: {},
          'source-layer': 'roads',
        },
        {
          id: 'road-motorway-trunk',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
          ],
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              5,
              0.75,
              18,
              32,
            ],
            'line-color': [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'type'],
                'motorway',
                'hsl(26, 87%, 62%)',
                'trunk',
                'hsl(0, 0%, 100%)',
                'hsl(0, 0%, 100%)',
              ],
              6,
              [
                'match',
                ['get', 'type'],
                'motorway',
                'hsl(26, 87%, 62%)',
                'trunk',
                'hsl(46, 80%, 60%)',
                'hsl(46, 80%, 60%)',
              ],
              9,
              [
                'match',
                ['get', 'type'],
                'motorway',
                'hsl(26, 100%, 68%)',
                'trunk',
                'hsl(46, 85%, 67%)',
                'hsl(46, 85%, 67%)',
              ],
            ],
          },
        },
        {
          type: 'line',
          source: 'roads',
          'source-layer': 'roads',
          id: 'road-tram-case',
          minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          filter: [
            'all',
            [
              '==',
              '$type',
              'LineString',
            ],
            [
              'all',
              [
                '!in',
                'bridge',
                1,
                'yes',
                true,
              ],
              [
                '!in',
                'tunnel',
                1,
                'yes',
                true,
              ],
              [
                'in',
                'type',
                'tram',
              ],
            ],
          ],
          paint: {
            'line-color': [
              'interpolate',
              ['linear'],
              ['zoom'],
              13,
              'hsl(50, 17%, 82%)',
              16,
              'hsl(230, 10%, 74%)',
            ],
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              0.5,
              20,
              1,
            ],
          },
        },
        {
          type: 'line',
          source: 'roads',
          id: 'road-tram',
          minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          filter: [
            'all',
            [
              '==',
              '$type',
              'LineString',
            ],
            [
              'all',
              [
                '!in',
                'bridge',
                1,
                'yes',
                true,
              ],
              [
                '!in',
                'tunnel',
                1,
                'yes',
                true,
              ],
              [
                'in',
                'type',
                'tram',
              ],
            ],
          ],
          paint: {
            'line-color': [
              'interpolate',
              ['linear'],
              ['zoom'],
              13,
              'hsl(50, 17%, 82%)',
              16,
              'hsl(230, 10%, 74%)',
            ],
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              4,
              20,
              8,
            ],
            'line-dasharray': [
              0.1,
              15,
            ],
            'line-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              13.75,
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 12,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'rail',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-rail-case',
          paint: {
            'line-color': 'hsl(0, 0%, 100%)',
            'line-width': [
              'interpolate',
              ['exponential', 1],
              ['zoom'],
              14,
              0,
              20,
              4,
            ],
            'line-gap-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              14,
              0.5,
              20,
              6,
            ],
          },
          'source-layer': 'roads',
        },
        {

          minzoom: 12,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'rail',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'road-rail',
          paint: {
            'line-color': 'hsl(204, 100%, 35%)',
            'line-opacity': [
              'interpolate',
              ['exponential', 1.5],
              ['zoom'],
              12,
              0,
              14,
              1,
            ],
            'line-width': [
              'interpolate',
              ['exponential', 1],
              ['zoom'],
              14,
              0.5,
              20,
              6,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 16,
          layout: {
            'icon-image': 'level-crossing',
            'icon-allow-overlap': true,
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            '==',
            ['get', 'type'],
            'level_crossing',
          ],
          type: 'symbol',
          source: 'roads',
          id: 'level-crossing',
          paint: {},
          'source-layer': 'roads',
        },
        {
          minzoom: 16,
          layout: {
            'symbol-placement': 'line',
            'icon-image': [
              'step',
              ['zoom'],
              // "oneway-white-small",
              'oneway',
              17,
              // "oneway-white-large"
              'oneway',
            ],
            'symbol-spacing': 200,
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'oneway'],
                true,
              ],
              [
                '==',
                ['get', 'oneway'],
                1,
              ],
              [
                '==',
                ['get', 'oneway'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              'all',
              [
                '!=',
                ['get', 'bridge'],
                true,
              ],
              [
                '!=',
                ['get', 'bridge'],
                1,
              ],
              [
                '!=',
                ['get', 'bridge'],
                'yes',
              ],
              [
                '!=',
                ['get', 'tunnel'],
                true,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                1,
              ],
              [
                '!=',
                ['get', 'tunnel'],
                'yes',
              ],
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'road-oneway-arrow-white',
          paint: {},
          'source-layer': 'roads',
        },
        {
          minzoom: 15,
          layout: {
            'icon-image': 'turning-circle',
            'icon-size': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              0.095,
              18,
              1,
            ],
            'icon-allow-overlap': true,
            'icon-ignore-placement': true,
            'icon-padding': 0,
            'icon-rotation-alignment': 'map',
          },
          metadata: {
            'mapbox:group': '1444855786460.0557',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'Point',
            ],
            [
              'match',
              ['get', 'type'],
              [
                'turning_circle',
                'turning_loop',
              ],
              true,
              false,
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'turning-feature',
          paint: {},
          'source-layer': 'roads',
        },
        {
          id: 'bridge-steps-bg',
          type: 'line',
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'steps',
            ],
          ],
          layout: {
            'line-join': 'round',
          },
          paint: {
            'line-width': {
              base: 1.5,
              stops: [
                [
                  15,
                  2,
                ],
                [
                  17,
                  4.6,
                ],
                [
                  18,
                  7,
                ],
              ],
            },
            'line-color': 'hsl(230, 17%, 82%)',
            'line-dasharray': [
              1,
              0,
            ],
            'line-opacity': {
              base: 1,
              stops: [
                [
                  14,
                  0,
                ],
                [
                  14.25,
                  0.75,
                ],
              ],
            },
          },
        },
        {
          minzoom: 11,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'road',
                'residential',
                'living_street',
                'unclassified',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-street-minor-low',
          paint: {
            'line-width': {
              base: 1.5,
              stops: [
                [
                  12.5,
                  0.5,
                ],
                [
                  14,
                  2,
                ],
                [
                  18,
                  18,
                ],
              ],
            },
            'line-color': 'hsl(0, 0%, 100%)',
            'line-opacity': {
              stops: [
                [
                  11.5,
                  0,
                ],
                [
                  12,
                  1,
                ],
                [
                  14,
                  1,
                ],
                [
                  14.01,
                  0,
                ],
              ],
            },
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-street-minor-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'primary_link',
                ],
                2,
                'track',
                1,
                0.5,
              ],
              18,
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'primary_link',
                ],
                18,
                12,
              ],
            ],
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'primary',
                'secondary',
                'tertiary',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-primary-secondary-tertiary-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              10,
              [
                'match',
                ['get', 'type'],
                'primary',
                1,
                [
                  'secondary',
                  'tertiary',
                ],
                0.75,
                0.75,
              ],
              18,
              2,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              [
                'match',
                ['get', 'type'],
                'primary',
                0.75,
                [
                  'secondary',
                  'tertiary',
                ],
                0.1,
                0.1,
              ],
              18,
              [
                'match',
                ['get', 'type'],
                'primary',
                32,
                [
                  'secondary',
                  'tertiary',
                ],
                26,
                26,
              ],
            ],
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              0,
              10,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            // [
            //   '<=',
            //   ['get', 'layer'],
            //   1,
            // ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-major-link-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
            // [
            //   '<=',
            //   ['get', 'layer'],
            //   1,
            // ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-motorway-trunk-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              10,
              1,
              18,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              0.75,
              18,
              32,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 14,
          layout: {},
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              '==',
              [
                'get',
                'type',
              ],
              'construction',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-construction',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              14,
              2,
              18,
              18,
            ],
            'line-color': 'hsl(230, 24%, 87%)',
            'line-dasharray': [
              'step',
              [
                'zoom',
              ],
              [
                'literal',
                [
                  0.4,
                  0.8,
                ],
              ],
              15,
              [
                'literal',
                [
                  0.3,
                  0.6,
                ],
              ],
              16,
              [
                'literal',
                [
                  0.2,
                  0.3,
                ],
              ],
              17,
              [
                'literal',
                [
                  0.2,
                  0.25,
                ],
              ],
              18,
              [
                'literal',
                [
                  0.15,
                  0.15,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'path',
                'footway',
                'cycleway',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-path',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              1,
              20,
              8,
            ],
            'line-color': 'hsl(38, 35%, 80%)',
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 14,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'steps',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-steps',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              15,
              1,
              16,
              1.6,
              18,
              6,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-dasharray': [
              'step',
              [
                'zoom',
              ],
              [
                'literal',
                [
                  1,
                  0,
                ],
              ],
              15,
              [
                'literal',
                [
                  1.75,
                  1,
                ],
              ],
              16,
              [
                'literal',
                [
                  1,
                  0.75,
                ],
              ],
              17,
              [
                'literal',
                [
                  0.3,
                  0.3,
                ],
              ],
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            // [
            //   '<=',
            //   ['get', 'layer'],
            //   1,
            // ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-major-link',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'motorway_link',
              'hsl(26, 100%, 68%)',
              'trunk_link',
              'hsl(46, 85%, 67%)',
              'hsl(46, 85%, 67%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'pedestrian',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-pedestrian',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              ['zoom'],
              14,
              1,
              20,
              8,
            ],
            'line-color': 'hsl(38, 35%, 80%)',
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                ],
                true,
                false,
              ],
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'track',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'service',
                ],
                true,
                false,
              ],
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-street-minor',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                ],
                2,
                'track',
                1,
                0.5,
              ],
              18,
              [
                'match',
                ['get', 'type'],
                [
                  'road',
                  'residential',
                  'living_street',
                  'unclassified',
                  'primary_link',
                ],
                18,
                12,
              ],
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'road',
              'hsl(35, 14%, 93%)',
              'hsl(0, 0%, 100%)',
            ],
            'line-opacity': [
              'step',
              [
                'zoom',
              ],
              0,
              14,
              1,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'primary',
                'secondary',
                'tertiary',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-primary-secondary-tertiary',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              [
                'match',
                ['get', 'type'],
                'primary',
                0.75,
                [
                  'secondary',
                  'tertiary',
                ],
                0.1,
                0.1,
              ],
              18,
              [
                'match',
                ['get', 'type'],
                'primary',
                32,
                [
                  'secondary',
                  'tertiary',
                ],
                26,
                26,
              ],
            ],
            'line-color': 'hsl(0, 0%, 100%)',
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 15,
          layout: {
            'symbol-placement': 'line',
            'icon-image': [
              'step',
              [
                'zoom',
              ],
              // 'oneway-small',
              'oneway',
              17,
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                ],
                // 'oneway-large',
                'oneway',
                // 'oneway-small',
                'oneway',
              ],
              18,
              // 'oneway-large',
              'oneway',
            ],
            'symbol-spacing': 200,
            'icon-rotation-alignment': 'map',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'any',
              [
                '==',
                ['get', 'oneway'],
                true,
              ],
              [
                '==',
                ['get', 'oneway'],
                1,
              ],
              [
                '==',
                ['get', 'oneway'],
                'yes',
              ],
            ],
            [
              'step',
              [
                'zoom',
              ],
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                ],
                true,
                false,
              ],
              16,
              [
                'match',
                ['get', 'type'],
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'road',
                  'primary_link',
                  'secondary_link',
                  'tertiary_link',
                  'residential',
                  'living_street',
                  'unclassified',
                  'path',
                  'pedestrian',
                  'track',
                  'service',
                ],
                true,
                false,
              ],
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'bridge-oneway-arrow-blue',
          paint: {},
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
            // [
            //   '<=',
            //   [
            //     'get',
            //     'layer',
            //   ],
            //   1,
            // ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-motorway-trunk',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              0.75,
              18,
              32,
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'motorway',
              'hsl(26, 100%, 68%)',
              'trunk',
              'hsl(46, 85%, 67%)',
              'hsl(46, 85%, 67%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 12,
          layout: {
            'line-cap': 'butt',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'rail',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-rail-case',
          paint: {
            'line-color': 'hsl(0, 0%, 100%)',
            'line-width': [
              'interpolate',
              ['exponential', 1],
              ['zoom'],
              14,
              0,
              20,
              4,
            ],
            'line-gap-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              14,
              0.5,
              20,
              6,
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 12,
          layout: {
            'line-cap': 'butt',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              '==',
              ['get', 'type'],
              'rail',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-rail',
          paint: {
            'line-color': 'hsl(204, 100%, 35%)',
            'line-opacity': [
              'interpolate',
              ['exponential', 1.5],
              ['zoom'],
              12,
              0,
              14,
              1,
            ],
            'line-width': [
              'interpolate',
              ['exponential', 1],
              ['zoom'],
              14,
              0.5,
              20,
              6,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            // [
            //   '>=',
            //   [
            //     'get',
            //     'layer',
            //   ],
            //   2,
            // ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-major-link-2-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.75,
              20,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            // [
            //   '>=',
            //   [
            //     'get',
            //     'layer',
            //   ],
            //   2,
            // ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-motorway-trunk-2-case',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              10,
              1,
              18,
              2,
            ],
            'line-color': 'hsl(0, 0%, 100%)',
            'line-gap-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              0.75,
              18,
              32,
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            // [
            //   '>=',
            //   [
            //     'get',
            //     'layer',
            //   ],
            //   2,
            // ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-major-link-2',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              12,
              0.5,
              14,
              2,
              18,
              18,
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'motorway_link',
              'hsl(26, 100%, 68%)',
              'trunk_link',
              'hsl(46, 85%, 67%)',
              'hsl(46, 85%, 67%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          // minzoom: 13,
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            // [
            //   '>=',
            //   [
            //     'get',
            //     'layer',
            //   ],
            //   2,
            // ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
              ],
              true,
              false,
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'bridge-motorway-trunk-2',
          paint: {
            'line-width': [
              'interpolate',
              [
                'exponential',
                1.5,
              ],
              [
                'zoom',
              ],
              5,
              0.75,
              18,
              32,
            ],
            'line-color': [
              'match',
              ['get', 'type'],
              'motorway',
              'hsl(26, 100%, 68%)',
              'trunk',
              'hsl(46, 85%, 67%)',
              'hsl(46, 85%, 67%)',
            ],
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 16,
          layout: {
            'symbol-placement': 'line',
            'icon-image': [
              'step',
              ['zoom'],
              // 'oneway-white-small',
              'oneway',
              17,
              // 'oneway-white-large',
              'oneway',
            ],
            'symbol-spacing': 200,
          },
          metadata: {
            'mapbox:group': '1444855799204.86',
          },
          filter: [
            'all',
            [
              '==',
              ['geometry-type'],
              'LineString',
            ],
            [
              'any',
              [
                '==',
                ['get', 'bridge'],
                true,
              ],
              [
                '==',
                ['get', 'bridge'],
                1,
              ],
              [
                '==',
                ['get', 'bridge'],
                'yes',
              ],
            ],
            [
              'match',
              ['get', 'type'],
              [
                'motorway',
                'trunk',
                'motorway_link',
                'trunk_link',
              ],
              true,
              false,
            ],
            [
              'any',
              [
                '==',
                ['get', 'oneway'],
                true,
              ],
              [
                '==',
                ['get', 'oneway'],
                1,
              ],
              [
                '==',
                ['get', 'oneway'],
                'yes',
              ],
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'bridge-oneway-arrow-white',
          paint: {},
          'source-layer': 'roads',
        },
        {
          minzoom: 13,
          layout: {
            'line-join': 'round',
          },
          filter: [
            'all',
            [
              '==',
              '$type',
              'LineString',
            ],
            [
              '==',
              'type',
              'aerialway',
            ],
          ],
          type: 'line',
          source: 'roads',
          id: 'aerialway',
          paint: {
            'line-color': 'hsl(230, 10%, 74%)',
            'line-width': {
              base: 1.5,
              stops: [
                [
                  14,
                  0.5,
                ],
                [
                  20,
                  1,
                ],
              ],
            },
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 15,
          layout: {},
          type: 'line',
          source: 'buildings',
          id: 'building-roof-line',
          filter: [
            'all',
            [
              '==',
              '$type',
              'Polygon',
            ],
            [
              '==',
              'type',
              'roof',
            ],
          ],
          paint: {
            'line-color': 'hsl(35, 6%, 79%)',
            'line-width': {
              base: 1.5,
              stops: [
                [
                  15,
                  0.75,
                ],
                [
                  20,
                  3,
                ],
              ],
            },
            'line-opacity': {
              base: 1,
              stops: [
                [
                  15.5,
                  0,
                ],
                [
                  16,
                  0.5,
                ],
              ],
            },
          },
          'source-layer': 'buildings',
        },
        {
          minzoom: 15,
          layout: {},
          type: 'fill',
          source: 'buildings',
          id: 'building-roof',
          filter: [
            'all',
            [
              '==',
              '$type',
              'Polygon',
            ],
            [
              '==',
              'type',
              'roof',
            ],
          ],
          paint: {
            'fill-color': {
              base: 1,
              stops: [
                [
                  15,
                  'hsl(35, 11%, 88%)',
                ],
                [
                  16,
                  'hsl(35, 8%, 85%)',
                ],
              ],
            },
            'fill-opacity': {
              base: 1,
              stops: [
                [
                  15.5,
                  0,
                ],
                [
                  16,
                  0.5,
                ],
              ],
            },
            'fill-outline-color': 'hsl(35, 6%, 79%)',
          },
          'source-layer': 'buildings',
        },
        {
          id: 'admin-1-boundary-bg',
          type: 'line',
          metadata: {
            'mapbox:group': '1444934295202.7542',
          },
          source: 'admin',
          'source-layer': 'admin',
          filter: [
            'all',
            [
              '==',
              ['get', 'admin_level'],
              4,
            ],
            // [
            //   '==',
            //   ['get', 'maritime'],
            //   'false',
            // ],
          ],
          layout: {
            'line-join': 'bevel',
          },
          paint: {
            'line-color': [
              'interpolate',
              ['linear'],
              ['zoom'],
              8,
              'hsl(35, 12%, 89%)',
              16,
              'hsl(230, 49%, 90%)',
            ],
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              3.75,
              12,
              5.5,
            ],
            'line-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              0,
              8,
              0.75,
            ],
            'line-dasharray': [
              1,
              0,
            ],
            'line-translate': [
              0,
              0,
            ],
            'line-blur': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              0,
              8,
              3,
            ],
          },
        },
        {
          minzoom: 1,
          layout: {},
          metadata: {
            'mapbox:group': '1444934295202.7542',
          },
          filter: [
            'all',
            [
              '==',
              ['get', 'admin_level'],
              2,
            ],
            [
              '==',
              ['get', 'maritime'],
              'false',
            ],
          ],
          type: 'line',
          source: 'admin',
          id: 'admin-0-boundary-bg',
          paint: {
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              3.5,
              10,
              8,
            ],
            'line-color': [
              'interpolate',
              ['linear'],
              ['zoom'],
              6,
              'hsl(35, 12%, 89%)',
              8,
              'hsl(230, 49%, 90%)',
            ],
            'line-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              0,
              4,
              0.5,
            ],
            'line-translate': [
              0,
              0,
            ],
            'line-blur': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              0,
              10,
              2,
            ],
          },
          'source-layer': 'admin',
        },
        {
          id: 'admin-1-boundary',
          type: 'line',
          metadata: {
            'mapbox:group': '1444934295202.7542',
          },
          source: 'admin',
          'source-layer': 'admin',
          filter: [
            'all',
            [
              '==',
              ['get', 'admin_level'],
              4,
            ],
            // [
            //   '==',
            //   ['get', 'maritime'],
            //   'false',
            // ],
          ],
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-dasharray': [
              'step',
              ['zoom'],
              [
                'literal',
                [
                  2,
                  0,
                ],
              ],
              7,
              [
                'literal',
                [
                  2,
                  2,
                  6,
                  2,
                ],
              ],
            ],
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              7,
              0.75,
              12,
              1.5,
            ],
            'line-opacity': [
              'interpolate',
              ['linear'],
              ['zoom'],
              2,
              0,
              3,
              1,
            ],
            'line-color': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              'hsl(230, 14%, 77%)',
              7,
              'hsl(230, 8%, 62%)',
            ],
          },
        },
        {
          minzoom: 1,
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          metadata: {
            'mapbox:group': '1444934295202.7542',
          },
          filter: [
            'all',
            [
              '==',
              ['get', 'admin_level'],
              2,
            ],
            [
              '==',
              ['get', 'disputed'],
              'false',
            ],
            [
              '==',
              ['get', 'maritime'],
              'false',
            ],
          ],
          type: 'line',
          source: 'admin',
          id: 'admin-0-boundary',
          paint: {
            'line-color': 'hsl(230, 8%, 51%)',
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              0.5,
              10,
              2,
            ],
          },
          'source-layer': 'admin',
        },
        {
          minzoom: 1,
          layout: {
            'line-join': 'round',
          },
          metadata: {
            'mapbox:group': '1444934295202.7542',
          },
          filter: [
            'all',
            [
              '==',
              ['get', 'disputed'],
              'true',
            ],
            [
              '==',
              ['get', 'admin_level'],
              2,
            ],
            [
              '==',
              ['get', 'maritime'],
              'false',
            ],
          ],
          type: 'line',
          source: 'admin',
          id: 'admin-0-boundary-disputed',
          paint: {
            'line-dasharray': [
              1.5,
              1.5,
            ],
            'line-color': 'hsl(230, 8%, 51%)',
            'line-width': [
              'interpolate',
              ['linear'],
              ['zoom'],
              3,
              0.5,
              10,
              2,
            ],
          },
          'source-layer': 'admin',
        },
        {
          id: 'building-number-label',
          type: 'symbol',
          source: 'housenumbers',
          'source-layer': 'housenumbers',
          minzoom: 17,
          layout: {
            'text-field': '{type}',
            'text-font': [
              'Circular Std Book Italic',
            ],
            'text-padding': 4,
            'text-max-width': 7,
            'text-size': 9.5,
          },
          paint: {
            'text-color': 'hsl(35, 2%, 69%)',
            'text-halo-color': 'hsl(35, 8%, 85%)',
            'text-halo-width': 0.5,
            'text-halo-blur': 0,
          },
        },
        {
          minzoom: 12,
          layout: {
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-font': [
              'Circular Std Book Italic',
            ],
            'symbol-placement': 'line',
            'text-pitch-alignment': 'viewport',
            'text-max-angle': 30,
            'text-size': {
              base: 1,
              stops: [
                [
                  13,
                  12,
                ],
                [
                  18,
                  16,
                ],
              ],
            },
          },
          filter: [
            'in',
            'type',
            'canal',
            'river',
          ],
          type: 'symbol',
          source: 'waterways',
          id: 'waterway-label',
          paint: {
            'text-halo-width': 0.5,
            'text-halo-color': 'hsl(196, 80%, 70%)',
            'text-color': 'hsl(230, 48%, 44%)',
            'text-halo-blur': 0.5,
          },
          'source-layer': 'waterways',
        },
        {
          minzoom: 15,
          layout: {
            'text-size': {
              base: 1,
              stops: [
                [
                  15,
                  10,
                ],
                [
                  20,
                  13,
                ],
              ],
            },
            'text-max-angle': 30,
            'symbol-spacing': 250,
            'text-font': [
              'Circular Std Book',
            ],
            'symbol-placement': 'line',
            'text-padding': 1,
            'text-rotation-alignment': 'map',
            'text-pitch-alignment': 'viewport',
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-letter-spacing': 0.01,
          },
          metadata: {
            'mapbox:group': '1444933721429.3076',
          },
          filter: [
            'all',
            [
              '!in',
              'type',
              'golf',
              'primary_link',
              'secondary_link',
              'tertiary_link',
              'residential',
              'living_street',
              'motorway',
              'pedestrian',
              'footway',
              'primary',
              'secondary',
              'road',
              'street_limited',
              'tertiary',
              'trunk',
            ],
            [
              '==',
              '$type',
              'LineString',
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'road-label-small',
          paint: {
            'text-color': 'hsl(0, 0%, 0%)',
            'text-halo-color': 'hsl(0, 0%, 100%)',
            'text-halo-width': 1.25,
            'text-halo-blur': 1,
          },
          'source-layer': 'roads',
        },
        {
          minzoom: 11,
          layout: {
            'text-size': {
              base: 1,
              stops: [
                [
                  11,
                  10,
                ],
                [
                  20,
                  14,
                ],
              ],
            },
            'text-max-angle': 30,
            'symbol-spacing': 250,
            'text-font': [
              'Circular Std Book',
            ],
            'symbol-placement': 'line',
            'text-padding': 1,
            'text-rotation-alignment': 'map',
            'text-pitch-alignment': 'viewport',
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-letter-spacing': 0.01,
          },
          metadata: {
            'mapbox:group': '1444933721429.3076',
          },
          filter: [
            'all',
            [
              '==',
              '$type',
              'LineString',
            ],
            [
              'in',
              'type',
              'primary_link',
              'secondary_link',
              'tertiary_link',
              'residential',
              'living_street',
              'pedestrian',
              'footway',
              'roads',
              'street_limited',
            ],
          ],
          type: 'symbol',
          source: 'roads',
          id: 'road-label-medium',
          paint: {
            'text-color': 'hsl(0, 0%, 0%)',
            'text-halo-color': 'hsl(0, 0%, 100%)',
            'text-halo-width': 1,
          },
          'source-layer': 'roads',
        },
        {
          id: 'road-label-large',
          type: 'symbol',
          metadata: {
            'mapbox:group': '1444933721429.3076',
          },
          source: 'roads',
          'source-layer': 'roads',
          filter: [
            'in',
            'type',
            'motorway',
            'primary',
            'secondary',
            'tertiary',
            'trunk',
          ],
          layout: {
            'text-size': {
              base: 1,
              stops: [
                [
                  9,
                  10,
                ],
                [
                  20,
                  16,
                ],
              ],
            },
            'text-max-angle': 30,
            'symbol-spacing': 250,
            'text-font': [
              'Circular Std Book',
            ],
            'symbol-placement': 'line',
            'text-padding': 1,
            'text-rotation-alignment': 'map',
            'text-pitch-alignment': 'viewport',
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-letter-spacing': 0.01,
          },
          paint: {
            'text-color': 'hsl(0, 0%, 0%)',
            'text-halo-color': 'hsla(0, 0%, 100%, 0.75)',
            'text-halo-width': 1,
            'text-halo-blur': 1,
          },
        },
        {
          minzoom: 14,
          layout: {
            'text-size': 10,
            'icon-image': '{type}-11',
            'text-font': [
              'Circular Std Medium',
            ],
            'text-offset': [0, 0.65],
            'text-padding': 1,
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-anchor': 'top',
          },
          filter: [
            'all',
            [
              '!=',
              ['get', 'type'],
              'fuel',
            ],
          ],
          type: 'symbol',
          source: 'amenities',
          id: 'poi-label',
          paint: {
            'icon-opacity': [
              'step',
              ['zoom'],
              [
                'step',
                ['get', 'sizerank'],
                0,
                5,
                1,
              ],
              17,
              [
                'step',
                ['get', 'sizerank'],
                0,
                13,
                1,
              ],
            ],
            'text-halo-color': 'hsl(0, 0%, 100%)',
            'text-halo-width': 0.5,
            'text-halo-blur': 0.5,
            'text-color': [
              'step',
              ['zoom'],
              [
                'step',
                ['get', 'sizerank'],
                [
                  'match',
                  ['get', 'type'],
                  'food_and_drink',
                  'hsl(22, 55%, 55%)',
                  'park_like',
                  'hsl(100, 45%, 37%)',
                  'education',
                  'hsl(51, 40%, 40%)',
                  'medical',
                  'hsl(340, 30%, 52%)',
                  'hsl(26, 20%, 42%)',
                ],
                5,
                [
                  'match',
                  ['get', 'type'],
                  'food_and_drink',
                  'hsl(22, 85%, 38%)',
                  'park_like',
                  'hsl(100, 100%, 20%)',
                  'education',
                  'hsl(51, 100%, 20%)',
                  'medical',
                  'hsl(340, 39%, 42%)',
                  'hsl(26, 25%, 32%)',
                ],
              ],
              17,
              [
                'step',
                ['get', 'sizerank'],
                [
                  'match',
                  ['get', 'type'],
                  'food_and_drink',
                  'hsl(22, 55%, 55%)',
                  'park_like',
                  'hsl(100, 45%, 37%)',
                  'education',
                  'hsl(51, 40%, 40%)',
                  'medical',
                  'hsl(340, 30%, 52%)',
                  'hsl(26, 20%, 42%)',
                ],
                13,
                [
                  'match',
                  ['get', 'class'],
                  'food_and_drink',
                  'hsl(22, 85%, 38%)',
                  'park_like',
                  'hsl(100, 100%, 20%)',
                  'education',
                  'hsl(51, 100%, 20%)',
                  'medical',
                  'hsl(340, 39%, 42%)',
                  'hsl(26, 25%, 32%)',
                ],
              ],
            ],
          },
          'source-layer': 'amenities',
        },
        {
          minzoom: 10,
          layout: {
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-transform': 'uppercase',
            'text-font': [
              'Circular Std Medium',
            ],
            'text-letter-spacing': [
              'match',
              ['get', 'type'],
              'suburb',
              0.15,
              [
                'quarter',
                'neighborhood',
              ],
              0.1,
              0.1,
            ],
            'text-max-width': 7,
            'text-padding': 3,
            'text-size': [
              'interpolate',
              [
                'cubic-bezier',
                0.5,
                0,
                1,
                1,
              ],
              ['zoom'],
              11,
              [
                'match',
                ['get', 'type'],
                'suburb',
                11,
                [
                  'quarter',
                  'neighborhood',
                ],
                10.5,
                10.5,
              ],
              15,
              [
                'match',
                ['get', 'type'],
                'suburb',
                17,
                [
                  'quarter',
                  'neighborhood',
                ],
                16,
                16,
              ],
            ],
          },
          maxzoom: 15,
          filter: [
            'all',
            [
              '==',
              [
                'get',
                'type',
              ],
              'suburb',
            ],
          ],
          type: 'symbol',
          source: 'places',
          id: 'settlement-subdivision-label',
          paint: {
            'text-halo-color': 'hsl(0, 0%, 100%)',
            'text-halo-width': 1,
            'text-color': 'hsl(230, 29%, 35%)',
            'text-halo-blur': 0.5,
          },
          'source-layer': 'places',
        },
        {
          layout: {
            'text-line-height': 1.1,
            'text-size': [
              'interpolate',
              [
                'cubic-bezier',
                0.2,
                0,
                0.9,
                1,
              ],
              ['zoom'],
              3,
              [
                'step',
                ['get', 'symbolrank'],
                12,
                9,
                11,
                10,
                10.5,
                12,
                9.5,
                14,
                8.5,
                16,
                6.5,
                17,
                4,
              ],
              15,
              [
                'step',
                ['get', 'symbolrank'],
                28,
                9,
                26,
                10,
                23,
                11,
                21,
                12,
                20,
                13,
                19,
                15,
                17,
              ],
            ],
            'icon-image': [
              'case',
              [
                '==',
                ['get', 'capital'],
                2,
              ],
              'border-dot-13',
              [
                'step',
                ['get', 'symbolrank'],
                'dot-11',
                9,
                'dot-10',
                11,
                'dot-9',
              ],
            ],
            'text-font': [
              'Circular Std Medium',
            ],
            'text-justify': [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'text_anchor'],
                [
                  'bottom',
                  'top',
                ],
                'center',
                [
                  'left',
                  'bottom-left',
                  'top-left',
                ],
                'left',
                [
                  'right',
                  'bottom-right',
                  'top-right',
                ],
                'right',
                'center',
              ],
              8,
              'center',
            ],
            'text-offset': [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'capital'],
                2,
                [
                  'match',
                  ['get', 'text_anchor'],
                  'bottom',
                  [
                    'literal',
                    [
                      0,
                      -0.3,
                    ],
                  ],
                  'bottom-left',
                  [
                    'literal',
                    [
                      0.3,
                      -0.1,
                    ],
                  ],
                  'left',
                  [
                    'literal',
                    [
                      0.45,
                      0.1,
                    ],
                  ],
                  'top-left',
                  [
                    'literal',
                    [
                      0.3,
                      0.1,
                    ],
                  ],
                  'top',
                  [
                    'literal',
                    [
                      0,
                      0.3,
                    ],
                  ],
                  'top-right',
                  [
                    'literal',
                    [
                      -0.3,
                      0.1,
                    ],
                  ],
                  'right',
                  [
                    'literal',
                    [
                      -0.45,
                      0,
                    ],
                  ],
                  'bottom-right',
                  [
                    'literal',
                    [
                      -0.3,
                      -0.1,
                    ],
                  ],
                  [
                    'literal',
                    [
                      0,
                      -0.3,
                    ],
                  ],
                ],
                [
                  'match',
                  ['get', 'text_anchor'],
                  'bottom',
                  [
                    'literal',
                    [
                      0,
                      -0.25,
                    ],
                  ],
                  'bottom-left',
                  [
                    'literal',
                    [
                      0.2,
                      -0.05,
                    ],
                  ],
                  'left',
                  [
                    'literal',
                    [
                      0.4,
                      0.05,
                    ],
                  ],
                  'top-left',
                  [
                    'literal',
                    [
                      0.2,
                      0.05,
                    ],
                  ],
                  'top',
                  [
                    'literal',
                    [
                      0,
                      0.25,
                    ],
                  ],
                  'top-right',
                  [
                    'literal',
                    [
                      -0.2,
                      0.05,
                    ],
                  ],
                  'right',
                  [
                    'literal',
                    [
                      -0.4,
                      0.05,
                    ],
                  ],
                  'bottom-right',
                  [
                    'literal',
                    [
                      -0.2,
                      -0.05,
                    ],
                  ],
                  [
                    'literal',
                    [
                      0,
                      -0.25,
                    ],
                  ],
                ],
              ],
              8,
              [
                'literal',
                [
                  0,
                  0,
                ],
              ],
            ],
            'text-anchor': [
              'step',
              ['zoom'],
              ['get', 'text_anchor'],
              8,
              'center',
            ],
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-max-width': 7,
          },
          maxzoom: 15,
          filter: [
            'all',
            [
              'match',
              ['get', 'type'],
              [
                'village',
                'town',
                'hamlet',
                'city',
              ],
              true,
              false,
            ],
            [
              'step',
              ['zoom'],
              true,
              13,
              [
                '>=',
                [
                  'get',
                  'symbolrank',
                ],
                11,
              ],
              14,
              [
                '>=',
                [
                  'get',
                  'symbolrank',
                ],
                13,
              ],
            ],
          ],
          type: 'symbol',
          source: 'places',
          id: 'settlement-label',
          paint: {
            'text-color': 'hsl(0, 0%, 0%)',
            'text-halo-color': 'hsl(0, 0%, 100%)',
            'text-halo-width': 1,
            'icon-opacity': [
              'step',
              ['zoom'],
              1,
              8,
              0,
            ],
            'text-halo-blur': 1,
          },
          'source-layer': 'places',
        },
        {
          minzoom: 3,
          layout: {
            'text-size': [
              'interpolate',
              [
                'cubic-bezier',
                0.85,
                0.7,
                0.65,
                1,
              ],
              ['zoom'],
              4,
              [
                'step',
                ['get', 'symbolrank'],
                10,
                6,
                9.5,
                7,
                9,
              ],
              9,
              [
                'step',
                ['get', 'symbolrank'],
                24,
                6,
                18,
                7,
                14,
              ],
            ],
            'text-transform': 'uppercase',
            'text-font': [
              'Circular Std Bold',
            ],
            'text-field': [
              'step',
              ['zoom'],
              [
                'step',
                ['get', 'symbolrank'],
                [
                  'coalesce',
                  ['get', langName],
                  ['get', 'name'],
                ],
                5,
                [
                  'coalesce',
                  ['get', 'abbr'],
                  ['get', langName],
                  ['get', 'name'],
                ],
              ],
              5,
              [
                'coalesce',
                ['get', langName],
                ['get', 'name'],
              ],
            ],
            'text-letter-spacing': 0.15,
            'text-max-width': 6,
          },
          maxzoom: 9,
          filter: [
            '==',
            ['get', 'type'],
            'state',
          ],
          type: 'symbol',
          source: 'places',
          id: 'state-label',
          paint: {
            'text-color': 'hsl(0, 0%, 0%)',
            'text-halo-color': 'hsl(0, 0%, 100%)',
            'text-halo-width': 1,
          },
          'source-layer': 'places',
        },
        {
          minzoom: 1,
          layout: {
            'text-line-height': 1.1,
            'text-size': [
              'interpolate',
              [
                'cubic-bezier',
                0.2,
                0,
                0.7,
                1,
              ],
              ['zoom'],
              1,
              [
                'step',
                ['get', 'symbolrank'],
                11,
                4,
                9,
                5,
                8,
              ],
              9,
              [
                'step',
                ['get', 'symbolrank'],
                28,
                4,
                22,
                5,
                21,
              ],
            ],
            'icon-image': 'dot-11',
            'text-font': [
              'Circular Std Bold',
            ],
            'text-justify': [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'text_anchor'],
                [
                  'bottom',
                  'top',
                ],
                'center',
                [
                  'left',
                  'bottom-left',
                  'top-left',
                ],
                'left',
                [
                  'right',
                  'bottom-right',
                  'top-right',
                ],
                'right',
                'center',
              ],
              7,
              'center',
            ],
            'text-offset': [
              'step',
              ['zoom'],
              [
                'match',
                ['get', 'text_anchor'],
                'bottom',
                [
                  'literal',
                  [
                    0,
                    -0.25,
                  ],
                ],
                'bottom-left',
                [
                  'literal',
                  [
                    0.2,
                    -0.05,
                  ],
                ],
                'left',
                [
                  'literal',
                  [
                    0.4,
                    0.05,
                  ],
                ],
                'top-left',
                [
                  'literal',
                  [
                    0.2,
                    0.05,
                  ],
                ],
                'top',
                [
                  'literal',
                  [
                    0,
                    0.25,
                  ],
                ],
                'top-right',
                [
                  'literal',
                  [
                    -0.2,
                    0.05,
                  ],
                ],
                'right',
                [
                  'literal',
                  [
                    -0.4,
                    0.05,
                  ],
                ],
                'bottom-right',
                [
                  'literal',
                  [
                    -0.2,
                    -0.05,
                  ],
                ],
                [
                  'literal',
                  [
                    0,
                    -0.25,
                  ],
                ],
              ],
              7,
              [
                'literal',
                [
                  0,
                  0,
                ],
              ],
            ],
            'text-anchor': [
              'step',
              [
                'zoom',
              ],
              [
                'coalesce',
                ['get', 'text_anchor'],
                'center',
              ],
              7,
              'center',
            ],
            'text-field': [
              'coalesce',
              ['get', langName],
              ['get', 'name'],
            ],
            'text-max-width': 6,
          },
          maxzoom: 10,
          filter: [
            '==',
            ['get', 'type'],
            'country',
          ],
          type: 'symbol',
          source: 'places',
          id: 'country-label',
          paint: {
            'icon-opacity': [
              'step',
              ['zoom'],
              [
                'case',
                ['has', 'text_anchor'],
                1,
                0,
              ],
              7,
              0,
            ],
            'text-color': 'hsl(0, 0%, 0%)',
            'text-halo-color': [
              'interpolate',
              ['linear'],
              ['zoom'],
              2,
              'rgba(255,255,255,0.75)',
              3,
              'hsl(0, 0%, 100%)',
            ],
            'text-halo-width': 1.25,
          },
          'source-layer': 'places',
        },
      ],
    }
    ,
  };
}
