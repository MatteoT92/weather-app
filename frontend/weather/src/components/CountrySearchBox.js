import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function CountrySearchBox(props) {
    const { lingua, func } = props;
    const [language, setLanguage] = useState(lingua);

    useEffect(() => {
        setLanguage(props.lingua);
    }, [props.lingua]);

    if (language === 'ENG') {
        return (
            <div className="box-country">
                <input type="text" id="country" placeholder="Country" />
                <button onClick={func} className="btn btn-primary">Submit</button>
            </div>
        )
    } else {
        return (
            <div className="box-country">
                <input type="text" id="country" placeholder="Paese/Città" />
                <button onClick={func} className="btn btn-primary">Submit</button>
            </div>
        )
    }

}

export default CountrySearchBox;