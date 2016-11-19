var React = require('react');

// Stateless functional component
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build on React. I have built this following the course <a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">"The Complete React Web App Developer Course".</a></p> 
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - This was the JavaScript library used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
}

module.exports = About;
