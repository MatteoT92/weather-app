import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Meteo from './components/Meteo';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [language, setLanguage] = useState('ITA'); // imposta la lingua di default come italiano

  useEffect(() => { // effettua il rendering e re-rendering in base allo stato della variabile language
    switch (language) {
      case 'ITA': // se la lingua è quella italiana imposta il valore dei seguenti elementi del DOM in italiano
        document.getElementById('information').innerHTML = '';
        document.getElementById('information').innerHTML = 'Seleziona un paese/città e riceverai le informazioni meteorologiche in tempo reale.';
        document.getElementById('logo-image').alt = '';
        document.getElementById('logo-image').alt = 'Situazioni meteorologiche';
        document.getElementById('it').alt = '';
        document.getElementById('it').alt = 'Bandiera italiana';
        document.getElementById('gb').alt = '';
        document.getElementById('gb').alt = 'Bandiera britannica';
        document.getElementById('sunny').alt = '';
        document.getElementById('sunny').alt = 'Cielo soleggiato';
        document.getElementById('cloudy').alt = '';
        document.getElementById('cloudy').alt = 'Cielo nuvoloso';
        document.getElementById('flash').alt = '';
        document.getElementById('flash').alt = 'Temporali';
        document.getElementById('rain').alt = '';
        document.getElementById('rain').alt = 'Persona con ombrello sotto la pioggia';
        document.getElementById('snow').alt = '';
        document.getElementById('snow').alt = 'Paesaggio innevato';
        document.getElementById('country').placeholder = '';
        document.getElementById('country').placeholder = 'Paese/Città';
        break;
      case 'ENG': // se la lingua è quella inglese imposta il valore dei seguenti elementi del DOM in inglese
        document.getElementById('information').innerHTML = '';
        document.getElementById('information').innerHTML = 'Select a country and receive the weather information in real time.';
        document.getElementById('logo-image').alt = '';
        document.getElementById('logo-image').alt = 'Weather conditions';
        document.getElementById('it').alt = '';
        document.getElementById('it').alt = 'Italian flag';
        document.getElementById('gb').alt = '';
        document.getElementById('gb').alt = 'British flag';
        document.getElementById('sunny').alt = '';
        document.getElementById('sunny').alt = 'Sunny sky';
        document.getElementById('cloudy').alt = '';
        document.getElementById('cloudy').alt = 'Cloudy sky';
        document.getElementById('flash').alt = '';
        document.getElementById('flash').alt = 'Thundery';
        document.getElementById('rain').alt = '';
        document.getElementById('rain').alt = 'Person with umbrella in the rain';
        document.getElementById('snow').alt = '';
        document.getElementById('snow').alt = 'Snowy landscape';
        document.getElementById('country').placeholder = '';
        document.getElementById('country').placeholder = 'Country';
        break;
      default: // imposta di default gli elementi del DOM in lingua italiana
        document.getElementById('information').innerHTML = '';
        document.getElementById('information').innerHTML = 'Seleziona un paese/città e riceverai le informazioni meteorologiche in tempo reale.';
        document.getElementById('logo-image').alt = '';
        document.getElementById('logo-image').alt = 'Situazioni meteorologiche';
        document.getElementById('it').alt = '';
        document.getElementById('it').alt = 'Bandiera italiana';
        document.getElementById('gb').alt = '';
        document.getElementById('gb').alt = 'Bandiera britannica';
        document.getElementById('sunny').alt = '';
        document.getElementById('sunny').alt = 'Cielo soleggiato';
        document.getElementById('cloudy').alt = '';
        document.getElementById('cloudy').alt = 'Cielo nuvoloso';
        document.getElementById('flash').alt = '';
        document.getElementById('flash').alt = 'Temporali';
        document.getElementById('rain').alt = '';
        document.getElementById('rain').alt = 'Persona con ombrello sotto la pioggia';
        document.getElementById('snow').alt = '';
        document.getElementById('snow').alt = 'Paesaggio innevato';
        document.getElementById('country').placeholder = '';
        document.getElementById('country').placeholder = 'Paese/Città';
    }
  });

  const api = require('./api-key.json'); // ritorna il JSON contenete la chiave per accedere all'API di terze parti

  const weather = (e) => {
    e.preventDefault();
    document.getElementById('weather').innerHTML = ""; // resetta il contenuto nel div con id weather
    let country = document.getElementById('country').value; // ritorna il valore del paese/città cercata dall'utente
    let key = api.key; // ritorna la chiave API
    let url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${country}&aqi=no`;
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()) // formatta il risultato in JSON
    .then(data => {
      const weather = ReactDOM.createRoot(document.getElementById('weather')); // crea un root nel div con id weather
      weather.render(
        <Meteo lingua={language} luogo={data["location"].name} regione={data["location"].region} stato={data["location"].country} latitudine={data["location"].lat} longitudine={data["location"].lon} data={data["location"].localtime} temperatura={data["current"].temp_c} condizione={data["current"]["condition"].text} icona={data["current"]["condition"].icon} />
      ); // effettua la renderizzazione del componente Meteo con i dati meteorologici trovati
    });
  };

  return (
    <div className="container">
      <div className="row header">
        <div className="logo col">
          <h1>
            <img src={process.env.PUBLIC_URL + '/weather-icon.jpg'} alt="Situazioni meteorologiche" id="logo-image" />
            Weather App
          </h1>
        </div>
        <div className="col">
          <em>
            <p id="information">
              Seleziona un paese/città e riceverai le informazioni meteorologiche in tempo reale.
            </p>
          </em>
        </div>
        <div className="col flags">
          <button className="btn" onClick={() => setLanguage(prevValue => 'ITA')}>
            <img src={process.env.PUBLIC_URL + '/IT.svg'} alt="Bandiera italiana" id="it" />
            ITA
          </button>
          <button className="btn" onClick={() => setLanguage(prevValue => 'ENG')}>
            <img src={process.env.PUBLIC_URL + '/GB.svg'} alt="Bandiera britannica" id="gb" />
              ENG
          </button>
        </div>
      </div>
      <div className="row weather-conditions">
        <img src={process.env.PUBLIC_URL + '/sunny.jpg'} alt="Cielo soleggiato" id="sunny" />
        <img src={process.env.PUBLIC_URL + '/cloudy.jpg'} alt="Cielo nuvoloso" id="cloudy" />
        <img src={process.env.PUBLIC_URL + '/flash.jpg'} alt="Temporali" id="flash" />
        <img src={process.env.PUBLIC_URL + '/rain.png'} alt="Persona con ombrello sotto la pioggia" id="rain" />
        <img src={process.env.PUBLIC_URL + '/snow.jpg'} alt="Paesaggio innevato" id="snow" />
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
