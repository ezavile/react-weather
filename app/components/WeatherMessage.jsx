var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
    <h3>It's it {temp}°C in {location}.</h3>
  )
}

module.exports = WeatherMessage;
