import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Sparklines, SparklinesLine }  from 'react-sparklines'
import Chart from '../../components/Chart'
import GoogleMap from '../../components/GoogleMap'

class WeatherList extends Component {

    // constructor(props){
    //     super(props);
    // }




    renderWeather(cityData){
        if(!cityData){
            return null;
        }

        const temps = cityData.list.map(weather => weather.main.temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return(
            <tr key={ cityData.city.id }>
                <td><GoogleMap lng={lon} lat={lat} /></td>
                <td><Chart color={`red`} data={temps} units={`℃`} /></td>
                <td><Chart color={`blue`} data={pressures} units={`hPa`} /></td>
                <td><Chart color={`yellow`} data={humidities} units={`%`} /></td>
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
                        <th>Temperature (℃)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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