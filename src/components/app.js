import React, { Component } from 'react';



// App
  // Searchbar
  import SearchBar from '../containers/search_bar';
  // ForecastList
  import WeatherList from '../containers/weather_list';
    // Chart

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
