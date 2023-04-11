import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonsLang(props) {
    const { lingua, funcLangIta, funcLangEng } = props;
    const [language, setLanguage] = useState(lingua);

    useEffect(() => {
        setLanguage(props.lingua);
    }, [props.lingua]);

    if (language === 'ENG') {
        return (
            <div className="col">
                <button className="btn" onClick={funcLangIta}>
                    <img src={process.env.PUBLIC_URL + '/IT.svg'} alt="Italian flag" id="it" />
                    ITA
                </button>
                <button className="btn" onClick={funcLangEng}>
                    <img src={process.env.PUBLIC_URL + '/GB.svg'} alt="British flag" id="gb" />
                    ENG
                </button>
            </div>
        )
    } else {
        return (
            <div className="col">
                <button className="btn" onClick={funcLangIta}>
                    <img src={process.env.PUBLIC_URL + '/IT.svg'} alt="Bandiera italiana" id="it" />
                    ITA
                </button>
                <button className="btn" onClick={funcLangEng}>
                    <img src={process.env.PUBLIC_URL + '/GB.svg'} alt="Bandiera britannica" id="gb" />
                    ENG
                </button>
            </div>
        )
    }

}

export default ButtonsLang;