export const GRAPHABSOLUTE = 'GRAPHABSOLUTE';
export const GRAPHRELATIVE = 'GRAPHRELATIVE';
export const MOVIEDETAILS ='MOVIEDETAILS';
export const MAP ='MAP';
export const LOCATIONSENTIMENT ='LOCATIONSENTIMENT';


export function graphAbsolute () {
  console.log('graphAbsolute')
  return {
    type: GRAPHABSOLUTE,
    view: 'graphAbsolute'
  }
}

export function graphRelative () {
  console.log('graphRelative')
  return {
    type: GRAPHRELATIVE,
    view: 'graphRelative'
  }
}

export function movieDetails () {
  console.log('movieDetails')
  return {
    type: MOVIEDETAILS,
    view: 'movieDetails'
  }
}

export function map () {
  console.log('map')
  return {
    type: MAP,
    view: 'map'
  }
}

export function locationSentiment () {
  console.log('locationSentiment')
  return {
    type: LOCATIONSENTIMENT,
    view: 'locationSentiment'
  }
}