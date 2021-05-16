const BASE_URL = 'https://www.milleni.com.tr/';

export const getCities = async () => {
  let response = await fetch(BASE_URL + 'GetCities');
  let data = await response.json();
  return data;
};
export const getTowns = async id => {
  let response = await fetch(BASE_URL + 'GetCounties?cityId=' + id);
  let data = await response.json();
  return data;
};
export const getDistricts = async id => {
  fetch('https://www.milleni.com.tr/GetNeighborhoods?CountyId=' + id)
    .then(response => response.json())
    .then(data => {
      fetch(
        'https://www.milleni.com.tr/GetVillages?NeighborhoodId=' + data[0].Id,
      )
        .then(response => response.json())
        .then(data2 => {
          fetch(
            'https://www.milleni.com.tr/GetDistricts?VillageId=' + data2[0].Id,
          )
            .then(response => response.json())
            .then(data3 => {
              return data3;
            });
        });
    });
};
