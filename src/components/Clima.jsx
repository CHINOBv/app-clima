import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Clima extends Component {
    ShowRes=()=>{
        
        //Get Data Consult & Destructure
        const {name,main,weather} = this.props.resultado;
        if(!name|| !main|| !weather) return null;

        const k = 273.15;

        const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`

        return(
            <div className='row'>
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue center-align">
                        <span className='white-text'>
                            <h2>Resultado Clima de : {name}</h2>
                            <p className="temperatura">
                                Actual: {parseInt(main.temp-k)} &deg;C 
                                <img src={icon} alt="clima"/>
                            </p>
                            <p>Maxima: {parseInt(main.temp_max-k)}</p>
                            <p>Minima: {parseInt(main.temp_min-k)}</p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className="container">
                {this.ShowRes()}
            </div>
        );
    }
}

Clima.propTypes = {

};

export default Clima;