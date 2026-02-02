import logo from './logo.svg';
import './App.css';
import React from 'react';
import * as data from './quotes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

const quotes = Array.from(data);

const generateRandomBrown = () => {
  const browns = ['#DFCCB5', '#D7C1A6', '#CFB697', '#C7AB88', '#BFA079', '#B7956A', '#AF8A5B', '#A77F4C', '#9F743D', '#97692E', '#8F5E1F', '#8A571D', '#85501B', '#804919', '#7B4217', '#763B15', '#713413', '#6C2D11', '#67260F', '#62200D', '#5D1A0B', '#5A1F10', '#572415', '#54291A', '#512E1F', '#4E3324', '#4B3829', '#483D2E', '#454233', '#424738', '#3F4C3D', '#3C5142', '#394647', '#363B3C', '#333031', '#302526', '#2D1F22', '#2A1A1E', '#27151A', '#241016', '#210B12', '#1F090F', '#1D080D', '#1B070B', '#190609', '#170507', '#160506', '#150405', '#140404', '#130303', '#120302', '#110201', '#100200', '#0F0200', '#0E0100', '#0D0100', '#0C0100', '#0B0100', '#0A0000', '#090000', '#080000', '#070000', '#060000', '#050000', '#040000', '#030000', '#2B1B14', '#3A241A', '#4A2E21', '#5A3828', '#6A422F', '#7A4C36', '#8A563D', '#9A6044', '#AA6A4B', '#BA7452', '#CA7E59', '#DA8860', '#E29267', '#D98A5F', '#C97C52', '#B96E45', '#A96038', '#994F2B', '#893F1E', '#793111', '#6A2A0E', '#5B230B', '#4C1C08', '#3D1505', '#2E0E02', '#260B01', '#1E0800', '#160500', '#0E0200', '#060000'];
  return `${browns[Math.floor(Math.random() * (browns.length+1))]}`;
}
const generateRandomQuote = () => {
  const randIdx = Math.floor(Math.random() * quotes.length)
  return quotes[randIdx];
}

class QuoteBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      quote: '',
      author: '',
      occupation:'',
      color: ''
    }
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    const newQuote = generateRandomQuote();
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
      occupation: newQuote.occupation,
      color: generateRandomBrown()
    })
  }
  componentDidMount() {
    const initQuote = generateRandomQuote();
    this.setState({
      quote: initQuote.quote,
      author: initQuote.author,
      occupation: initQuote.occupation,
      color: generateRandomBrown()
    })
  } 
  render () {
    return (
      <div id="inner-container" style={{backgroundColor: `${ this.state.color }`}}>
        <div id="quote-box" style={{color: `${ this.state.color }`}}>
          <FontAwesomeIcon icon="fa-solid fa-quote-left" />
          <div id="text" className="bold-text">{this.state.quote}</div>
          <FontAwesomeIcon icon="fa-solid fa-quote-right" />
          <div id="author-container">
            <div id="author" className="bold-text">{this.state.author}</div>
            <div id="occupation">{this.state.occupation}</div>
          </div>
          <div id="button-container">
            <div className="social-buttons">
              <a id="tweet-quote" style={{color: `${ this.state.color }`}} href={`https://twitter.com/intent/tweet?text=${this.state.quote}`}><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
            </div>
            <button id="new-quote" onClick={this.newQuote} style={{backgroundColor: `${ this.state.color }`}}>New Quote</button>
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
