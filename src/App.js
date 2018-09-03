import React, { Component } from 'react';
import logo from './svg/logo.svg';
import ContainerDimensions from 'react-container-dimensions';
import ProcessFrame from './ProcessFrame.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header className="page__header">
          <img src={logo} className="page__logo" alt="logo" />
        </header>
        <ContainerDimensions>
            { ({ height, width }) => <ProcessFrame height={height} width={width} /> }
        </ContainerDimensions>
      </div>
    );
  }
}

export default App;
