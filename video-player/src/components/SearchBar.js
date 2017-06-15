import React from 'react'
import { Component } from 'react'

class SearchBar extends Component {

    constructor(props){
        super(props);

        //only can manipulate state using '='
        //in constructor
        this.state = { term: '' };
        //to not lose context, use bind
        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(event) {
        const term = event.target.value;
        //event.target.value => ge t the value
        //on the element who triggers the event
        // console.log(event.target.value);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return(
            <div className="search-bar">
                <input
                    value = {this.state.term}
                    onChange={this.onInputChange}
                />
                <br />
                input: {this.state.term}
            </div>
        );
    }
}

export default SearchBar
