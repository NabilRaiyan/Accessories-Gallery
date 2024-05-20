
import { Component } from 'react';
import './App.css';


class App extends Component {

  constructor(){
    super();

    this.state = {
      // name: {firstname: "Raiyan", lastname:"Al Sultan",},
      // age: 24,
      products: [],
      searchField: '',
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

    const filteredProduct = this.state.products.filter((product)=>{
      return product.title.toLocaleLowerCase().includes(this.state.searchField); // return true if search input include the product title else return false
    });

    return (
      <div className="App">
        <h1>Accessories</h1>
        {/* search box to search product */}
        <input className='search-box' type='search' placeholder='Search product' onChange={(event)=>{
          const searchField = event.target.value.toLocaleLowerCase();
         
          this.setState(()=>{
            return {searchField};
          });
        }} />
        {
          filteredProduct.map((product)=>{
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
