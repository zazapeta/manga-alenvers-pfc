import React, { Component } from 'react';
import broly from './broly.jpg';
import goku from './goku.gif';
import vegeta from './vegeta.gif';
import vegeto from './vegeto.gif';
import './App.css';

function pickRandom(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function Pierre() {
  return <img src={vegeto} width="120" height="120" />;
}

function Feuille() {
  return <img src={goku} width="120" height="120" />;
}

function Ciseaux() {
  return <img src={vegeta} width="120" height="120" />;
}

const Symboles = [Pierre, Feuille, Ciseaux];

function Ordinateur() {
  const C = pickRandom(Symboles);
  return <C />;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { k: 0 };
  }
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url('${broly}')`,
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={goku} width="120" height="120" />
          <img src={vegeta} width="120" height="120" />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={vegeto} width="120" height="120" />
        </div>
        <button onClick={() => this.setState({ k: Math.random() })}>
          Tirer
        </button>
        <Ordinateur key={this.state.k} />
      </div>
    );
  }
}

export default App;
