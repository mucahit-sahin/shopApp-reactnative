const BASE_URL = 'https://www.milleni.com.tr/';

export const getCities = async () => {
  let response = await fetch(BASE_URL + 'GetCities');
  let data = await response.json();
  return data;
};
