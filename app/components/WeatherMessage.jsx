var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var {temp, location} = this.props;

    return (
      <h3>It's it {temp}°C in {location}.</h3>
    )
  }
});

module.exports = WeatherMessage;
