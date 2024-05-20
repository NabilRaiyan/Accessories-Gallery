
import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      // name: {firstname: "Raiyan", lastname:"Al Sultan",},
      // age: 24,
      products: [],
    };
  }

  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
      .then((response)=>
        response.json()
      .then((product)=>this.setState(
        ()=>{ // shallow merge function
        return {
          products: product
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
        {/* search box to search product */}
        <input className='search-box' type='search' placeholder='Search product' onChange={(event)=>{
          const searchString = event.target.value.toLocaleLowerCase();
          const filteredProduct = this.state.products.filter((product)=>{
              return product.title.toLocaleLowerCase().includes(searchString); // return true if search input include the product title else return false
          });
          this.setState(()=>{
            return {products: filteredProduct};
          });
        }} />
        {
          this.state.products.map((product)=>{
            return (
              <div key={product.id}>
                <h3>{product.title}</h3>
              </div>
              )
          })
        }
      </div>
    );
  }
  
}

export default App;
