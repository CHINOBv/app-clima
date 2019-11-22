import React,{ Component } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx'

class App extends Component {
  state = {  }
  DataCons=respuesta=>{
    console.log(respuesta);
    
  }
  render() { 
    return ( <div className="app">
    <Header
    titulo={"Clima"}
    />
    <Form
    DataCons={this.DataCons}
    />
  </div> );
  }
}

export default App;
