const data = [
  {
    id: 0,
    name: 'Azuay',
    capital: 'Cuenca',
    confirmed: 14,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -2.75,
      lng: -79.26
    }
  },
  {
    id: 1,
    name: 'Bolívar',
    capital: 'Guaranda',
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -1.5,
      lng: -79.25
    }
  },
  {
    id: 2,
    name: 'Cañar',
    capital: 'Azogues',
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -2.37,
      lng: -79.2
    }
  },
  {
    id: 3,
    name: 'Carchi',
    capital: 'Tulcán',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 4,
    name: 'Chimborazo',
    capital: 'Riobamba',
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -1.7,
      lng: -78.85
    }
  },
  {
    id: 5,
    name: 'Cotopaxi',
    capital: 'Latacunga',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 6,
    name: 'El Oro',
    capital: 'Machala',
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -3.4,
      lng: -79.9
    }
  },
  {
    id: 7,
    name: 'Esmeraldas',
    capital: 'Esmeraldas',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -0.038,
      lng: -78.659
    }
  },
  {
    id: 8,
    name: 'Galápagos',
    capital: 'Puerto Baquerizo Moreno',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -0.038,
      lng: -78.659
    }
  },
  {
    id: 9,
    name: 'Guayas',
    capital: 'Guayaquil',
    confirmed: 187,
    deaths: 0,
    compromised: 0,
    status: 'alert',
    coord: {
      lat: -1.95,
      lng: -80.18
    }
  },
  {
    id: 10,
    name: 'Imbabura',
    capital: 'Ibarra',
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0.65,
      lng: -78.4
    }
  },
  {
    id: 11,
    name: 'Loja',
    capital: 'Loja',
    confirmed: 4,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -3.7,
      lng: -79.5
    }
  },
  {
    id: 12,
    name: 'Los Ríos',
    capital: 'Babahoyo',
    confirmed: 16,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -1.45,
      lng: -79.7
    }
  },
  {
    id: 13,
    name: 'Manabí',
    capital: 'Portoviejo',
    confirmed: 8,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -0.8,
      lng: -80.4
    }
  },
  {
    id: 14,
    name: 'Morona Santiago',
    capital: 'Macas',
    confirmed: 3,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -2.4,
      lng: -78.18
    }
  },
  {
    id: 15,
    name: 'Napo',
    capital: 'Tena',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -0.038,
      lng: -78.659
    }
  },
  {
    id: 16,
    name: 'Orellana',
    capital: 'Francisco de Orellana',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 17,
    name: 'Pastaza',
    capital: 'Puyo',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 18,
    name: 'Pichincha',
    capital: 'Quito',
    confirmed: 16,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -0.038,
      lng: -78.659
    }
  },
  {
    id: 19,
    name: 'Santa Elena',
    capital: 'Santa Elena',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 20,
    name: 'Santo Domingo de los Tsáchilas',
    capital: 'Santo Domingo',
    confirmed: 1,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: -0.08,
      lng: -79.29
    }
  },
  {
    id: 21,
    name: 'Sucumbíos',
    capital: 'Nueva Loja',
    confirmed: 2,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0.18,
      lng: -77.4
    }
  },
  {
    id: 22,
    name: 'Tungurahua',
    capital: 'Ambato',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  },
  {
    id: 23,
    name: 'Zamora Chinchipe',
    capital: 'Zamora',
    confirmed: 0,
    deaths: 0,
    compromised: 0,
    status: null,
    coord: {
      lat: 0,
      lng: 0
    }
  }
];

export default data;
