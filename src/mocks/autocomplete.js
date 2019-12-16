const addresses = [
  {
    _source: {
      multiLang: {
        fr: "Ruelle des Myosotis - Rue d'Awans, Liège",
        nl: "Ruelle des Myosotis - Rue d'Awans, Liège",
        de: "Ruelle des Myosotis - Rue d'Awans, Liège",
        en: "Ruelle des Myosotis - Rue d'Awans, Liège",
      },
      geo: {
        lat: 50.6348248789156,
        lon: 5.53887929740711,
      },
      house: false,
      score: 8.645089,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: "Rue du Placard - Rue d'Anderlues, Morlanwelz",
        nl: "Rue du Placard - Rue d'Anderlues, Morlanwelz",
        de: "Rue du Placard - Rue d'Anderlues, Morlanwelz",
        en: "Rue du Placard - Rue d'Anderlues, Morlanwelz",
      },
      geo: {
        lat: 50.4575129700627,
        lon: 4.27236613440572,
      },
      house: false,
      score: 8.645089,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: "Rue d'Ormont - Rue de Barbissart, Tournai",
        nl: "Rue d'Ormont - Rue de Barbissart, Tournai",
        de: "Rue d'Ormont - Rue de Barbissart, Tournai",
        en: "Rue d'Ormont - Rue de Barbissart, Tournai",
      },
      geo: {
        lat: 50.6482713195512,
        lon: 3.36261499509296,
      },
      house: false,
      score: 8.645089,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: 'Rue des Déportés - Rue de la Festingue, Tournai',
        nl: 'Rue des Déportés - Rue de la Festingue, Tournai',
        de: 'Rue des Déportés - Rue de la Festingue, Tournai',
        en: 'Rue des Déportés - Rue de la Festingue, Tournai',
      },
      geo: {
        lat: 50.6525146442452,
        lon: 3.24656845516034,
      },
      house: false,
      score: 8.608739,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: "Rue du Bois d'Angre - Rue des Combattants, Thuin",
        nl: "Rue du Bois d'Angre - Rue des Combattants, Thuin",
        de: "Rue du Bois d'Angre - Rue des Combattants, Thuin",
        en: "Rue du Bois d'Angre - Rue des Combattants, Thuin",
      },
      geo: {
        lat: 50.3548514209583,
        lon: 4.1844916007776,
      },
      house: false,
      score: 8.608739,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: 'Rue de Moignelée - Rue de Fleurus, Namur',
        nl: 'Rue de Moignelée - Rue de Fleurus, Namur',
        de: 'Rue de Moignelée - Rue de Fleurus, Namur',
        en: 'Rue de Moignelée - Rue de Fleurus, Namur',
      },
      geo: {
        lat: 50.4466047563012,
        lon: 4.58347981317614,
      },
      house: false,
      score: 8.439627,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: 'Rue de Bossière - Rue des Mésanges, Namur',
        nl: 'Rue de Bossière - Rue des Mésanges, Namur',
        de: 'Rue de Bossière - Rue des Mésanges, Namur',
        en: 'Rue de Bossière - Rue des Mésanges, Namur',
      },
      geo: {
        lat: 50.4879159198824,
        lon: 4.70572981906517,
      },
      house: false,
      score: 8.439627,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: "Rue de Borlez - Rue Barbe d'Or, Waremme",
        nl: "Rue de Borlez - Rue Barbe d'Or, Waremme",
        de: "Rue de Borlez - Rue Barbe d'Or, Waremme",
        en: "Rue de Borlez - Rue Barbe d'Or, Waremme",
      },
      geo: {
        lat: 50.6182800412799,
        lon: 5.24880472190948,
      },
      house: false,
      score: 8.439627,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: 'Rue de Pellaines - Rue des Alliés, Waremme',
        nl: 'Rue de Pellaines - Rue des Alliés, Waremme',
        de: 'Rue de Pellaines - Rue des Alliés, Waremme',
        en: 'Rue de Pellaines - Rue des Alliés, Waremme',
      },
      geo: {
        lat: 50.7297967738338,
        lon: 5.0077802585753,
      },
      house: false,
      score: 8.439627,
      maxScore: 8.645089,
    },
  },
  {
    _source: {
      multiLang: {
        fr: 'Rue des Noyers - Rue du Centre, Liège',
        nl: 'Rue des Noyers - Rue du Centre, Liège',
        de: 'Rue des Noyers - Rue du Centre, Liège',
        en: 'Rue des Noyers - Rue du Centre, Liège',
      },
      geo: {
        lat: 50.6367424458073,
        lon: 5.53807814493814,
      },
      house: false,
      score: 8.439627,
      maxScore: 8.645089,
    },
  },
];

