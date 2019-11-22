import React, { Component } from "react";

class Form extends Component {
  state = {};
  //create Refs
  Ciudad = React.createRef();
  Pais = React.createRef();


  buscarClima=(e)=>{
      e.preventDefault();
    //Create Object
    const respuesta = {
        Ciudad : this.Ciudad.current.value,
        Pais : this.Pais.current.value
    }
    //send Object
    this.props.DataCons(respuesta);
  }
  render() {
    return (
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <form onSubmit={this.buscarClima}>
              <div className="input-field col s12 m8 l4 offset-m2">
                <input id="ciudad" type="text" ref={this.Ciudad}/>
                <label htmlFor="ciudad">Ciudad: </label>
              </div>
              <div className="input-field col s12 m8 l4 offset-m2">
                <select ref={this.Pais}>
                  <option value="" defaultValue>
                    Selecciona un Pais
                  </option>
                  <label htmlFor="pais">Pais: </label>
                  <option value="AR">Argentina</option>
                  <option value="CO">Colombia</option>
                  <option value="CR">Costa Rica</option>
                  <option value="ES">España</option>
                  <option value="US">Estados Unidos</option>
                  <option value="MX">Mexico</option>
                  <option value="PE">Peru</option>
                </select>
              </div>
              <div className="input-field col s12 m8 l4 offset-2">
                <input
                  type="submit"
                  value="Buscar"
                  className="wave-efect wave-ligth btn-large yellow accent-4"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
