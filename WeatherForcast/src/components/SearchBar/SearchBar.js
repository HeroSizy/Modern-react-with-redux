import React, { Component } from 'react'
import * as SearchBarAction from './SearchBarAction'
import { connect } from 'react-redux'

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        const term = event.target.value;
        this.setState({term});
    }

    onFormSubmit(event){
        event.preventDefault();

        const { fetchWeather } = this.props;
        const term = this.state.term.split(`,`);

        if(term.length > 1) fetchWeather(term[0], term[1]);
        else fetchWeather(this.state.term);

        this.setState({ term: '' })

    }

    render(){
        return(
            <form
                className="input-group"
                onSubmit={ this.onFormSubmit }>

                <input type="text"
                       placeholder="Get a five-day forecast in your favourite cities (City Name , Country Code)"
                       className="form-control"
                       value={ this.state.term }
                       onChange={ this.onInputChange }
                />

                <span className="input-group-btn">
                    <input type="submit" className="btn btn-secondary"/>
                </span>

            </form>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (cityName, countryCode = null) => dispatch( SearchBarAction.fetchWeather(cityName, countryCode))
    }
};


export default connect(null,mapDispatchToProps)(SearchBar)