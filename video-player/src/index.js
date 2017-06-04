//import dependencies
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
//import components
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
//downward data flow:
//most parent who is resposible to fetch data

const API_KEY = `AIzaSyCfZMkRWNZ7ctusOYrLBb4qnzmBG2YSSJc`

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }


    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term
        }, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        });
    }

    render() {
        const videoSearch = _.debounce(
            term => {
                this.videoSearch(term)
            },
            300
        );

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => {
                        this.setState({selectedVideo})
                    }}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

const rootEl = document.querySelector('.container');
ReactDOM.render(
    <App/>, rootEl);
