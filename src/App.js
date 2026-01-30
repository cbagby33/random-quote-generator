import logo from './logo.svg';
import './App.css';
import React from 'react';

class QuoteBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      quote: '',
      author: '',
      occupation:'',
      color:''
    }
  }
  render () {
    return (
      <div className="inner-container">
        <div id="quote-box">
          <div id="text"></div>
          <div id="author"></div>
          <div className="buttons">
            <a id="tweet-quote"></a>
            <button id="new-quote">New Quote</button>
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
