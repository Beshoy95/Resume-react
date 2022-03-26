import React, { Component } from 'react';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import About from './Pages/About/About';
import Skills from './Pages/Skills/Skills';
import Portfolio from './Pages/Portfolio/Portfolio';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}
