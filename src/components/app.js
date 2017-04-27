import React, { Component } from 'react';

// App
  // Searchbar
  import SearchBar from '../containers/search_bar';
    //  Search input
    //  Search Button
  // ForecastList
    // Chart

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
