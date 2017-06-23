import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {

    // constructor(props){
    //     super(props);
    // }


    renderWeather(cityData){
        return(
            <tr key={cityData.city.id}>
                <td>{ cityData.city.name }</td>
            </tr>
        )
    }

    render(){
        const { weather } = this.props;

        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>

                <tbody>
                { weather.map( this.renderWeather ) }
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
};

export default connect(mapStateToProps)(WeatherList)