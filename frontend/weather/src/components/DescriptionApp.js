import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function DescriptionApp(props) {

    const {lingua} = props;
    const [language, setLanguage] = useState(lingua);

    useEffect(() => {
        setLanguage(props.lingua);
    }, [props.lingua]);

    if (language === 'ENG') {
        return (
            <div className="col">
                <em>
                    <p>
                    Select a country and receive the weather information in real time.
                    </p>
                </em>
            </div>
        )
    } else {
        return (
            <div className="col">
                <em>
                    <p>
                    Seleziona un paese/città e riceverai le informazioni meteorologiche in tempo reale.
                    </p>
                </em>
            </div>
        )
    }

}

export default DescriptionApp;