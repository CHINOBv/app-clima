import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Error from "./components/Error.jsx";
import Clima from "./components/Clima.jsx";

class App extends Component {
  state = {
    Error: false,
    respuesta: {},
    resultado: {}
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.respuesta != this.state.respuesta) {
      this.APICon();
    }
  }

  APICon = () => {
    //Destructuring Data
    const { Ciudad, Pais } = this.state.respuesta;
    //Validate Fields
    if (!Ciudad || !Pais) return null;
    //Declared Api ID
    const appID = "171636f1e57033ef063ae3271d79b74e";
    //API DATA URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&appid=${appID}`;

    //Query con Fecth API
    fetch(url)
      .then(respuesta => {
        return respuesta.json();
      })
      .then(datos => {
        this.setState({
          resultado: datos
        });
      })
      .catch(error => {
        this.setState({
          Error: error
        });
      });

    //Consult API
  };

  DataCons = respuesta => {
    //verificando los campos
    if (respuesta.Ciudad === "" || respuesta.Pais === "") {
      this.setState({
        Error: true
      });
    } else {
      //Add the Object to theState
      this.setState({
        respuesta,
        Error: false
      });
    }
  };
  render() {
    const error = this.state.Error;
    let resultado;
    if (error === true) {
      resultado = <Error />;
    } else {
      resultado = <Clima resultado={this.state.resultado} />;
    }
    return (
      <div className="app">
        <Header titulo={"Clima"} />
        <Form DataCons={this.DataCons} />

        {resultado}
      </div>
    );
  }
}

export default App;
