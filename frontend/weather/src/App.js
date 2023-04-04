import React from 'react';
import ReactDOM from 'react-dom/client';
import Meteo from './components/Meteo';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const api = require('./api-key.json');

  const weather = (e) => {
    e.preventDefault();
    document.getElementById('weather').innerHTML = "";
    let country = document.getElementById('country').value;
    let key = api.key;
    let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${country}&aqi=no`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json())
    .then(data => {
      const weather = ReactDOM.createRoot(document.getElementById('weather'));
      weather.render(
        <Meteo luogo={data["location"].name} regione={data["location"].region} stato={data["location"].country} latitudine={data["location"].lat} longitudine={data["location"].lon} data={data["location"].localtime} temperatura={data["current"].temp_c} condizione={data["current"]["condition"].text} icona={data["current"]["condition"].icon} />
      );
    });
  }

  return (
    <div className="container">
      <div className="row header">
        <div className="logo col">
          <h1>
            <img src={process.env.PUBLIC_URL + '/weather-icon.jpg'} alt="Situazioni meteorologiche" />
            Weather App
          </h1>
        </div>
        <div className="col">
          <em>
            <p>
              Seleziona un paese/città e riceverai le informazioni meteorologiche in tempo reale.
            </p>
          </em>
        </div>
        <div className="col flags">
          <button className="btn">
            <img src={process.env.PUBLIC_URL + '/IT.svg'} alt="Bandiera italiana" />
            ITA
          </button>
          <button className="btn">
          <img src={process.env.PUBLIC_URL + '/GB.svg'} alt="Bandiera britannica" />
            ENG
          </button>
        </div>
      </div>
      <div className="box-country">
        <input type="text" id="country" placeholder="Paese/Città" />
        <button onClick={weather} className="btn btn-primary">Submit</button>
      </div>
      <div id="weather" className="row"></div>
    </div>
  );
}

export default App;
