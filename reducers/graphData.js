import { FETCH_MOVIE1, FETCH_MOVIE2 } from '../actions/MovieAction';
import Store from '../public/index.jsx'
// import { CHANGE_GRAPH } from '../actions/GraphAction';


export function combineTwoLines(primaryGraph, secondaryGraph, relative = false) {
  // console.log('store state', Store.getState())
  // console.log(primaryGraph)
  const dateToVol = new Map(); //object with array of key value pairs [ ['one',1], ['two', 1] ]
  primaryGraph.forEach((data) => {
    const { date, primaryTrendVolume, dateRelative } = data;
    let axisData = relative ? dateRelative : date;
    const arr = [primaryTrendVolume];
    if (primaryTrendVolume) dateToVol.set(axisData, arr);
  });

console.log(dateToVol)
  secondaryGraph.forEach((data) => {
    const { date, primaryTrendVolume, dateRelative } = data;
    let secondaryTrendVolume = primaryTrendVolume;
    let axisData = relative ? dateRelative : date;
    // const arr = dateToVol.get(formattedAxisTime) || [undefined];
    const arr = dateToVol.get(axisData) || [undefined];
    arr.push(secondaryTrendVolume);
    dateToVol.set(axisData, arr);
  });
  console.log(dateToVol)

  const results = [];

  const mapIter = dateToVol.entries();
  let entry = mapIter.next().value;
  while (entry) {
    const [date, volArr] = entry;
    const primaryTrendVolume = volArr[0];
    const secondaryTrendVolume = volArr[1];
    results.push({
      date,
      primaryTrendVolume,
      secondaryTrendVolume,
    });
    entry = mapIter.next().value;
  }
  // console.log ('res', res)
  results.sort((a, b) => (new Date(a.date) <= new Date(b.date) ? -1 : 1));
  // console.log('res', res);

  return results;
}


function retrieveRelative () {
}

export function createTrends (data) {
  return data.map(data => (
    {
      date: data['formattedAxisTime'],
      dateRelative: data['formattedAxisTimeRelative'],
      primaryTrendVolume: data.value,
    }
  ))
}


export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE1:
      return createTrends(action.payload.data.trendData)

    case FETCH_MOVIE2:
      var movieTrends2 = createTrends(action.payload.data.trendData)
      return combineTwoLines(state, movieTrends2);

    default:
      return state;
  }
}