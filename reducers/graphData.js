import { FETCH_MOVIE1, FETCH_MOVIE2 } from '../actions/MovieAction';
import Store from '../public/index.jsx'
import { CHANGE_GRAPH } from '../actions/GraphAction';

function combineTwoLines(primaryGraph, secondaryGraph, relative = false) {
  // console.log('store state', Store.getState())
  const dateToVol = new Map(); //object with array of key value pairs [ ['one',1], ['two', 1] ]

  primaryGraph.forEach((data) => {
    const { date, primaryTrendVolume } = data;
    const arr = [primaryTrendVolume];
    if (primaryTrendVolume) dateToVol.set(date, arr);
  });

  secondaryGraph.forEach((data) => {
    const { formattedAxisTime, value, formattedAxisTimeRelative } = data;
    const axisData = relative ? formattedAxisTimeRelative : formattedAxisTime;
    // const arr = dateToVol.get(formattedAxisTime) || [undefined];
    const arr = dateToVol.get(axisData) || [undefined];
    arr.push(value);
    dateToVol.set(axisData, arr);
  });

  const res = [];

  const mapIter = dateToVol.entries();
  let entry = mapIter.next().value;
  while (entry) {
    const [date, volArr] = entry;
    const primaryTrendVolume = volArr[0];
    const secondaryTrendVolume = volArr[1];
    res.push({
      date,
      primaryTrendVolume,
      secondaryTrendVolume,
    });
    entry = mapIter.next().value;
  }
  // console.log ('res', res)
  res.sort((a, b) => (new Date(a.date) <= new Date(b.date) ? -1 : 1));
  // console.log(res);

  return res;
}

function retrieveRelative () {

}

export default function (state = [], action, relative = true) {
  switch (action.type) {
    case FETCH_MOVIE1:
      // let axisData = relative ? 'formattedAxisTimeRelative' : 'formattedAxisTime';
      return action.payload.data.trendData.map(data => (
        {
          date: data['formattedAxisTime'],
          dateRelative: data['formattedAxisTimeRelative'],
          primaryTrendVolume: data.value,
        }
      ));
    case FETCH_MOVIE2:
      return combineTwoLines(state, action.payload.data.trendData, relative);
    default:
      return state;
  }
}
