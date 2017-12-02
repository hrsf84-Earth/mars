import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class Mapsearch extends React.Component {
  constructor() {
    super();

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    this.props.onMapSearch(this.state.term, this.props.type);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <TextField
          hintText="Type in a city name in the United States"
          floatingLabelText={this.props.floatingLabelText}
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </form>
    );
  }
}

Mapsearch.propTypes = {
  onMapSearch: PropTypes.func.isRequired,
  floatingLabelText: PropTypes.string.isRequired,
};

export default Mapsearch;
