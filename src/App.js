import React, { Component } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Error from "./components/Error.jsx";

class App extends Component {
  state = {
    Error: false,
    respuesta:{}
  };

  componentDidUpdate() {
    this.APICon();
  }

  APICon =()=>{
    const {Ciudad,Pais} =this.state.respuesta;
    if(!Ciudad|| !Pais)return null;
    const appID='71636f1e57033ef063ae3271d79b74e'
    let Url =`https://samples.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&appid=${appID}`;
    console.log(Url)
    //Query con Fecth API

    //Read URL API

    //Consult API
  }

  DataCons = respuesta => {
    //verificando los campos
    if (respuesta.Ciudad === "" || respuesta.Pais === "") {
      this.setState({
        Error: true
      });
    } else {
      //Add the Object to theState
      this.setState({
        respuesta
      })
    }
  };
  render() {
    const error = this.state.Error;
    let resultado;
    if (error === true) {
      resultado = <Error />;
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
