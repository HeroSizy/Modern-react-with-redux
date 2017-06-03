//import dependencies
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
//import components
import SearchBar from './components/SearchBar'
//downward data flow:
//most parent who is resposible to fetch data

const API_KEY = `AIzaSyCfZMkRWNZ7ctusOYrLBb4qnzmBG2YSSJc`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
    YTSearch({
      key: API_KEY,
      term: `anything`
    }, videos => {
      this.setState({videos})
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

const rootEl = document.querySelector('.container');
ReactDOM.render(
  <App/>, rootEl);
