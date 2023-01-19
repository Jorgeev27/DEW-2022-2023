import React, { Component } from 'react';
import './App.css';
import ComponentMoneda from './Components/ComponentMoneda';

class App extends Component {
  render(){
    return(
      <div className="App">
        <h1 className='text-center text-black'>Jorge Escobar Viñuales_AUT4_02_React_Conversor de Monedas</h1>
        <br/>
        <ComponentMoneda/>
      </div>
    )
  }
}

export default App;