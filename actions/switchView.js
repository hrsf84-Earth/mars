export const GRAPHABSOLUTE = 'GRAPHABSOLUTE';
export const GRAPHRELATIVE = 'GRAPHRELATIVE';
export const MOVIEDETAILS ='MOVIEDETAILS';
export const MAP ='MAP';
export const LOCATIONSENTIMENT ='LOCATIONSENTIMENT';


export function graphAbsolute () {
  return {
    type: GRAPHABSOLUTE,
    view: 'graphAbsolute'
  }
}

export function graphRelative () {
  return {
    type: GRAPHRELATIVE,
    view: 'graphRelative'
  }
}

export function movieDetails () {
  return {
    type: MOVIEDETAILS,
    view: 'movieDetails'
  }
}

export function map () {
  return {
    type: MAP,
    view: 'map'
  }
}

export function locationSentiment () {
  return {
    type: LOCATIONSENTIMENT,
    view: 'locationSentiment'
  }
}