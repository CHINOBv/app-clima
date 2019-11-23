import React,{ Component } from 'react';
import Header from './components/Header.jsx';
import Form from './components/Form.jsx';
import Error from './components/Error.jsx'

class App extends Component {
  state = { 
    Error:false
   }
  DataCons=respuesta=>{
    if(respuesta.Ciudad==='' || respuesta.Pais ===''){
      this.setState({
        Error:true
      })
    }else{
      console.log(respuesta)
    }
    
  }
  render() { 
    const error = this.state.Error
    if(error === true){
      <Error/>
    }
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
