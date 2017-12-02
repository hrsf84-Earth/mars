# Project Name

### Cliff on Mars

An advanced movie database that gives passionate movie fans and studio executives easy access to movie data and social media stats of recent films. To support local sentiment analysis, legacy sprint team added mapping and geocoded sentiment graphing and regraph Google Trends information relative to the release date of a film.

## Team and Areas of Responsibility

  - Joe: Google Trends data fetching, Twitter search API request, Watson NLP API request, data analysis
  - Cliff: Documentation and testing
  - Hubert: TMDB API, server setup, Material UI, and React / Redux.
  - Tim: Recharts and database
  - Jeff: Relative graphing
  - Ted: Map component
  - Carter: Ad component
  - Janet: LocationSentiment component doing sentiment analysis by geocoded tweets and bar charting

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Setting up Development server](#setting-up-development-server)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

Point your browser at cliffonmarsdb.herokuapp.com

## Requirements

- Node
- Express
- MongoDB
- React
- Recharts
- Redux
- Axios
- Google Trends API (npm library)
- Google Maps
- Twitter API key
- Watson API key
- Material UI
- Mongoose
- Moment
- Path
- Webpack


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

### Setting up Development Server

```sh
webpack && API_KEY=[YOUR TMDB API KEY] TWITTERAPI=[YOUR TWITTER API KEY] WATSONAPI=[YOUR WATSON API KEY] WALMARTAPI=[YOUR WALMART API KEY]node app.js
```

### Roadmap

View the project roadmap [here](ROADMAP.md) and the plan [here](https://docs.google.com/document/d/15czq7Fzn3rc_JXZxyFtZpoqCtUIBf08MkfFHV2tYLOI/edit?usp=sharing)


## Contributing

Communicate, commit often, and at least 1 peer should review pull requests.
