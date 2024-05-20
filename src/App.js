
import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      // name: {firstname: "Raiyan", lastname:"Al Sultan",},
      // age: 24,
      accessories: [],
    };
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
      .then((response)=>
        response.json()
      .then((jewelery)=>this.setState(
        ()=>{ // shallow merge function
        return {
          accessories: jewelery
        }
      }, ()=>{ // updated state log
        console.log(this.state);
      }))
      )
  }

  render(){
    return (
      <div className="App">
        <h1>Accessories</h1>
        <input className='search-box' type='search' placeholder='Search product' />
        {
          this.state.accessories.map((accessory)=>{
            return (
              <div key={accessory.id}>
                <h3>{accessory.title}</h3>
              </div>
              )
          })
        }
      </div>
    );
  }
  
}

export default App;
