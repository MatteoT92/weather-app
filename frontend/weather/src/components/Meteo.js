import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export class Meteo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { lingua, luogo, regione, stato, latitudine, longitudine, data, temperatura, condizione, icona } = this.props;
        if (lingua === 'ITA') {
            return (
                <div className="container box">
                    <div className="row">
                        <div className="col">
                            <span><strong>Paese/Città:</strong> {luogo}</span><br />
                            <span><strong>Regione:</strong> {regione}</span><br />
                            <span><strong>Stato:</strong> {stato}</span><br />
                            <span><strong>Latitudine:</strong> {latitudine}</span><br />
                            <span><strong>Longitudine:</strong> {longitudine}</span><br />
                            <span><strong>Data:</strong> {data}</span>
                        </div>
                        <div className="col">
                            <span><strong>Temperatura:</strong> {temperatura}°C</span><br />
                            <span><strong>Condizione:</strong> {condizione}</span>
                            <img src={icona} alt="Icona condizione meteorologica" width="50px" />
                        </div>
                    </div>
                </div>
                )
        } else if (lingua === 'ENG') {
            return (
                <div className="container box">
                    <div className="row">
                        <div className="col">
                            <span><strong>Country:</strong> {luogo}</span><br />
                            <span><strong>Region:</strong> {regione}</span><br />
                            <span><strong>State:</strong> {stato}</span><br />
                            <span><strong>Latitude:</strong> {latitudine}</span><br />
                            <span><strong>Longitude:</strong> {longitudine}</span><br />
                            <span><strong>Date:</strong> {data}</span>
                        </div>
                        <div className="col">
                            <span><strong>Temperature:</strong> {temperatura}°C</span><br />
                            <span><strong>Condition:</strong> {condizione}</span>
                            <img src={icona} alt="Weather condition icon" width="50px" />
                        </div>
                    </div>
                </div>
                )
        } else {
            return (
                <div className="container box">
                    <div className="row">
                        <div className="col">
                            <span><strong>Paese/Città:</strong> {luogo}</span><br />
                            <span><strong>Regione:</strong> {regione}</span><br />
                            <span><strong>Stato:</strong> {stato}</span><br />
                            <span><strong>Latitudine:</strong> {latitudine}</span><br />
                            <span><strong>Longitudine:</strong> {longitudine}</span><br />
                            <span><strong>Data:</strong> {data}</span>
                        </div>
                        <div className="col">
                            <span><strong>Temperatura:</strong> {temperatura}°C</span><br />
                            <span><strong>Condizione:</strong> {condizione}</span>
                            <img src={icona} alt="Icona condizione meteorologica" width="50px" />
                        </div>
                    </div>
                </div>
                )
        } 
    }
    
}

export default Meteo;