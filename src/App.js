
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      name: {firstname: "Raiyan", lastname:"Al Sultan",},
      age: 24,
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <p>
          Hello {this.state.name.firstname} {this.state.name.lastname} and I am {this.state.age} years old.
          </p>
          <button onClick={()=>{
            this.setState({name: {firstname: "Nabil", lastname:"Abdullah"}, age:34});
          }}>Change Name</button>
        </header>
      </div>
    );
  }
  
}

export default App;
