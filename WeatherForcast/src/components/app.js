import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import WeatherList from './WeatherList/WeatherList'

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
