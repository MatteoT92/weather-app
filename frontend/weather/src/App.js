import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './components/Weather';
import DescriptionApp from './components/DescriptionApp';
import WeatherImages from './components/WeatherImages';
import Logo from './components/Logo';
import CountrySearchBox from './components/CountrySearchBox';
import ButtonsLang from './components/ButtonsLang';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [language, setLanguage] = useState('ITA'); // imposta la lingua di default come italiano

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
        <Weather lingua={language} luogo={data["location"].name} regione={data["location"].region} stato={data["location"].country} latitudine={data["location"].lat} longitudine={data["location"].lon} data={data["location"].localtime} temperatura={data["current"].temp_c} condizione={data["current"]["condition"].text} icona={data["current"]["condition"].icon} />
      ); // effettua la renderizzazione del componente Meteo con i dati meteorologici trovati
    });
  };

  return (
    <div className="container">
      <div className="row header">
        <Logo lingua={language} />
        <DescriptionApp lingua={language} />
        <ButtonsLang lingua={language} funcLangIta={() => setLanguage(prevValue => 'ITA')} funcLangEng={() => setLanguage(prevValue => 'ENG')} />
      </div>
      <WeatherImages lingua={language} />
      <CountrySearchBox lingua={language} func={weather} />
      <div id="weather" className="row"></div>
    </div>
  );
}

export default App;
