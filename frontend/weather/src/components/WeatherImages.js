import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function WeatherImages(props) {

    const {lingua} = props;
    const [language, setLanguage] = useState(lingua);

    useEffect(() => {
        setLanguage(props.lingua);
    }, [props.lingua]);

    if (language === 'ENG') {
        return (
            <div className="row weather-conditions">
                <img src={process.env.PUBLIC_URL + '/sunny.jpg'} alt="Sunny sky" id="sunny" />
                <img src={process.env.PUBLIC_URL + '/cloudy.jpg'} alt="Cloudy sky" id="cloudy" />
                <img src={process.env.PUBLIC_URL + '/flash.jpg'} alt="Thundery" id="flash" />
                <img src={process.env.PUBLIC_URL + '/rain.png'} alt="Person with umbrella in the rain" id="rain" />
                <img src={process.env.PUBLIC_URL + '/snow.jpg'} alt="Snowy landscape" id="snow" />
            </div>
        )
    } else {
        return (
            <div className="row weather-conditions">
                <img src={process.env.PUBLIC_URL + '/sunny.jpg'} alt="Cielo soleggiato" id="sunny" />
                <img src={process.env.PUBLIC_URL + '/cloudy.jpg'} alt="Cielo nuvoloso" id="cloudy" />
                <img src={process.env.PUBLIC_URL + '/flash.jpg'} alt="Temporali" id="flash" />
                <img src={process.env.PUBLIC_URL + '/rain.png'} alt="Persona con ombrello sotto la pioggia" id="rain" />
                <img src={process.env.PUBLIC_URL + '/snow.jpg'} alt="Paesaggio innevato" id="snow" />
            </div>
        )
    }

}

export default WeatherImages;