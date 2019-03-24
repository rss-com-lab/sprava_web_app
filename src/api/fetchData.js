import { SPRAVA_API_MAIN_URL, SPRAVA_API_URL } from '../constants/constants';

function fetchData(apiType) {
// check correctly of apiType
  if (!SPRAVA_API_URL.apiType) {
    throw new Error(`Unknown type of API: ${apiType}`);
  }

  const requestAddress = `${SPRAVA_API_MAIN_URL}/${SPRAVA_API_URL.apiType}`;
  fetch(requestAddress)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network connection error');
    });
  console.log('zxsdf');
}

export default fetchData;
