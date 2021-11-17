  import React from 'react';                                 
  import './App.css'
  // import Calculator from './Calculator';
  import Display from "./components/Display.js"
  // import Keypad from './components/Keypad'
  import ClearButton from './components/ClearButton'


  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '0',
        // displayValue (What the screen currently displays)
        //displayValue: '0',
        // previousValue (What value the user selected before pressing an operation button)
        previousValue: [],
        // operation (What operation the user is performing (+/-/÷/x))
        //operation: '',
        result: '',
        operation: '',
      };
    }

    subtract = () => {
      this.setState({
        input: this.state.input - 1,
      });
    }
    
    addUserInput = (event) => {
      this.setState({
        input: this.state.input + event.target.value,
        // input: [...this.state.input, event.target.innerText],
        // result: event.target.value,
      })
      console.log(event.target.value);
    }; 

    handleButton = (event) => {
      if (event.target.value === '=') {
        this.handleCalc();
      } else if (event.target.value === '+') {
        this.setState({
          operation: '+',
          result: this.state.input + event.target.value,
        });
      }
      console.log(event.target.value);
    };

    handleCalc = (event) => {
      if (event === '+') {
        this.setState({
          result: event.target.value + event.target.value,
        });
      }
    };

      render() {
        return (
          <div className='app'>
            <div className='container'> 

              <Display input={this.state.input}/>

              <div className='row'>
                <button 
                value='7' onClick={this.addUserInput}>7 
                </button> 

                <button 
                value='8' onClick={this.addUserInput}>8
                </button>  

                <button 
                value='9' onClick={this.addUserInput}>9
                </button>  

                <button 
                value='/' onClick={this.addUserInput}>/
                </button>  
              </div>

              <div className='row'>
                <button 
                value='4' onClick={this.addUserInput}>4
                </button>  
                <button 
                value='5' onClick={this.addUserInput}>5
                </button>  
                <button 
                value='6' onClick={this.addUserInput}>6
                </button>  
                <button 
                value='*' onClick={this.addUserInput}>*
                </button>  
              </div>

              <div className='row'>
                <button value='1' onClick={this.addUserInput}>1
                </button>  
                <button 
                value='2' onClick={this.addUserInput}>2
                </button>  
                <button 
                value='3' onClick={this.addUserInput}>3
                </button>  
                <button
                value='+' onClick={this.addUserInput}>+
                </button>  
              </div>

              <div className='row'>
                <button 
                value=',' onClick={this.addUserInput}>,
                </button>  
                <button 
                value='0' onClick={this.addUserInput}>0
                </button>  
                <button 
                value='=' onClick={this.addUserInput}>=
                </button>  
                <button 
                value='-'
                onClick={this.addUserInput}>-
                </button>  
              </div>
               
              <div className='row'>
            <ClearButton handleClear={() => this.setState({ input: '' })}>
              AC
            </ClearButton>
              </div>  
            </div>
          </div>  
      );
    }
  }

    export default App;



