export const GRAPHABSOLUTE = 'GRAPHABSOLUTE';
export const GRAPHRELATIVE = 'GRAPHRELATIVE';
export const MAP ='MAP';
export const TWITTER ='TWITTER';


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

export function map () {
  console.log('map')
  return {
    type: MAP,
    view: 'map'
  }
}

export function twitter () {
  console.log('twitter')
  return {
    type: TWITTER,
    view: 'twitter'
  }
}