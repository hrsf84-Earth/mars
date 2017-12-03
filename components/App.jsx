import React from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import SearchBox from '../containers/SearchBox';
import MovieDetail from '../containers/MovieDetail';
import Ads from '../containers/Ads.jsx';

export default function App() {
  return (
    <Paper>
      <AppBar
        title="Cliff Movie DB"
        showMenuIconButton={false}
      />
      <SearchBox />
      <MovieDetail />
      <Ads />
    </Paper>
  );
}



