import React, {Component} from 'react';
import './App.css';
import CalculatorContainer from './components/Container';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React JS Calculator
          &nbsp;<i className="fas fa-calculator"></i>
        </h1>
        <CalculatorContainer/>
        <p>You can also use your keyboard. Delete with key 'D', Evaluate with Numerical Enter Key.</p>
      </div>
    );
  }
}

export default App;