import Papa from 'papaparse'

export const parseProvincesFromCSVJSON = (csvJSON) => {
  const parsedProvinces = []
  if(csvJSON && csvJSON.length > 0) {
    const headers = csvJSON[0];
    const headersLength = headers.length;
    const provinces = [...csvJSON];
    delete provinces[0]
    provinces.forEach((province, index) => {
      const provinceItem = {
        id: index,
        name: province[0],
        confirmed: province[headersLength - 1],
        lat: parseFloat(province[2]),
        lng: parseFloat(province[3]),
        status: getStatus(province[headersLength - 1]),
      }
      parsedProvinces.push(provinceItem)
    });
  }
  
  return parsedProvinces;
};

export const getCSVFile = (url) => new Promise( (resolve, reject) => {
  Papa.parse(url, {
    download: true,
    complete: (parsed) => {
      resolve(parsed.data);
    },
    error: (e) => {
      reject(e);
    }
  })
});

const getStatus = (confirmed) => {
  if(confirmed > 5000) {
    return 'alert';
  } else if(confirmed > 1500) {
    return 'warning';
  } else if(confirmed > 500) {
    return 'caution';
  }
};