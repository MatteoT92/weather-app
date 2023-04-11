import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function Logo(props) {

    const {lingua} = props
    const [language, setLanguage] = useState(lingua);

    useEffect(() => {
        setLanguage(props.lingua);
    }, [props.lingua]);

    if (language === 'ENG') {
        return (
            <div className="logo col">
                <h1>
                    <img src={process.env.PUBLIC_URL + '/weather-icon.jpg'} alt="Weather conditions" id="logo-image" />
                    Weather App
                </h1>
            </div>
        )
    } else {
        return (
            <div className="logo col">
                <h1>
                    <img src={process.env.PUBLIC_URL + '/weather-icon.jpg'} alt="Situazioni meteorologiche" id="logo-image" />
                    Weather App
                </h1>
            </div>
        )
    }
}

export default Logo;