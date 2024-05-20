
import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      // name: {firstname: "Raiyan", lastname:"Al Sultan",},
      // age: 24,
      accessories: [
        {
          name: "watch",
        },
        {
          name: "bracelet",
        },
        {
          name: "ring",
        },
    ]
    };
  }

  render(){
    return (
      <div className="App">
        <h1>Accessories</h1>
        {
          this.state.accessories.map((accessory)=>{
            return <h1>{accessory.name}</h1>
          })
        }
      </div>
    );
  }
  
}

export default App;
