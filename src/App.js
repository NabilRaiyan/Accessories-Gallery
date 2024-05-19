
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: "Jhon",
      age: 24,
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Hello {this.state.name} and I am {this.state.age} years old.
          </p>
          <button>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
