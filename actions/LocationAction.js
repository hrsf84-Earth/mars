
export const FETCH_LOCATIONDATA = 'FETCH_LOCATIONDATA';



export function fetchLocationData(lat,lng) {

  return {
    type: FETCH_LOCATIONDATA,
    lat: lat,
    lng: lng
  };
}
