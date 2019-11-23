import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s2 m6 offset-m3">
                        <div className="card-panel red darken-4 error">
                            <h1>Los campos son obligatorios</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;