const stations = [
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Schuman',
    _score: 12.332489,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Schuman Brussel Brus Brux',
      gtfs_name: 'Bruxelles-Schuman',
      multiLang: {
        fr: 'Bruxelles-Schuman',
        nl: 'Brussel-Schuman',
        de: 'Brus./Brux.-Schuman',
        en: 'Brux./Brus.-Schuman',
      },
      id: [
        'S8811916',
        '8811916_2',
        '8811916_1',
        '8811916_4',
        '8811916_3',
        '8811916',
      ],
      geo: [
        {
          lat: 50.84328,
          lon: 4.380725,
        },
        {
          lat: 50.84328,
          lon: 4.380725,
        },
        {
          lat: 50.84328,
          lon: 4.380725,
        },
        {
          lat: 50.84328,
          lon: 4.380725,
        },
        {
          lat: 50.84328,
          lon: 4.380725,
        },
        {
          lat: 50.84328,
          lon: 4.380725,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Nord',
    _score: 12.2054825,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Nord Brussel Noord Brus Brux',
      gtfs_name: 'Bruxelles-Nord',
      multiLang: {
        fr: 'Bruxelles-Nord',
        nl: 'Brussel-Noord',
        de: 'Brus.-Noord / Brux.-Nord',
        en: 'Brux.-Nord/Brus.-Noord',
      },
      id: [
        'S8812005',
        '8812005_9',
        '8812005_10',
        '8812005_6',
        '8812005_5',
        '8812005_7',
        '8812005_2',
        '8812005_8',
        '8812005_11',
        '8812005_4',
        '8812005_12',
        '8812005_1',
        '8812005_3',
        '8812005',
      ],
      geo: [
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
        {
          lat: 50.85966,
          lon: 4.36085,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Congres',
    _score: 12.2054825,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Congres Brussel Brus Brux Congr',
      gtfs_name: 'Bruxelles-Congres',
      multiLang: {
        fr: 'Bruxelles-Congres',
        nl: 'Brussel-Congres',
        de: 'Brus.-/ Brux.-Congr',
        en: 'Brux.-/ Brus.-Congr',
      },
      id: [
        'S8813045',
        '8813045_5',
        '8813045_6',
        '8813045',
      ],
      geo: [
        {
          lat: 50.85207,
          lon: 4.362051,
        },
        {
          lat: 50.85207,
          lon: 4.362051,
        },
        {
          lat: 50.85207,
          lon: 4.362051,
        },
        {
          lat: 50.85207,
          lon: 4.362051,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Midi',
    _score: 12.2054825,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Midi Brussel Zuid Brus Brux',
      gtfs_name: 'Bruxelles-Midi',
      multiLang: {
        fr: 'Bruxelles-Midi',
        nl: 'Brussel-Zuid',
        de: 'Brus.-Zuid / Brux.-Midi',
        en: 'Brux.-Midi/Brus.-Zuid',
      },
      id: [
        'S8814001',
        '8814001_11',
        '8814001_10',
        '8814001_18',
        '8814001_20',
        '8814001_15',
        '8814001_17',
        '8814001_12',
        '8814001_14',
        '8814001_16',
        '8814001_9',
        '8814001_13',
        '8814001_19',
        '8814001_8',
        '8814001_5',
        '8814001_21',
        '8814001_7',
        '8814001_6',
        '8814001_4',
        '8814001_3',
        '8814001',
      ],
      geo: [
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
        {
          lat: 50.83571,
          lon: 4.33653,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Ouest',
    _score: 12.2054825,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Ouest Brussel West Brus Brux',
      gtfs_name: 'Bruxelles-Ouest',
      multiLang: {
        fr: 'Bruxelles-Ouest',
        nl: 'Brussel-West',
        de: 'Brus.-West / Brux.-Ouest',
        en: 'Brux.-Ouest/Brus.-West',
      },
      id: [
        'S8815040',
        '8815040_1',
        '8815040_2',
        '8815040',
      ],
      geo: [
        {
          lat: 50.84856,
          lon: 4.32104,
        },
        {
          lat: 50.84856,
          lon: 4.32104,
        },
        {
          lat: 50.84856,
          lon: 4.32104,
        },
        {
          lat: 50.84856,
          lon: 4.32104,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Luxembourg',
    _score: 12.081066,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Luxembourg Brussel Luxemburg Brus Brux Luxemb',
      gtfs_name: 'Bruxelles-Luxembourg',
      multiLang: {
        fr: 'Bruxelles-Luxembourg',
        nl: 'Brussel-Luxemburg',
        de: 'Brus./Brux.-Luxemb.',
        en: 'Brux./Brus.-Luxemb.',
      },
      id: [
        'S8811304',
        '8811304_1',
        '8811304_3',
        '8811304_2',
        '8811304_4',
        '8811304_5',
        '8811304_6',
        '8811304',
      ],
      geo: [
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
        {
          lat: 50.83894,
          lon: 4.373676,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Central',
    _score: 12.081066,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Central Brussel Centraal Brus Brux Centr',
      gtfs_name: 'Bruxelles-Central',
      multiLang: {
        fr: 'Bruxelles-Central',
        nl: 'Brussel-Centraal',
        de: 'Brus.-/ Brux-Centr.',
        en: 'Brux.-/ Brus-Centr.',
      },
      id: [
        'S8813003',
        '8813003_4',
        '8813003_6',
        '8813003_5',
        '8813003_3',
        '8813003_1',
        '8813003_2',
        '8813003',
      ],
      geo: [
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
        {
          lat: 50.84565,
          lon: 4.356804,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Bruxelles-Chapelle',
    _score: 11.959162,
    _source: {
      agencyId: 'nmbs',
      text: 'Bruxelles Chapelle Brussel Kapellekerk Brus Kap Brux Chap',
      gtfs_name: 'Bruxelles-Chapelle',
      multiLang: {
        fr: 'Bruxelles-Chapelle',
        nl: 'Brussel-Kapellekerk',
        de: 'Brus.-Kap. / Brux.-Chap.',
        en: 'Brux.-Chap/Brus.-Kap.',
      },
      id: [
        'S8813037',
        '8813037_5',
        '8813037_6',
        '8813037',
      ],
      geo: [
        {
          lat: 50.84113,
          lon: 4.34787,
        },
        {
          lat: 50.84113,
          lon: 4.34787,
        },
        {
          lat: 50.84113,
          lon: 4.34787,
        },
        {
          lat: 50.84113,
          lon: 4.34787,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Brustem Brandhoutstraat',
    _score: 11.681459,
    _source: {
      agencyId: 'delijn',
      text: 'Brustem Brandhoutstraat',
      gtfs_name: 'Brustem Brandhoutstraat',
      multiLang: {
        fr: 'Brustem Brandhoutstraat',
        nl: 'Brustem Brandhoutstraat',
        de: 'Brustem Brandhoutstraat',
        en: 'Brustem Brandhoutstraat',
      },
      id: [
        '33822',
        '33823',
        '33957',
      ],
      geo: [
        {
          lat: 50.810181625934696,
          lon: 5.217813048884014,
        },
        {
          lat: 50.81043963885367,
          lon: 5.215703501316606,
        },
        {
          lat: 50.80983049547763,
          lon: 5.216643197440182,
        },
      ],
    },
  },
  {
    _index: 'station',
    _type: 'location',
    _id: 'Brussel Brugmann',
    _score: 11.681459,
    _source: {
      agencyId: 'delijn',
      text: 'Brussel Brugmann',
      gtfs_name: 'Brussel Brugmann',
      multiLang: {
        fr: 'Brussel Brugmann',
        nl: 'Brussel Brugmann',
        de: 'Brussel Brugmann',
        en: 'Brussel Brugmann',
      },
      id: [
        '10060',
        '10061',
      ],
      geo: [
        {
          lat: 50.89055881002586,
          lon: 4.336575568140137,
        },
        {
          lat: 50.88994761804539,
          lon: 4.33690286338184,
        },
      ],
    },
  },
];

export default { addresses, stations };
