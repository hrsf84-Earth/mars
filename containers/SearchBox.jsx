import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import { cyan100 } from 'material-ui/styles/colors';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import { fetchMovie1, fetchMovie2, fetchProducts } from '../actions/MovieAction';

class SearchBox extends Component {
  constructor() {
    super();

    this.state = {
      primaryMovieList: [],
      secondaryMovieList: [],
      walmartProducts: [],
    };

    this.style = {
      padding: '0px',
    };

    this.imgUrl = 'https://image.tmdb.org/t/p/w92';
    this.chipColor = cyan100;

    this.onMovieSearch = this.onMovieSearch.bind(this);
    this.fetchPrimaryMovie = this.fetchPrimaryMovie.bind(this);
    this.fetchSecondaryMovie = this.fetchSecondaryMovie.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
  }

  onMovieSearch(query, type) {
    axios.get(`/search/${query}`)
      .then((response) => {
        // get search back from walmart
        // console.log('response from movieSearch in Sbox: ', response.data[1].items)
        this.retrieveProducts(response.data[1].items)
        // this.setState({ walmartProducts: response.data[1].items })
        if (type === 'primary') this.setState({ primaryMovieList: response.data[0].results });
        else if (type === 'secondary') this.setState({ secondaryMovieList: response.data[0].results });
      })
      .catch(err => console.error(err));
  }

  fetchPrimaryMovie(id) {
    this.setState({ primaryMovieList: [] });
    this.props.fetchMovie1(id);
  }

  fetchSecondaryMovie(id) {
    this.setState({ secondaryMovieList: [] });
    this.props.fetchMovie2(id);
  }

  retrieveProducts(movieData) {
    this.setState({ walmartProducts: [] });
    this.props.fetchProducts(movieData);
  }

  render() {
    const hasPrimaryMovieList = this.state.primaryMovieList.length > 0;
    const hasSecondaryMovieList = this.state.secondaryMovieList.length > 0;
    const { primaryMovie, secondaryMovie, walmartProduct } = this.props;
    return (
      <Paper zDepth={2} className="search-Box">
        <div className="movie-search-container">
          <div className="movie-search-box">
            <SearchBar
              className="search-bar"
              // style={{textAlign: center}}
              onMovieSearch={this.onMovieSearch}
              floatingLabelText="Search Primary Movie"
              type="primary"
            />

            {!hasPrimaryMovieList && primaryMovie.title &&
            <Chip style={{ margin: 'auto' }} backgroundColor={this.chipColor}>
              <Avatar src={this.imgUrl + primaryMovie.images[0]} />
              {primaryMovie.title}
            </Chip>}
          </div>

          {primaryMovie.title &&
            <div className="movie-search-box">
              <SearchBar
                onMovieSearch={this.onMovieSearch}
                floatingLabelText="Search Secondary Movie"
                type="secondary"
              />

              {!hasSecondaryMovieList && secondaryMovie.title &&
              <Chip style={{ margin: 'auto' }} backgroundColor={this.chipColor}>
                <Avatar src={this.imgUrl + secondaryMovie.images[0]} />
                {secondaryMovie.title}
              </Chip>}
            </div>
          }
        </div>
        {hasPrimaryMovieList &&
          <MovieList
            movies={this.state.primaryMovieList}
            fetchMovie={this.fetchPrimaryMovie}
          />}
        {hasSecondaryMovieList &&
          <MovieList
            movies={this.state.secondaryMovieList}
            fetchMovie={this.fetchSecondaryMovie}
          />}
      </Paper>
    );
  }
}

SearchBox.propTypes = {
  fetchMovie1: PropTypes.func.isRequired,
  fetchMovie2: PropTypes.func.isRequired,
  primaryMovie: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  secondaryMovie: PropTypes.shape({
    title: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
//state
function mapStateToProps({ primaryMovie, secondaryMovie, walmartProducts }) {
  return { primaryMovie, secondaryMovie, walmartProducts };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMovie1, fetchMovie2, fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
